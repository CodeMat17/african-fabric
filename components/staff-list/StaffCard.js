import dayjs from "dayjs";
import Link from "next/link";

const StaffCard = ({ id, name, tel, assigned_on, to_finish_on, busy, position }) => {
  return (
    <Link href={`/dashboard/staff-list/${id}`}>
      <div className='border transition transform duration-700 hover:scale-110 shadow-md bg-gray-100 odd:bg-gray-200 rounded-xl overflow-hidden'>
        <div className='w-full flex flex-col items-center justify-center p-6  '>
          <h1 className='font-medium mt-2 text-center'>{name}</h1>
          <p className='text-sm text-center'>{tel}</p>
         {position && <p className='text-sm text-center'>{position}</p>} 
          <div className='mt-2 flex flex-col items-center justify-between'>
            {busy && (
              <p className={` text-center ${busy ? "text-red-500" : ""}`}>
                {busy && "Busy"}
              </p>
            )}
            {busy && (
              <div className=' text-xs text-gray-500 flex flex-col justify-center'>
                <p>Assigned on {dayjs(assigned_on).format("MMM DD, YYYY")}</p>
                <p>To finish on {dayjs(to_finish_on).format("MMM DD, YYYY")}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default StaffCard;
