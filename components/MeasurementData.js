import { TbCameraPlus } from "react-icons/tb";

const MeasurementData = () => {
  return (
    <div className='pt-2 pb-6 my-6 rounded-xl'>
      <p className='text-center text-lg'>Measurements</p>
      <div className='pt-4 text-sm grid grid-cols-2 sm:grid-cols-3 gap-x-2 gap-y-4'>
        <div className='flex flex-col'>
          <label className='text-gray-500'>Enter Neck</label>

          <input
            type='text'
            placeholder='Enter Neck'
            className='p-2 text-center border rounded-xl outline-none max-w-[150px]'
          />
        </div>
        <div className='flex flex-col'>
          <label className='text-gray-500'>Enter O-Bust</label>

          <input
            type='text'
            placeholder='Enter O-Bust'
            className='p-2 text-center border rounded-xl outline-none max-w-[150px]'
          />
        </div>
        <div className='flex flex-col'>
          <label className='text-gray-500'>Enter Bust</label>

          <input
            type='text'
            placeholder='Enter Bust'
            className='p-2 text-center border rounded-xl outline-none max-w-[150px]'
          />
        </div>
        <div className='flex flex-col'>
          <label className='text-gray-500'>Enter U-Bust</label>

          <input
            type='text'
            placeholder='Enter U-Bust'
            className='p-2 text-center border rounded-xl outline-none max-w-[150px]'
          />
        </div>
        <div className='flex flex-col'>
          <label className='text-gray-500'>Enter Waist</label>

          <input
            type='text'
            placeholder='Enter Waist'
            className='p-2 text-center border rounded-xl outline-none max-w-[150px]'
          />
        </div>
        <div className='flex flex-col'>
          <label className='text-gray-500'>Enter Hips</label>

          <input
            type='text'
            placeholder='Enter Hips'
            className='p-2 text-center border rounded-xl outline-none max-w-[150px]'
          />
        </div>
        <div className='flex flex-col'>
          <label className='text-gray-500'>Enter Nk-Heel</label>

          <input
            type='text'
            placeholder='Enter Nk-Heel'
            className='p-2 text-center border rounded-xl outline-none max-w-[150px]'
          />
        </div>
        <div className='flex flex-col'>
          <label className='text-gray-500'>Enter NK abv Knee</label>

          <input
            type='text'
            placeholder='Enter NK abv Knee'
            className='p-2 text-center border rounded-xl outline-none max-w-[150px]'
          />
        </div>
        <div className='flex flex-col'>
          <label className='text-gray-500'>Enter A-Length</label>

          <input
            type='text'
            placeholder='Enter A-Length'
            className='p-2 text-center border rounded-xl outline-none max-w-[150px]'
          />
        </div>
        <div className='flex flex-col'>
          <label className='text-gray-500'>Enter S-Seam</label>

          <input
            type='text'
            placeholder='Enter S-Seam'
            className='p-2 text-center border rounded-xl outline-none max-w-[150px]'
          />
        </div>
        <div className='flex flex-col'>
          <label className='text-gray-500'>Enter Arm Hole</label>

          <input
            type='text'
            placeholder='Enter Arm Hole'
            className='p-2 text-center border rounded-xl outline-none max-w-[150px]'
          />
        </div>
        <div className='flex flex-col'>
          <label className='text-gray-500'>Enter Bicep</label>

          <input
            type='text'
            placeholder='Enter Bicep'
            className='p-2 text-center border rounded-xl outline-none max-w-[150px]'
          />
        </div>
        <div className='flex flex-col'>
          <label className='text-gray-500'>Enter Fore Arm</label>
          <input
            type='text'
            placeholder='Enter Fore Arm'
            className='p-2 text-center border rounded-xl outline-none max-w-[150px]'
          />
        </div>
        <div className='flex flex-col'>
          <label className='text-gray-500'>Enter Wrist</label>

          <input
            type='text'
            placeholder='Enter Wrist'
            className='p-2 text-center border rounded-xl outline-none max-w-[150px]'
          />
        </div>
        <div className='flex flex-col'>
          <label className='text-gray-500'>Enter V Neck Cut</label>

          <input
            type='text'
            placeholder='Enter V Neck Cut'
            className='p-2 text-center border rounded-xl outline-none max-w-[150px]'
          />
        </div>
        <div className='flex flex-col'>
          <label className='text-gray-500'>Enter Abv Knee-Ankle</label>

          <input
            type='text'
            placeholder='Enter Abv Knee-Ankle'
            className='p-2 text-center border rounded-xl outline-none max-w-[150px]'
          />
        </div>
        <div className='flex flex-col'>
          <label className='text-gray-500'>Enter abv Kneel</label>

          <input
            type='text'
            placeholder='Enter Waist abv Kneel'
            className='p-2 text-center border rounded-xl outline-none max-w-[150px]'
          />
        </div>
      </div>
      <div className='pt-8 pb-3 flex flex-col items-center justify-center'>
        <div
        //   onClick={() => materialPickerRef.current.click()}
          className='flex items-center  px-5 text-[#55c694] bg-[#55c694]/5 shadow rounded-full p-1 cursor-pointer'>
          <TbCameraPlus className=' text-4xl text-[#55c694]' />
          <span className='pl-3 whitespace-nowrap'>
            Upload Preferred Material
          </span>
          <input
            type='file'
            accept='image/*'
            hidden
            // onChange={addFabricMaterial}
            // ref={materialPickerRef}
          />
        </div>

        <div className='py-4'>
          {/* {selectedMaterial ? ( */}
            <div className='relative w-52 aspect-video rounded-xl overflow-hidden'>
              {/* <Image
                alt='customer avatar'
                fill 
                priority src=''
                src={selectedMaterial}
              /> */}
            </div>
          {/* ) : ( */}
            <div className=''> No material is selected yet.</div>
          {/* )} */}
        </div>
      </div>
      <div className=' mt-6 px-4'>
        <button className='bg-[#55c694] w-full py-2.5 text-white rounded-xl group-invalid:pointer-events-none group-invalid:opacity-30'>
          UPLOAD
        </button>
      </div>
    </div>
  );
}

export default MeasurementData