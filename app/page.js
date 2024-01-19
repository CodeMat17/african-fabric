"use client";

import SigninComponent from "@/components/SigninComponent";
import SignupComponent from "@/components/SignupComponent";
import ResetPasswordModal from "@/components/modals/ResetPasswordModal";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Home() {
  const router = useRouter();

  return (
    <div className='min-h-screen flex items-center justify-center bg-cover bg-center bg-gradient-to-tr from-purple-950 via-green-800 to-green-900'>
      <div className='absolute inset-0 w-full h-full bg-cover bg-center mix-blend-overlay'>
        <Image
          alt='BG'
          // placeholder='blur'
          quality={100}
          priority
          fill
          // sizes='100vw'
          src='/bg/bg_4.webp'
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className='z-10 text-white text-center'>
        <div className='flex flex-col items-center justify-center '>
          <div className='relative w-[290px] h-[290px] sm:w-[330px] sm:h-[330px] animate-spin-slower'>
            <Image alt='logo' fill priority src='/logo/logo_name.webp' />
          </div>
          <div className='absolute bg-white/50 rounded-full overflow-hidden'>
            <div className='relative w-[160px] sm:w-[190px] aspect-video'>
              <Image alt='logo' fill priority src='/logo/logo_tag.webp' />
            </div>
          </div>
        </div>

        <div className='flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-12'>
          <SignupComponent />
          <SigninComponent />
        </div>
        <div className='flex justify-center items-center gap-1 text-sm mt-6'>
          Forgot password? <ResetPasswordModal />
        </div>
      </div>
    </div>
    // <div className=' flex items-center justify-center bg-cover bg-center bg-gradient-to-tr from-purple-950 via-green-800 to-green-900'>
    //   <div className=' w-full h-screen bg-cover bg-center mix-blend-overlay'>
    //     <Image
    //       alt='BG'
    //       // placeholder='blur'
    //       quality={100}
    //       priority
    //       fill
    //       // sizes='100vw'
    //       src='/bg/bg_4.webp'
    //       style={{ objectFit: "cover" }}
    //     />

    //     <section className='absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center'>
    //       <div className='relative w-[290px] h-[290px] sm:w-[330px] sm:h-[330px] animate-spin-slower'>
    //         <Image alt='logo' fill priority src='/logo/logo_name.webp' />
    //       </div>
    //       <div className='absolute bg-white/50 rounded-full overflow-hidden'>
    //         <div className='relative w-[160px] sm:w-[190px] aspect-video'>
    //           <Image alt='logo' fill priority src='/logo/logo_tag.webp' />
    //         </div>
    //       </div>
    //     </section>
    //     <div className='absolute bottom-[22%] sm:bottom-[19%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex w-full max-w-[280px] gap-4  mx-auto'>
    //       <SignupComponent />
    //       <SigninComponent />
    //     </div>
    //   </div>
    // </div>
  );
}
