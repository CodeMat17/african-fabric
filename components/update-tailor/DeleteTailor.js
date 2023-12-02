"use client";

import { supabaseClient } from "@/supabaseClient";
import { Dialog, Transition } from "@headlessui/react";
import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";
import toast from "react-hot-toast";
import { CgSpinnerAlt } from "react-icons/cg";

const DeleteTailor = ({ id, name }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const deleteTailor = async () => {
    const { error } = await supabaseClient
      .from("tailors")
      .delete()
      .eq("id", id);

    if (error) {
      throw new Error("Something went wrong: ", error.message);
    }
    if (!error) {
      toast.success("Deleted successfully", {
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
      router.back();
    }
  };

    return (
      <>
        <button
          onClick={openModal}
          className='font-medium w-full py-2 mt-2 rounded-xl bg-red-600 text-white tracking-wider'>
          Delete Tailor
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
                      Delete Tailor
                    </Dialog.Title>
                    <div className='mt-4'>
                      <p className='text-sm text-center text-gray-500'>
                        Are you sure you want to delete
                        <span className='px-1 text-red-600'>{name}</span> from
                        the tailors list ?
                      </p>
                    </div>

                    <div className='mt-6 flex items-center justify-center gap-8'>
                      <button
                        type='button'
                        className='inline-flex justify-center rounded-md border border-transparent bg-black/10 px-4 py-2 text-sm font-medium text-black hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2'
                        onClick={closeModal}>
                        No!
                      </button>
                      <button
                        onClick={deleteTailor}
                        type='button'
                        className='inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'>
                        {loading ? (
                          <div className='flex itemcen justify-center gap-3'>
                            <CgSpinnerAlt className='text-xl animate-spin' />
                            Deleting...
                          </div>
                        ) : (
                          "Delete"
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

export default DeleteTailor;
