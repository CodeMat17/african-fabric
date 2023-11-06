import Link from "next/link";
import Image from "next/image";

const CustomerCard = ({ id, avatar, name, email, style, fabric }) => {
  return (
    <Link href={`/dashboard/orders/${id}`}>
      <div className='text-sm font-light border p-3 rounded-xl'>
        <div className='flex items-center justify-between'>
          <div className=' flex items-center'>
            <div className='relative rounded-full overflow-hidden w-12 h-12'>
              <Image alt='fabric' fill priority src={avatar} />
            </div>
            <div className='max-w-[150px] sm:max-w-full md:max-w-[150px] lg:max-w-full  leading-4 ml-2'>
              <p className='text-[#55c694] truncate'>{name}</p>
              <p className='text-gray-500 truncate'>{email}</p>
            </div>
          </div>
          <div className='flex items-center justify-between'>
            <p>{style}</p>
            <div className='hidden sm:block relative ml-6 rounded-full overflow-hidden w-16 h-8'>
              <Image alt='fabric' fill priority src={fabric} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CustomerCard;
