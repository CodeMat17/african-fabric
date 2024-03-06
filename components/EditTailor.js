"use client";

import { supabaseClient } from "@/supabaseClient";
import { Dialog, Transition } from "@headlessui/react";
import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";
import toast from "react-hot-toast";
import { CgSpinner } from "react-icons/cg";

const EditTailor = ({ id, tname, ttel }) => {
  const router = useRouter();

  const [name, setName] = useState(tname);
  const [tel, setTel] = useState(ttel);
  const [loading, setLoading] = useState(false);

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const editInfo = async () => {
    try {
      setLoading(true);

      const { error } = await supabaseClient
        .from("tailors")
        .update({ name, tel })
        .eq("id", id)
        .select();

      if (error) {
        throw new Error("Something went wrong: ", error.message);
      }
      if (!error) {
        toast.success("Edited successfully", {
          duration: 4000,
          position: "top-center",
          // Aria
          ariaProps: {
            role: "status",
            "aria-live": "polite",
          },
        });
        router.refresh();
        closeModal();
        // router.back();
      }
    } catch (error) {
      console.log("Error Msg: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={openModal}
        className='bg-black/5 font-semibold text-black px-8 py-1.5 rounded-lg'>
        Edit info
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
            <div className='fixed inset-0 bg-black/25' />
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
                    Edit Tailor Info
                  </Dialog.Title>
                  <div className='mt-4 text-sm flex flex-col gap-3'>
                    <div>
                      <label>Name</label>
                      <input
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className='w-full px-3 py-2.5 mt-1 rounded-xl outline-none focus:outline-none focus:ring-2 bg-gray-100'
                      />
                    </div>
                    <div>
                      <label>Tel</label>
                      <input
                        type='text'
                        value={tel}
                        onChange={(e) => setTel(e.target.value)}
                        className='w-full px-3 py-2.5 mt-1 rounded-xl outline-none focus:outline-none focus:ring-2 bg-gray-100'
                      />
                    </div>
                  </div>

                  <div className='mt-6 flex items-center justify-center gap-8'>
                    <button
                      type='button'
                      className='w-full inline-flex justify-center rounded-xl border border-transparent bg-black/10 px-4 py-2 text-sm font-medium text-black hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2'
                      onClick={closeModal}>
                      Close
                    </button>
                    <button
                      onClick={editInfo}
                      type='button'
                      className='w-full inline-flex justify-center rounded-xl border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'>
                      {loading ? (
                        <CgSpinner className='text-xl animate-spin' />
                      ) : (
                        "Edit"
                      )}
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

export default EditTailor;
