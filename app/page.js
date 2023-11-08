"use client";

import { Button, Checkbox, Input, Modal, Row, Text } from "@nextui-org/react";
import { useState } from "react";
import { TbMailForward, TbShieldLock } from "react-icons/tb";

import LoginModal from "@/components/LoginModal";
import Image from "next/image";

export default function Home() {
 const [visible, setVisible] = useState(false);
 const handler = () => setVisible(true);
 const closeHandler = () => {
   setVisible(false);
   console.log("closed");
 };


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
      <div className='absolute bottom-[22%] sm:bottom-[19%] left-1/2 -translate-x-1/2 -translate-y-1/2'>
        {/* <button className=' bg-[#55c694] px-5 py-2.5 rounded-xl'>Login</button> */}
        <LoginModal />
        {/* <Button
          auto
          // color='warning'
          shadow
          onPress={handler}
          className='bg-[#55c694]'>
          Open modal
        </Button>
        <Modal
          closeButton
          blur
          aria-labelledby='modal-title'
          open={visible}
          onClose={closeHandler}>
          <Modal.Header>
            <Text id='modal-title' size={18}>
              Welcome to
              <Text b size={18}>
                NextUI
              </Text>
            </Text>
          </Modal.Header>
          <Modal.Body>
            <Input
              clearable
              bordered
              fullWidth
              color='primary'
              size='lg'
              placeholder='Email'
              // contentLeft={<TbMailForward fill='currentColor' />}
            />
            <Input
              clearable
              bordered
              fullWidth
              color='primary'
              size='lg'
              placeholder='Password'
              // contentLeft={<TbShieldLock fill='currentColor' />}
            />
            <Row justify='space-between'>
              <Checkbox>
                <Text size={14}>Remember me</Text>
              </Checkbox>
              <Text size={14}>Forgot password?</Text>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button auto flat color='error' onPress={closeHandler}>
              Close
            </Button>
            <Button auto onPress={closeHandler}>
              Sign in
            </Button>
          </Modal.Footer>
        </Modal> */}
      </div>
    </div>
    // <main className='flex min-h-screen flex-col items-center justify-between p-24'>
    //   <Link href='/dashboard' className='bg-gray-200 rounded-xl px-6 py-2.5'>
    //     Sign in
    //   </Link>
    // </main>
  );
}
