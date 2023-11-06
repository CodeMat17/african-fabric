import {
  MdOutlineCall,
  MdOutlineEmail,
  MdOutlineWhatsapp,
} from "react-icons/md";

import Image from "next/image";

const users = [
  { id: 1, name: "Mwangi James", img: "/users/const_4.jpeg" },
  { id: 2, name: "Ochieng Sharon", img: "/users/const_1.jpeg" },
  { id: 3, name: "Maina Esther", img: "/users/const_2.jpeg" },
  { id: 4, name: "Atieno Paul", img: "/users/const_5.jpeg" },
  { id: 5, name: "Kamau Samuel", img: "/users/const_3.jpeg" },
];

const ConsultantCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:max-w-3xl lg:mx-auto">
      {users.map((user) => (
        <div
          key={user.id}
          className='relative flex flex-col items-center justify-center mt-8'>
          <div className='relative w-full aspect-square object-cover rounded-xl overflow-hidden'>
            <Image alt='' fill priority src={user.img} />
          </div>

          <div className=' absolute bottom-0 py-2 w-full bg-gradient-to-t from-[#55c694]/20 via-black/5'>
            <h1 className='text-lg text-white tracking-widest font-semibold truncate text-center'>
              {user.name}
            </h1>
            <div className='flex items-center justify-center gap-6 text-white text-2xl pt-1'>
              <div className='bg-black/40 p-2 rounded-full'>
                <MdOutlineCall />
              </div>
              <div className='bg-black/40 p-2 rounded-full'>
                <MdOutlineEmail />
              </div>
              <div className='bg-black/20 p-2 rounded-full'>
                <MdOutlineWhatsapp />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ConsultantCard;
