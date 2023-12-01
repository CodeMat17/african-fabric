"use client";

import { useState } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { CldImage } from "next-cloudinary";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Image from "next/image";

const Gallery = ({ gallery }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className='w-full mx-auto'>
      <p className='font-medium text-lg text-center'>Gallery</p>
      <div className='pt-2'>
        <Swiper
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          className='h-72 w-full rounded-xl'>
          {gallery.map((image) => (
            <SwiperSlide key={image.id}>
              <div className='flex h-full w-full items-center justify-center'>
                {/* <Image
                  priority
                  src={image.gallery_url}
                  alt='gallery photo'
                  fill
                  className='block h-full w-full object-cover'
                /> */}
                <div className=''>
                  <CldImage
                    width='1200'
                    height='1200'
                    // crop='thumb'
                    // gravity='faces'
                    src={image.gallery_url}
                    sizes='100vw'
                    alt='gallery photo image'
                    loading='lazy'
                    className='rounded-xl overflow-hidden'
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Thumbnail */}
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={6}
          slidesPerView={10}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className='thumbs mt-3 h-9 w-full overflow-x-scroll'>
          {gallery.map((image) => (
            <SwiperSlide key={image.id}>
              <button className='flex h-full w-full items-center justify-center'>
                {/* <Image
                  priority
                  src={image.gallery_url}
                  alt='gallery thumbnail'
                  className='block h-full w-full object-cover '
                /> */}
                <div className=''>
                  <CldImage
                    width='500'
                    height='500'
                    // crop='thumb'
                    // gravity='faces'
                    src={image.gallery_url}
                    sizes='50vw'
                    alt='gallery photo image'
                    loading='lazy'
                    className='rounded-md border border-[#55c694] overflow-hidden'
                  />
                </div>
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Gallery;
