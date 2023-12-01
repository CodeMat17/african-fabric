"use client";

import { supabaseClient } from "@/supabaseClient";
import { CldUploadWidget } from "next-cloudinary";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { CgSpinnerAlt } from "react-icons/cg";

const UploadGalleryPhotos = ({ id }) => {
  const router = useRouter();
  const [gallery_url, setGalleryUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const uploadGallery = async () => {
    try {
      setLoading(true);

      const { error } = await supabaseClient
        .from("gallery")
        .insert([{ gallery_url, user_id: id }])
        .select();

      if (error) {
        throw new Error(`Something went wrong: ${error.message}`);
      }

      if (!error) {
        toast.success(`Gallery photo uploaded successfully`, {
          duration: 5000,
          position: "top-center",
        });
        router.refresh();
        setGalleryUrl("");
      }
    } catch (error) {
      console.log("Error Msg: ", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {gallery_url && (
        <p className='text-sm text-center text-[#D76F30]'>(Photo attached)</p>
      )}
      <div className='flex items-center justify-center gap-4 mt-6'>
        <div className=''>
          <CldUploadWidget
            uploadPreset='af_gallery'
            folder='af_designs/gallery'
            onSuccess={(result) => {
              // handle successful upload
              // setAvatarUrl(result.info.public_id);
              setGalleryUrl(result.info.secure_url);
              // console.log(`result: `, result.info.secure_url);
            }}>
            {({ open }) => {
              function handleOnClick(e) {
                e.preventDefault();
                open();
              }
              return (
                <button
                  onClick={handleOnClick}
                  className='bg-[#55c694]/10  text-[#55c694] py-2 px-4 rounded-xl font-medium'>
                  Attach
                  {/* <TbCameraPlus className=' text-4xl text-[#55c694]' /> */}
                </button>
              );
            }}
          </CldUploadWidget>
        </div>
        {gallery_url && (
          <button
            onClick={uploadGallery}
            className='bg-[#D76F30]/10 text-[#D76F30] py-2 px-4 rounded-xl font-medium'>
            {loading ? (
              <CgSpinnerAlt className='text-xl animate-spin' />
            ) : (
              "Upload"
            )}
          </button>
        )}
      </div>
    </>
  );
};

export default UploadGalleryPhotos;
