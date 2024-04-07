"use client";

import { supabaseClient } from "@/supabaseClient";
import { Dialog, Transition } from "@headlessui/react";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import { useRouter } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import { CgSpinnerAlt } from "react-icons/cg";

const FittingSchedule = ({
  id,
  text,
  classnames,
  confirmed_fitting_date,
  email,
}) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [fitting_date, setFittingDate] = useState(
    setHours(setMinutes(new Date(), 0), 0)
  );
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const [admin_name, setAdminName] = useState("");
  useEffect(() => {
    if (email === "manager@africanfabricanddesigns.com") {
      setAdminName("Manager");
    }
  }, []);

  useEffect(() => {
    if (email === "qc@africanfabricanddesigns.com") {
      setAdminName("Quality Control Manager");
    }
  }, []);

  useEffect(() => {
    if (email === "consultant3@africanfabricanddesigns.com") {
      setAdminName("Consultant 3");
    }
  }, []);

  useEffect(() => {
    if (email === "consultant2@africanfabricanddesigns.com") {
      setAdminName("Consultant 2");
    }
  }, []);

  useEffect(() => {
    if (email === "consultant1@africanfabricanddesigns.com") {
      setAdminName("Consultant 1");
    }
  }, []);

  useEffect(() => {
    if (email === "beaders@africanfabricanddesigns.com") {
      setAdminName("Beader");
    }
  }, []);

  console.log("Admin name: ", admin_name);
  console.log("fitting date: ", fitting_date);
  if (fitting_date) {
    // const utcDate = new Date(
    //   fitting_date.getTime() - fitting_date.getTimezoneOffset() * 60000
    // );
    const isoDate = fitting_date.toISOString()

    console.log("fitting ISO: ", isoDate);
  }

  const updateFittingDate = async () => {
    if (!fitting_date) {
      alert(
        "You have not selected a date. Click on the calendar to select the fitting date."
      );
    } else {
      try {
        setLoading(true);

        const utcDate = new Date(
          fitting_date.getTime() - fitting_date.getTimezoneOffset() * 60000
        );
        const isoDate = utcDate.toISOString().toLocaleString();

        const { error } = await supabaseClient
          .from("customers")
          .update({
            fitting_date: isoDate,
            fitting_confirmed_by: admin_name,
            // fitting_done: true,
            // status: "fitting done",
          })
          .eq("id", id)
          .select();

        if (error) {
          alert(`ERROR: ${error.message}`);
        }
        if (!error) {
          toast.success("Updated successfully", {
            duration: 5000,
            position: "top-center",

            // Aria
            ariaProps: {
              role: "status",
              "aria-live": "polite",
            },
          });
          router.refresh();
          closeModal();
          router.back();
        }
      } catch (error) {
        console.log("Error Msg: ", error.message);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <>
      <button
        type='button'
        onClick={openModal}
        className=' rounded-lg px-6 py-1.5 shadow-md bg-white'>
        Enter date n time
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'>
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'>
                <Dialog.Panel className='w-full h-[80vh] max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title
                    as='h3'
                    className='text-lg text-center font-medium leading-6 text-gray-900'>
                    Enter confirmed fitting date{" "}
                  </Dialog.Title>
                  <div>
                    <div className='py-6 flex justify-center'>
                      <DatePicker
                        // showIcon
                        placeholderText='Click to add fitting date'
                        selected={fitting_date}
                        showTimeSelect
                        onChange={(date) => setFittingDate(date)}
                        dateFormat='MMM dd, yyyy h:mm a'
                        className='bg-inherit outline-none text-center text-gray-500 border p-4 w-full rounded-xl cursor-pointer'
                      />
                    </div>
                    <div className='mt-[70%] flex justify-between'>
                      <button
                        type='button'
                        className='inline-flex justify-center rounded-md border border-transparent bg-red-600/20 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-600/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
                        onClick={closeModal}>
                        Close
                      </button>
                      <button
                        type='button'
                        disabled={loading}
                        className='inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-green-600/70 px-4 py-2 text-sm font-medium text-white hover:bg-green-600/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
                        onClick={updateFittingDate}>
                        {loading ? (
                          <>
                            <CgSpinnerAlt className='animate-spin text-xl' />{" "}
                            <span>Uploading</span>
                          </>
                        ) : (
                          "Update"
                        )}
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default FittingSchedule;
