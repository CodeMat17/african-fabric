"use client";

import { useRouter } from "next/navigation";

// import { TbMailForward, TbShieldLock } from "react-icons/tb";

import LoginModal from "@/components/LoginModal";
import Image from "next/image";

export default function Home() {
    const router = useRouter();


  return (
    <div className='relative bg-gradient-to-tr from-purple-950 via-green-800 to-green-900'>
      <div className='relative w-full h-screen mix-blend-overlay'>
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
      <section className='absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center'>
        <div className='relative w-[290px] h-[290px] sm:w-[330px] sm:h-[330px] animate-spin-slower'>
          <Image alt='logo' fill priority src='/logo/logo_name.webp' />
        </div>
        <div className='absolute bg-white/50 rounded-full overflow-hidden'>
          <div className='relative w-[160px] sm:w-[190px] aspect-video'>
            <Image alt='logo' fill priority src='/logo/logo_tag.webp' />
          </div>
        </div>
      </section>
      <div className='absolute bottom-[22%] sm:bottom-[19%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex w-full max-w-[280px] gap-4  mx-auto'>
        {/* <LoginModal /> */}
        <button className='bg-[#55c694]/10 hover:bg-[#55c694]/20 text-[#55c694] w-full px-4 py-2 rounded-xl'>
          Sign up
        </button>
        <button
          onClick={() => router.push("/dashboard")}
          className='bg-[#55c694] hover:bg-[#55c694]/80 text-white w-full px-4 py-2 rounded-xl'>
          Sign in
        </button>
      </div>
    </div>
  );
}
