import Link from "next/link";
import CdImageComponent from "./CdImageComponent";

const CustomerCard = ({ id, avatar, name, email, style, fabric }) => {
  return (
    <div className='text-sm font-light border p-3 rounded-xl'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center w-[90%] sm:w-[70%]'>
          <Link href={`/dashboard/orders/${id}`}>
            <CdImageComponent
              id={id}
              image={avatar}
              width='48'
              height='48'
              radius='rounded-full'
            />
          </Link>
          <div className='max-w-[150px] sm:max-w-full md:max-w-[150px] lg:max-w-full leading-4 ml-2'>
            <p className='text-[#55c694] font-medium truncate'>{name}</p>
            <p className='text-gray-500 truncate'>{email}</p>
            <p className='sm:hidden pt-1 truncate uppercase'>&bull; {style}</p>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <p className='hidden sm:flex capitalize text-right'>{style}</p>
          <div className='flex justify-end'>
            <CdImageComponent
              image={fabric}
              width='50'
              height='30'
              radius='rounded-lg sm:hidden'
            />
            <CdImageComponent
              image={fabric}
              width='65'
              height='40'
              radius='rounded-lg hidden sm:block'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;
