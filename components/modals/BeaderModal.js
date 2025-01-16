"use client";

import { supabaseClient } from "@/supabaseClient";
import { Dialog, Switch, Transition } from "@headlessui/react";
import { Select, SelectItem } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineLoading } from "react-icons/ai";
import { CgSpinnerAlt } from "react-icons/cg";
import { GiCheckMark } from "react-icons/gi";

const BeaderModal = ({ id, beader, beading, beaders, tailoring, qc_admin, staff_admin }) => {
  const router = useRouter();

  const [assignBeaderSwitch, setAssignBeaderSwitch] = useState(false);

  const [loading, setLoading] = useState(false);

  const [enabled, setEnabled] = useState(beading);

  const [selectedBeader, setSelectedBeader] = useState("");
  const handleSelectionChange = (e) => {
    setSelectedBeader(e.target.value);
  };

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const assignBeader = async () => {
    setLoading(true);
    try {
      const { error } = await supabaseClient
        .from("customers")
        .update({ beader: selectedBeader })
        .eq("id", id)
        .select();

      if (error) {
        throw new Error(`Something went wrong: ${error.message}`);
      }
      if (!error) {
        const { error: error_2 } = await supabaseClient
          .from("staffers")
          .update({ status: true })
          .eq("name", selectedBeader)
          .select();

        if (error_2) {
          throw new Error(`Something went wrong: ${error.message}`);
        }

        if (error_2) {
          toast.success(`Beading job has been assigned successfully`, {
            duration: 5000,
            position: "top-center",
          });
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

  const confirmBeading = async () => {
    setLoading(true);
    try {
      const { error } = await supabaseClient
        .from("customers")
        .update({ beading: enabled })
        .eq("id", id)
        .select();

      if (error) {
        throw new Error(`Something went wrong: ${error.message}`);
      }
      if (!error) {
        if (enabled) {
          const { error: error_2 } = await supabaseClient
            .from("staffers")
            .update({ status: false })
            .eq("name", beader)
            .select();

          if (error_2) {
            throw new Error(`Something went wrong: ${error.message}`);
          }

          if (!error_2) {
            toast.success(`Beading done and confirmed`, {
              duration: 5000,
              position: "top-center",
            });
          }
        } else {
          await supabaseClient
            .from("staffers")
            .update({ status: true })
            .eq("name", beader)
            .select();

          toast.error(`You just confirmed that beading is not done yet.`, {
            duration: 6000,
            position: "top-center",
          });
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
        disabled={staff_admin !== "Sales" && staff_admin !== "Manager"}
        type='button'
        onClick={openModal}
        className={`relative ${
          beading ? "bg-[#55c694]" : "bg-[#55c694]/40"
        } w-[25%] mx-auto flex items-center justify-center  text-white disabled:cursor-not-allowed`}>
        Beading
        {tailoring && !beading && (
          <AiOutlineLoading className='absolute text-xl animate-spin text-red-500' />
        )}
        {beading && (
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
                    Beader Confirmation
                  </Dialog.Title>
                  <div className='mt-2 text-sm'>
                    {beader ? (
                      <div>
                        <p className='text-center'>Beader: {beader}</p>
                        {tailoring ? (
                          <>
                            <div className='flex items-center justify-center gap-4 py-6'>
                              <p>Still beading</p>
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
                                      enabled
                                        ? "translate-x-9"
                                        : "translate-x-0"
                                    }
            pointer-events-none inline-block h-[31px] w-[31px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                                  />
                                </Switch>
                              </div>
                              <p>Beading done</p>
                            </div>
                            <button
                              onClick={confirmBeading}
                              className='bg-[#55c694] w-full rounded-xl py-2.5 text-white'>
                              {loading ? (
                                <div className='whitespace-nowrap flex items-center justify-center gap-4'>
                                  <CgSpinnerAlt className='text-xl animate-spin' />{" "}
                                  <span>Confirming...</span>
                                </div>
                              ) : (
                                "Confirm Beading"
                              )}
                            </button>
                          </>
                        ) : (
                          <p className='text-red-400 text-center mt-3'>
                            To confirm beading, you must have to confirm
                            tailoring first.
                          </p>
                        )}
                      </div>
                    ) : (
                      <>
                        {!assignBeaderSwitch ? (
                          <div className='flex flex-col items-center justify-center gap-4'>
                            <p className='text-center'>
                              No Beader has been assigned for this job.
                            </p>
                            <button
                              onClick={() => setAssignBeaderSwitch(true)}
                              className='bg-black/20 textgray-900 rounded-xl px-8 py-2.5'>
                              Assign one
                            </button>
                          </div>
                        ) : (
                          <div>
                            <div>
                              <Select
                                items={beaders}
                                label='Select a beader'
                                className=''
                                variant='bordered'
                                onChange={handleSelectionChange}
                                classNames={{
                                  label:
                                    "group-data-[filled=true]:-translate-y-5",
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
                                    content:
                                      "p-0 border-small border-divider bg-background",
                                  },
                                }}
                                renderValue={(items) => {
                                  return items.map((item) => (
                                    <div
                                      key={item.key}
                                      className='flex items-center gap-2'>
                                      <div className='flex flex-col'>
                                        <span>{item.data.name}</span>
                                        {item.data.status && (
                                          <span className='text-red-500 text-tiny'>
                                            has a job already
                                          </span>
                                        )}
                                      </div>
                                    </div>
                                  ));
                                }}>
                                {(user) => (
                                  <SelectItem
                                    key={user.name}
                                    textValue={user.name}>
                                    <div className='flex gap-2 items-center'>
                                      <div className='flex flex-col'>
                                        <span className='text-small'>
                                          {user.name}
                                        </span>
                                        {user.status && (
                                          <span className='text-red-500 text-tiny'>
                                            has a job already
                                          </span>
                                        )}
                                      </div>
                                    </div>
                                  </SelectItem>
                                )}
                              </Select>
                              {/* <p>Selected: {value}</p> */}
                            </div>
                            <button
                              onClick={assignBeader}
                              disabled={!selectedBeader}
                              className='bg-black/20 text-black py-2.5 rounded-xl mt-4 w-full tracking-wider disabled:text-gray-500 disabled:cursor-not-allowed'>
                              {loading ? (
                                <div className='whitespace-nowrap flex items-center justify-center gap-4'>
                                  <CgSpinnerAlt className='text-xl animate-spin' />{" "}
                                  <span>Assigning...</span>
                                </div>
                              ) : (
                                "Assign"
                              )}
                            </button>
                          </div>
                        )}
                      </>
                    )}
                  </div>

                  <div className='mt-6 flex justify-end'>
                    <button
                      type='button'
                      className='inline-flex justify-center rounded-md border border-transparent bg-red-600/20 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-600/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
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

export default BeaderModal;
