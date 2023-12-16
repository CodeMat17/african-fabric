"use client";

import { Dialog, Transition } from "@headlessui/react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";
import { CgSpinnerAlt } from "react-icons/cg";

const SigninComponent = () => {
  const supabase = createClientComponentClient();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const signIn = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setErrorMsg(null);

      let { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
        options: {
          emailRedirectTo: `${location.origin}/auth/callback`,
        },
      });

      if (error) {
        setErrorMsg(error.message);
      }

      if (data) {
        router.refresh();
        router.push("/account");
      }
    } catch (error) {
      console.log("Error Msg:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={openModal}
        className='bg-[#55c694] hover:bg-[#55c694]/80 text-white w-full px-4 py-2.5 rounded-xl'>
        Sign in
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
                <Dialog.Panel className='w-full max-w-xs sm:max-w-sm transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title
                    as='h3'
                    className='text-lg font-medium leading-6 text-gray-900'>
                    Sign In
                  </Dialog.Title>
                  {errorMsg && (
                    <p className='text-sm text-red-600 bg-red-700/10 px-2 pb-2 pt-1 rounded-xl mt-2 text-center'>
                      {errorMsg}
                    </p>
                  )}

                  <form noValidate className='group'>
                    <div className='mt-3 flex flex-col gap-3 text-sm'>
                      <div>
                        <label className=' text-gray-500'>Email</label>
                        <input
                          type='email'
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          pattern='[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$'
                          placeholder='Enter your email'
                          className='peer invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 placeholder:italic placeholder:text-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 w-full outline-none bg-[#55c694]/10 py-2.5 px-3 rounded-xl'
                        />
                        <span className='hidden text-xs text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block'>
                          Please enter a valid email address
                        </span>
                      </div>
                      <div>
                        <label className=' text-gray-500'>Password</label>
                        <input
                          type='password'
                          required
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          pattern='.{6,}'
                          placeholder='Enter your email'
                          className='peer invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 placeholder:italic placeholder:text-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 w-full outline-none bg-[#55c694]/10 py-2.5 px-3 rounded-xl'
                        />
                        <span className='hidden text-xs text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block'>
                          Password must be at least 6 chars long
                        </span>
                      </div>
                    </div>
                  </form>

                  <div className='mt-7 flex items-center justify-between'>
                    <button
                      type='button'
                      className='inline-flex justify-center rounded-xl border border-transparent bg-gray-200 px-4 py-2 font-medium text-black hover:bg-black/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-black-500 focus-visible:ring-offset-2'
                      onClick={closeModal}>
                      Close
                    </button>
                    <button
                      disabled={!email || !password}
                      className={`inline-flex justify-center gap-4 rounded-xl border border-transparent bg-[#55c694] px-4 py-2 font-medium text-white hover:bg-[#55c694]/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 disabled:bg-red-600/30 disabled:cursor-not-allowed ${
                        loading ? "cursor-not-allowed" : ""
                      }`}
                      onClick={signIn}>
                      {loading ? (
                        <>
                          <CgSpinnerAlt className='text-2xl animate-spin' />{" "}
                          Signing...
                        </>
                      ) : (
                        "Sign In"
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

export default SigninComponent;
