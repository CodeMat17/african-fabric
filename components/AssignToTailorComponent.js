"use client";

import { supabaseClient } from "@/supabaseClient";
import { Select, SelectItem } from "@nextui-org/react";
import dayjs from "dayjs";
import { CldImage } from "next-cloudinary";
import { useRouter } from "next/navigation";
import { useState } from "react";
import DatePicker from "react-datepicker";
import toast from "react-hot-toast";
import { CgSpinnerAlt } from "react-icons/cg";

import "react-datepicker/dist/react-datepicker.css";

const AssignToTailorComponent = ({ tailors, id, name, fabric }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const [tailor, setTailor] = useState("");
  const handleSelectionChange = (e) => {
    setTailor(e.target.value);
  };

  const [assignedOnDate, setAssignedOnDate] = useState();
  const [finishDate, setFinishDate] = useState();

  // toISOString();

  const assignATailor = async () => {
    try {
      setLoading(true);
      const { error } = await supabaseClient
        .from("customers")
        .update({
          tailor,
          tailoring_assigned_on: assignedOnDate,
          tailoring_finish_on: finishDate,
        })
        .eq("id", id)
        .select();

      if (error) {
        throw new Error(`Something went wrong: ${error.message}`);
      }
      if (!error) {
        const { error: error_2 } = await supabaseClient
          .from("staffers")
          .update({
            busy: true,
            assigned_on: assignedOnDate,
            to_finish_on: finishDate,
          })
          .eq("name", tailor)
          .select();

        if (error_2) {
          throw new Error(`Something went wrong: ${error.message}`);
        }

        if (!error_2) {
          toast.success(
            `This job has been assigned to ${tailor} successfully`,
            {
              duration: 5000,
              position: "top-center",
            }
          );

          router.refresh();
          router.back();
        }
      }
    } catch (error) {
      console.log("Error Msg: ", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='pt-8 w-full lg:max-w-3xl mx-auto flex flex-col items-center sm:flex-row sm:justify-around gap-8'>
      <div className='w-full sm:w-[70%] mt-4 text-sm flex flex-col gap-4'>
        <div>
          <Select
            items={tailors}
            label='Select a tailor'
            className=''
            variant='bordered'
            onChange={handleSelectionChange}
            classNames={{
              label: "group-data-[filled=true]:-translate-y-5",
              trigger: "min-h-unit-16",
              listboxWrapper: "max-h-[400px]",
            }}
            listboxProps={{
              itemClasses: {
                base: [
                  "rounded-md",
                  "text-default-500",
                  "transition-opacity",
                  "data-[hover=true]:text-foreground",
                  "data-[hover=true]:bg-default-100",
                  "dark:data-[hover=true]:bg-default-50",
                  "data-[selectable=true]:focus:bg-default-50",
                  "data-[pressed=true]:opacity-70",
                  "data-[focus-visible=true]:ring-default-500",
                ],
              },
            }}
            popoverProps={{
              classNames: {
                base: "before:bg-default-200",
                content: "p-0 border-small border-divider bg-background",
              },
            }}
            renderValue={(items) => {
              return items.map((item) => (
                <div key={item.key} className='flex items-center gap-2'>
                  <div className='flex flex-col'>
                    <span>{item.data.name}</span>
                    {item.data.busy && (
                      <span className='text-red-500 text-tiny'>
                        has a job already
                      </span>
                    )}
                  </div>
                </div>
              ));
            }}>
            {(user) => (
              <SelectItem key={user.name} textValue={user.name}>
                {/* <div className='flex gap-2 items-center'> */}
                <div className='flex flex-col'>
                  <span className='text-small'>{user.name}</span>
                  {user.busy && (
                    <span className='text-red-500 text-tiny'>
                      has a job already
                    </span>
                  )}
                </div>
                {/* </div> */}
              </SelectItem>
            )}
          </Select>
          {/* <p>Selected: {value}</p> */}
        </div>

        <div>
          <label className='text-sm'>Assigned on</label>
          <p className='border-2 py-4 px-3 mt-1 rounded-xl text-gray-500 cursor-not-allowed'>
            <DatePicker
              // showIcon
              placeholderText='Click to add assigned on date'
              selected={assignedOnDate}
              onChange={(date) => setAssignedOnDate(date)}
              dateFormat='MMM dd, yyyy'
              className='bg-inherit outline-none text-gray-500'
            />
          </p>
        </div>

        <div>
          <label className='text-sm'>To complete on</label>
          <div className='border-2 py-4 px-3 mt-1 rounded-xl text-gray-500'>
            <DatePicker
              // showIcon
              placeholderText='Click to add finish date'
              selected={finishDate}
              onChange={(date) => setFinishDate(date)}
              dateFormat='MMM dd, yyyy'
              className='bg-inherit outline-none text-gray-500'
            />
          </div>
        </div>
        <div>
          <button
            disabled={finishDate === undefined || !tailor}
            onClick={assignATailor}
            className='bg-[#55c694] text-white textsm font-medium tracking-wider py-3 rounded-xl w-full disabled:bg-[#55c694]/20 disabled:text-gray-400 disabled:cursor-not-allowed'>
            {loading ? (
              <div className='flex items-center justify-center gap-x-4'>
                <CgSpinnerAlt className='text-xl animate-spin' />
                <span>Assigning</span>
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
