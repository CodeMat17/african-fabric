"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { supabaseClient } from "@/supabaseClient";
import { format } from "date-fns";
import dayjs from "dayjs";
import { CalendarIcon } from "lucide-react";
import { CldImage } from "next-cloudinary";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { CgSpinnerAlt } from "react-icons/cg";

import "react-datepicker/dist/react-datepicker.css";

const AssignToTailorComponent = ({ tailors, id, name, fabric }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const [tailor, setTailor] = useState("");
  const [tailorBusy, setTailorBusy] = useState(false);
  const [assignedOnDate, setAssignedOnDate] = useState();
  const [finishDate, setFinishDate] = useState();

  // const handleSelectionChange = (e) => {
  //   setTailor(e.target.value);
  // };

  const assignATailor = async () => {
    try {
      console.log("Starting...");
      setLoading(true);

      console.log("Preparing dates");
      // Convert assigned and finish dates to UTC ISO strings
      const toUtcIsoString = (date) => {
        const utcDate = new Date(
          date.getTime() - date.getTimezoneOffset() * 60000
        );
        return utcDate.toISOString();
      };

      const assignedISODate = toUtcIsoString(assignedOnDate);
      const finishISODate = toUtcIsoString(finishDate);

      console.log("Dates prepared...");

      const { error: customerError } = await supabaseClient
        .from("customers")
        .update({
          tailor,
          tailoring_assigned_on: assignedISODate,
          tailoring_finish_on: finishISODate,
        })
        .eq("id", id)
        .select();

      if (customerError) {
        throw new Error(`Something went wrong: ${customerError.message}`);
      }
      console.log("Done updating Customers data...");
      console.log("Preparing to update tailors data...");
      // if (!error) {
      const { error: tailorError } = await supabaseClient
        .from("tailors")
        .update({
          busy: true,
          assigned_on: assignedISODate,
          to_finish_on: finishISODate,
        })
        .eq("name", tailor)
        .select();

      if (tailorError) {
        throw new Error(`Something went wrong: ${tailorError.message}`);
      }
      console.log("Done updating tailors data...");
      console.log("Run toast...");
      // if (!error_2) {
      toast.success(`This job has been assigned to ${tailor} successfully`, {
        duration: 5000,
        position: "top-center",
      });
      console.log("Toast done...");
      console.log("refresh...");
      router.refresh();
      console.log("Refreshed...");
      console.log("Back...");
      router.back();
      // }
      // }
    } catch (error) {
      console.log("Error Msg: ", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSelect = (id) => {
    const selectedTailor = tailors.find((t) => t.id.toString() === id);
    if (selectedTailor) {
      setTailor(selectedTailor.name);
      setTailorBusy(selectedTailor.busy);
    } else {
      setTailor("");
      setTailorBusy(false);
    }
  };

  return (
    <div className='pt-8 w-full lg:max-w-3xl mx-auto flex flex-col lg:flex-row items-center gap-8'>
      <div className='w-full flex flex-col gap-4'>
        <Select onValueChange={handleSelect}>
          <SelectTrigger className='w-full py-3'>
            <SelectValue placeholder='Select tailors' />
          </SelectTrigger>
          <SelectContent>
            {tailors.map((tailor) => (
              <SelectItem key={tailor.id} value={tailor.id.toString()}>
                <section>
                  <p>
                    {tailor.name}{" "}
                    {tailor.busy ? (
                      <span className='text-red-500'>(Busy)</span>
                    ) : (
                      "(Available)"
                    )}
                  </p>
                  {tailor.busy && (
                    <p className='flex gap-2 text-sm text-gray-400'>
                      {dayjs(tailor.assigned_on).format("MMM DD, YYYY")} -
                      {dayjs(tailor.to_finish_on).format("MMM DD, YYYY")}
                    </p>
                  )}
                </section>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal bg-inherit",
                  (!assignedOnDate || tailorBusy) && "text-muted-foreground"
                )}
                disabled={tailorBusy}>
                <CalendarIcon size={16} />
                {assignedOnDate ? (
                  format(assignedOnDate, "MMM dd, yyyy")
                ) : (
                  <span>Start date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className='w-auto p-0' align='start'>
              <Calendar
                mode='single'
                selected={assignedOnDate}
                onSelect={setAssignedOnDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        <div>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal bg-inherit",
                  (!finishDate || tailorBusy) && "text-muted-foreground"
                )}
                disabled={tailorBusy}>
                <CalendarIcon size={16} />
                {finishDate ? (
                  format(finishDate, "MMM dd, yyyy")
                ) : (
                  <span>End date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className='w-auto p-0' align='start'>
              <Calendar
                mode='single'
                selected={finishDate}
                onSelect={setFinishDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        <div>
          <button
            disabled={finishDate === undefined || tailorBusy || !tailor}
            onClick={assignATailor}
            className='bg-[#55c694] text-white textsm font-medium tracking-wider py-3 rounded-xl w-full disabled:bg-[#55c694]/20 disabled:text-gray-400 disabled:cursor-not-allowed'>
            {loading ? (
              <div className='flex items-center justify-center gap-x-4'>
                <CgSpinnerAlt className='text-xl animate-spin' />
                <span>Assigning...</span>
              </div>
            ) : (
              "Assign"
            )}
          </button>
        </div>
      </div>
      <div className='border w-full sm:w-[30%] rounded-2xl flex flex-col items-center justify-center p-4 bg-gray-100'>
        <h2 className='text-lg font-medium'>Reference</h2>
        <p className='mt-2 text-sm text-center whitespace-nowra'>
          Owner - {name}
        </p>
        <div className='mt-2'>
          <CldImage
            width='160'
            height='80'
            crop='thumb'
            gravity='faces'
            src={fabric}
            sizes='50vw'
            alt='fabric image'
            loading='lazy'
            className='rounded-xl'
          />
          <p className='text-sm text-center'>Selected fabric</p>
        </div>
      </div>
    </div>
  );
};

export default AssignToTailorComponent;
