import { CldImage } from "next-cloudinary";
import Image from "next/image";
import Link from "next/link";
import RecentOrderImageComponent from "./RecentOrderImageComponent";

const CustomerCard = ({ id, avatar, name, email, style, fabric }) => {
  return (
    <Link href={`/dashboard/orders/${id}`}>
      <div className='text-sm font-light border p-3 rounded-xl'>
        <div className='flex items-center justify-between'>
          <div className=' flex items-center'>
            <RecentOrderImageComponent
              image={avatar}
              width='48'
              height='48'
              radius='rounded-full'
            />
            <div className='max-w-[150px] sm:max-w-full md:max-w-[150px] lg:max-w-full  leading-4 ml-2'>
              <p className='text-[#55c694] font-medium truncate'>{name}</p>
              <p className='text-gray-500 truncate'>{email}</p>
            </div>
          </div>
          <div className='flex flex-col sm:flex-row gap-1 sm:gap-2 items-end sm:items-center justify-between'>
            <p className='whitespace-nowrap capitalize truncate  max-w-[95px]'>
              {style}
            </p>
            <RecentOrderImageComponent
              image={fabric}
              width='50'
              height='30'
              radius='rounded-lg sm:hidden'
            />
            <RecentOrderImageComponent
              image={fabric}
              width='65'
              height='40'
              radius='rounded-lg hidden sm:block'
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CustomerCard;
