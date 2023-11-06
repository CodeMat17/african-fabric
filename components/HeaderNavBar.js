

import Image from "next/image";
import MobileMenu from "./MobileMenu";
import NewOrderButton from "./NewOrderButton";

const HeaderNavBar = () => {
  return (
    <div className='sticky top-0 z-50 backdrop-blur-sm backdrop-brightness-150 bg-gray-50/95 w-full py-1 pl-2 pr-4 flex items-center justify-between'>
      <div className=' relative aspect-video w-[120px]  md:hidden'>
        <Image alt='logo' fill priority src='/logo3.webp' />
      </div>
      <div className='flex items-center gap-8'>
        <NewOrderButton />
        <MobileMenu />
      </div>
    </div>
  );
};

export default HeaderNavBar;
