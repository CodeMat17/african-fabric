import Gallery from "@/components/Gallery";
import JobProgressBar from "@/components/JobProgressBar";
import Measurement from "@/components/Measurement";
import { supabaseClient } from "@/supabaseClient";
import dayjs from "dayjs";
import Image from "next/image";
import { notFound } from "next/navigation";

export const revalidate = 0;

const OrderDetailsPage = async ({ params: { id } }) => {
  let {
    data: customer,
    error,
    count,
  } = await supabaseClient.from("customers").select("*").match({ id }).single();

  if (!customer) {
    notFound;
  }

  return (
    <div className='px-4 pt-4 pb-8 w-full bg-gray-50'>
      <p className='uppercase text-center text-xl font-medium'>Order Details</p>
      {/* <pre>{JSON.stringify(customer, null, 2)}</pre> */}

      <div className='py-8 flex flex-col lg:flex-row lg:items-center lg:justify-around gap-4 md:max-w-3xl mx-auto'>
        <div className=' w-full '>
          <div className='relative border-2 border-[#55c694] w-24 h-24 rounded-full overflow-hidden'>
            <Image alt='customer avatar' fill priority src={customer.avatar} />
          </div>
          <h1 className=' text-xl font-medium truncate'>{customer.name}</h1>
          <p className='text-gray-500'>{customer.email}</p>
          <p className='text-gray-500'>{customer.tel}</p>
          <div className='flex divide-x-2 divide-gray-300 gap-4 text-sm text-gray-400 mt-2'>
            <p>{customer.style}</p>
            <p className='pl-4'>
              Booked on {dayjs(customer.created_at).format("MMM DD, YYYY")}{" "}
            </p>
          </div>
        </div>
        <JobProgressBar
          value='10'
          sewing={customer.sewing}
          qc_checked={customer.qc_checked}
          ready={customer.ready}
        />
      </div>

      <div className='md:py-6 flex flex-col lg:flex-row items-center lg:items-start lg:justify-around gap-6 mx-auto'>
        <Measurement
          neck={customer.neck}
          o_bust={customer.o_bust}
          bust={customer.bust}
          u_bust={customer.u_bust}
          waist={customer.waist}
          hips={customer.hips}
          nk_heel={customer.nk_heel}
          nk_abov_knee={customer.nk_abov_knee}
          a_length={customer.a_length}
          s_seam={customer.s_seam}
          arm_hole={customer.arm_hole}
          bicep={customer.bicep}
          fore_arm={customer.fore_arm}
          wrist={customer.wrist}
          v_neck_cut={customer.v_neck_cut}
          abv_knee_ankle={customer.abv_knee_ankle}
          w_abv_knee={customer.w_abv_knee}
        />
        <div className='flex flex-col lg:items-center'>
          <p className='font-medium text-lg sm:text-center lg:text-star'>
            Preferred Material
          </p>
          <div className='mt-2 relative aspect-video lg:aspect-auto lg:h-20 w-48 rounded-xl overflow-hidden'>
            <Image alt='fabric' fill priority src={customer.fabric} />
          </div>
        </div>
      </div>

      <div className=' pt-8 lg:flex lg:justify-between space-y-6 lg:space-y-0 lg:space-x-6 gap-6'>
        <div className='w-full flex flex-col max-w-xs sm:max-w-sm mx-auto'>
          <p className='font-medium text-lg'>Book Measurement</p>
          {/* <div className='mt-2 relative aspect-square w-full rounded-xl overflow-hidden'>
            <Image alt='fabric' fill priority src='/images/pix2.jpeg' />
          </div> */}
          <div className='mt-2 bg-white rounded-xl max-w-xs h-72 sm:max-w-sm border'></div>
        </div>
        <Gallery />
      </div>
    </div>
  );
};

export default OrderDetailsPage;
