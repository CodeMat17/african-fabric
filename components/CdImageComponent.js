"use client";

import { CldImage } from "next-cloudinary";
import Link from "next/link";

const RecentOrderImageComponent = ({image, width, height, radius }) => {
  return (
        <div>
          <CldImage
            width={width}
            height={height}
            crop='thumb'
            gravity='faces'
            src={image}
            alt='user avatar or fabric image'
            loading='lazy'
            className={radius}
          />
        </div>
  );
};

export default RecentOrderImageComponent;
