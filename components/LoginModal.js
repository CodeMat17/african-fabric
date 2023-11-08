'use client'
import { Dialog, Transition } from "@headlessui/react";
import { useState, Fragment } from "react";
import { useRouter } from "next/navigation";
// import { TbMailForward, TbShieldLock } from "react-icons/tb";


const LoginModal = () => {
    const router  = useRouter()
let [isOpen, setIsOpen] = useState(false);

function closeModal() {
  setIsOpen(false);
}

function openModal() {
  setIsOpen(true);
}

  return (
    <>
      <div>
        <button
          type='button'
          onClick={openModal}
          className='rounded-xl bg-[#55c694] px-4 py-2 text-sm font-medium text-white whitespace-nowrap hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75'>
          Get Started
        </button>
      </div>

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
                    className='text-lg  text-center font-medium leading-6 text-gray-900'>
                    Welcome to <br />
                    <span className='text-[#55c694]'>
                      African Fabric and Designs Kenya Ltd.
                    </span>
                  </Dialog.Title>
                  <div className='mt-8 flex items-center justify-around gap-x-4'>
                    {/* <p className='text-sm text-gray-500'>
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order.
                    </p> */}
                    <button className='bg-[#55c694]/10 hover:bg-[#55c694]/20 text-[#55c694] w-full px-4 py-2 rounded-xl'>
                      Sign up
                    </button>
                    <button onClick={() => router.push('/dashboard')} className='bg-[#55c694] hover:bg-[#55c694]/80 text-white w-full px-4 py-2 rounded-xl'>
                      Sign in
                    </button>
                  </div>

                  <div className='mt-4'>
                    <button
                      type='button'
                      className='w-full inline-flex justify-center rounded-xl bg-black/5 px-4 py-2 text-sm font-medium text-black hover:bg-black/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
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
}

export default LoginModal