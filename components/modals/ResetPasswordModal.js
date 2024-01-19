"use client";

import { supabaseClient } from "@/supabaseClient";
import { Dialog, Transition } from "@headlessui/react";
import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";
import { CgSpinnerAlt } from "react-icons/cg";

const RestPasswordModal = ({}) => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [invalidEmail, setInvalidEmail] = useState(null);
  const [successful, setSuccessful] = useState(false);

  const emailPattern = "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$";

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const resetPassword = async () => {
    setLoading(true);
    setErrorMsg(null);
    setInvalidEmail(null);
    if (!email.match(emailPattern) || !email) {
      setInvalidEmail("Enter a valid email address.");
      setLoading(false);
      return;
    }

    if (email.match(emailPattern)) {
      try {
        let { data, error } = await supabaseClient.auth.resetPasswordForEmail(
          email
        );
        if (error) {
          setErrorMsg(error.message);
        }
        if (data) {
          setSuccessful(true);
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
        className={`text-blue-600 hover:underline`}>
        Click here
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
                    Reset Password
                  </Dialog.Title>

                  {successful && (
                    <div className='text-green-600 text-sm text-center bg-green-100 rounded-xl mt-3 py-2 px-3'>
                      Successful! Check your email for the reset link.
                    </div>
                  )}

                  {errorMsg && (
                    <div className='my-4 text-center bg-red-100 px-4 py-2 rounded-xl text-sm text-red-600'>
                      {errorMsg}
                    </div>
                  )}
                  <div className='mt-3 text-smflex items-center justify-center gap-4 py-6'>
                    <input
                      type='email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder='Enter email'
                      className='rounded-xl border px-3 py-2 w-full ring-green-400'
                    />
                    {invalidEmail && (
                      <span className='text-sm text-red-600'>
                        {invalidEmail}
                      </span>
                    )}
                  </div>

                  <div className='mt-4 flex justify-between items-center gap-12'>
                    <button
                      type='button'
                      className='w-full inline-flex justify-center rounded-xl border border-transparent bg-black/20 px-4 py-2 text-sm font-medium text-black hover:bg-black/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                      onClick={closeModal}>
                      Close
                    </button>
                    <button
                      onClick={resetPassword}
                      className='bg-[#55c694] w-full rounded-xl px-3 py-2 text-white font-medium tracking-wider test-sm'>
                      {loading ? (
                        <div className='whitespace-nowrap flex items-center justify-center gap-2'>
                          <CgSpinnerAlt className='text-xl animate-spin' />{" "}
                          <span>wait...</span>
                        </div>
                      ) : (
                        "Reset"
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

export default RestPasswordModal;
