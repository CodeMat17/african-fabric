"use client";

import { supabaseClient } from "@/supabaseClient";
import { Dialog, Switch, Transition } from "@headlessui/react";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineLoading } from "react-icons/ai";
import { CgSpinnerAlt } from "react-icons/cg";
import { GiCheckMark } from "react-icons/gi";

const TailorModal = ({
  id,
  tailoring,
  tailor,
  assigned_on,
  finished_on,
  staff_admin,
}) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [enabled, setEnabled] = useState(tailoring);

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const confirmTailoring = async () => {
    setLoading(true);
    try {
      const { error } = await supabaseClient
        .from("customers")
        .update({ tailoring: enabled })
        .eq("id", id)
        .select();

      if (error) {
        throw new Error(`Something went wrong: ${error.message}`);
      }
      if (!error) {
        if (enabled) {
          const { error: error_2 } = await supabaseClient
            .from("staffers")
            .update({ busy: false, assigned_on: null, to_finish_on: null })
            .eq("name", tailor)
            .select();

          if (error_2) {
            throw new Error(`Something went wrong: ${error.message}`);
          }

          if (!error_2) {
            toast.success(`Tailoring done and confirmed`, {
              duration: 5000,
              position: "top-center",
            });
          }
        } else {
          const { error: error_3 } = await supabaseClient
            .from("staffers")
            .update({
              busy: true,
              assigned_on: assigned_on,
              to_finish_on: finished_on,
            })
            .eq("name", tailor)
            .select();

          if (error_3) {
            throw new Error(`Something went wrong: ${error.message}`);
          }

          if (!error_3) {
            toast.error(`You just confirmed that tailoring is not done yet.`, {
              duration: 6000,
              position: "top-center",
            });
          }
        }
      }
    } catch (error) {
      console.log("Error Msg: ", error.message);
    } finally {
      router.refresh();
      setLoading(false);
      closeModal();
    }
  };

  return (
    <>
      <button
        disabled={staff_admin !== "Consultant" && staff_admin !== "Manager"}
        type='button'
        onClick={openModal}
        className={`relative ${
          tailoring ? "bg-[#55c694]" : "bg-[#55c694]/40"
        } w-[25%] mx-auto flex items-center justify-center  text-white disabled:cursor-not-allowed`}>
        Tailoring
        {!tailoring && (
          <AiOutlineLoading className='absolute text-xl animate-spin text-red-500' />
        )}
        {tailoring && (
          <GiCheckMark className='absolute top-1 left-2 text-[15px] text-white' />
        )}
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
                <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title
                    as='h3'
                    className='text-lg text-center font-medium leading-6 text-gray-900'>
                    Tailoring Control
                  </Dialog.Title>
                  <div className='mt-2'>
                    <table className='table-auto text-sm text-gray-500'>
                      {/* <thead>
                          <tr>
                            <th>Song</th>
                            <th>Artist</th>
                            <th>Year</th>
                          </tr>
                        </thead> */}
                      <tbody>
                        <tr>
                          <td>Name: </td>
                          <td>{tailor}</td>
                        </tr>
                        <tr>
                          <td className='pr-4'>Assigned on:</td>
                          <td>{dayjs(assigned_on).format("MMM DD, YYYY")}</td>
                        </tr>
                        <tr>
                          <td className='pr-4'>To finish on:</td>
                          <td>{dayjs(finished_on).format("MMM DD, YYYY")}</td>
                        </tr>
                      </tbody>
                    </table>
                    {tailor && (
                      <div className='mt-3 text-sm'>
                        <div className='flex items-center justify-center gap-4 py-6'>
                          <p>Still tailoring</p>
                          <div>
                            <Switch
                              checked={enabled}
                              onChange={setEnabled}
                              className={`${
                                enabled ? "bg-[#55c694]" : "bg-gray-400"
                              }
          relative inline-flex h-[35px] w-[71px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}>
                              <span className='sr-only'>Use setting</span>
                              <span
                                aria-hidden='true'
                                className={`${
                                  enabled ? "translate-x-9" : "translate-x-0"
                                }
            pointer-events-none inline-block h-[31px] w-[31px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                              />
                            </Switch>
                          </div>
                          <p>Tailoring done</p>
                        </div>
                        <button
                          onClick={confirmTailoring}
                          className='bg-[#55c694] w-full rounded-xl py-2.5 text-white font-medium tracking-wider'>
                          {loading ? (
                            <div className='whitespace-nowrap flex items-center justify-center gap-4'>
                              <CgSpinnerAlt className='text-xl animate-spin' />{" "}
                              <span>Confirming...</span>
                            </div>
                          ) : (
                            "Confirm Tailoring"
                          )}
                        </button>
                      </div>
                    )}
                  </div>

                  <div className='mt-4 flex justify-end'>
                    <button
                      type='button'
                      className='inline-flex justify-center rounded-md border border-transparent bg-black/20 px-4 py-2 text-sm font-medium text-black hover:bg-black/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                      onClick={closeModal}>
                      Close
                    </button>
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

export default TailorModal;
