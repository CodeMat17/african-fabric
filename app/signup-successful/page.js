import Image from "next/image";

const SignupSuccessful = ({ searchParams }) => {
  const email = searchParams?.email || ''

  return (
    <div className='px-8 py-20'>
      <h1 className='text-center text-[#55c694] font-medium text-xl'>
        Successful!
      </h1>

      <div className='flex flex-col items-center justify-center w-full max-w-sm mx-auto mt-8'>
        <div className='relative w-[270px] h-[270px]'>
          <Image alt='Successful' fill priority src='/signup-success.svg' />
        </div>
        <p className='text-center'>
          Congratulations! Check your email, ({email}), for your login link.
        </p>
      </div>
    </div>
  );
};

export default SignupSuccessful;
