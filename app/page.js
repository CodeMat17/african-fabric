"use client";

import MagicSignup from "@/components/MagicSignup";
import SigninComponent from "@/components/SigninComponent";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const revalidate = 0;

export default function Home() {
  const router = useRouter();

  return (
    <div className='relative w-full h-screen overflow-hidden'>
      {/* Background Image */}
      <div className='absolute inset-0 w-full h-full'>
        <Image
          alt='Background'
          src='/bg/bg_4.webp' // Ensure this path is correct
          fill
          priority
          className='object-cover'
        />
        {/* Gradient Overlay */}
        <div className='absolute inset-0 bg-gradient-to-tr from-purple-950 via-green-800 to-green-900 opacity-50 mix-blend-overlay'></div>
      </div>

      {/* Main Content */}
      <div className='relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4'>
        {/* Logo Section */}
        <div className='flex flex-col items-center justify-center relative'>
          <div className='relative w-[290px] h-[290px] sm:w-[330px] sm:h-[330px] animate-spin-slower'>
            <Image
              alt='Logo'
              src='/logo/logo_name.webp'
              fill
              priority
              className='object-contain'
            />
          </div>

          {/* Centered Logo Tag Image */}
          <div className='absolute inset-0 flex justify-center items-center'>
            <div className='relative w-[160px] sm:w-[190px] aspect-video bg-white/20 rounded-3xl'>
              <Image
                alt='Logo Tag'
                src='/logo/logo_tag.webp'
                fill
                priority
                className='object-cover'
              />
            </div>
          </div>
        </div>

        {/* Authentication Components */}
        <div className='flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-12'>
          {/* Uncomment and use as needed */}
          {/* <MagicSignup /> */}
          <SigninComponent />
          {/* <ResetPasswordModal /> */}
        </div>

        {/* Optional: Forgot Password */}
        {/* <div className="flex justify-center items-center gap-1 text-sm mt-6">
          Forgot password? <ResetPasswordModal />
        </div> */}
      </div>
    </div>
  );
}
