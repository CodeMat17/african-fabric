'use client'

import { CldImage } from "next-cloudinary";

const SketchScreenshotComponent = ({
  width,
  height,
  image,
  sizes,
  classnames,
}) => {
  return (
    <div className='flex items-center justify-center'>
      <CldImage
        width={width}
        height={height}
        // crop='thumb'
        // gravity='faces'
        src={image}
        // sizes='50vw'
        sizes={sizes}
        alt='design sketch'
        loading='lazy'
        className={classnames}
      />
    </div>
  );
};

export default SketchScreenshotComponent;
