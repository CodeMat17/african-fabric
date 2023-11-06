"use client";

import Image from "next/image";
import { useState } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { images } from "@/gallery/images";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const Gallery = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className='max-w-xs sm:max-w-sm mx-auto'>
      <p className='font-medium text-lg'>Gallery</p>

      <div className='pt-2 w-full max-w-xs sm:max-w-sm mx-auto'>
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
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className='flex h-full w-full items-center justify-center'>
                <Image
                  priority
                  src={image.src}
                  alt={image.alt}
                  className='block h-full w-full object-cover'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Thumbnail */}
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={3}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className='thumbs mt-3 h-16 w-full overflow-x-scroll'>
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <button className='flex h-full w-full items-center justify-center rounded-xl overflow-hidden'>
                <Image
                  priority
                  src={image.src}
                  alt={image.alt}
                  className='block h-full w-full object-cover '
                />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Gallery;
