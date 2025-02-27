import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import dayjs from "dayjs";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import AssignToTailorButton from "../../../../components/AssignToTailorButton";
import CdImageComponent from "../../../../components/CdImageComponent";
import Gallery from "../../../../components/Gallery";
import JobProgressBar from "../../../../components/JobProgressBar";
import MeasurementMen from "../../../../components/MeasurementMen";
import MeasurementWomen from "../../../../components/MeasurementWomen";
import SketchScreenshotComponent from "../../../../components/SketchScreenshotComponent";
import UploadGalleryPhotos from "../../../../components/UploadGalleryPhotos";
import { supabaseClient } from "../../../../supabaseClient";

export const revalidate = 0;

const OrderDetailsPage = async ({ params: { id } }) => {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  let query = supabaseClient;

  let { data: customer } = await query
    .from("customers")
    .select("*")
    .match({ id })
    .single();

  let { data: beaders } = await query
    .from("staffers")
    .select("id, name, status")
    .eq("position", "Beader");

  let { data: gallery } = await query
    .from("gallery")
    .select("id, gallery_url")
    .eq("user_id", id);

  if (!customer) {
    notFound;
  }

  return (
    <div className='px-4 pt-4 pb-24 w-full bg-gray-50'>
      <p className='uppercase text-center text-xl font-medium'>Order Details</p>
      {/* <pre>{JSON.stringify(date, null, 2)}</pre> */}

      <div className=' w-full py-8 flex flex-col lg:flex-row gap-8 lg:gap-2'>
        <div className='flex flex-col items-center justify-center lg:items-start w-full lg:w-[55%]'>
          {customer.avatar && (
            <CdImageComponent
              width='96'
              height='96'
              image={customer.avatar}
              radius='rounded-full'
            />
          )}
          <h1 className=' text-xl font-medium truncate'>{customer.name}</h1>
          <p className='text-gray-500'>{customer.email}</p>
          <p className='text-gray-500'>{customer.tel}</p>
          <div className='flex divide-x-2 divide-gray-300 gap-2 text-sm text-gray-400 mt-2'>
            <p className='capitalize'> {customer.style}</p>
            <p className='pl-2 whitespace-nowrap'>
              booked on {dayjs(customer.created_at).format("MMM DD, YYYY")}{" "}
            </p>
          </div>
        </div>

        {/* <pre>{JSON.stringify(customer, null, 2)}</pre> */}

        <div className=' flex items-center justify-center w-full lg:w-[45%]'>
          {customer.tailor ? (
            <JobProgressBar
              id={customer.id}
              tailor={customer.tailor}
              tailoring={customer.tailoring}
              assigned_on={customer.tailoring_assigned_on}
              finished_on={customer.tailoring_finish_on}
              beading={customer.beading}
              beader={customer.beader}
              q_c={customer.q_c}
              ready={customer.ready}
              status={customer.status}
              fitting_date={customer.fitting_date}
              fitting_confirmed_by={customer.fitting_confirmed_by}
              fitting_done={customer.fitting_done}
              beaders={beaders}
              session={session}
            />
          ) : (
            <div className='flex flex-col items-center justify-center'>
              <AssignToTailorButton
                id={customer.id}
                name={customer.name}
                fabric={customer.fabric}
                style={customer.style}
              />
            </div>
          )}
        </div>
      </div>
      <div className='w-full flex justify-center'>
        {customer.sex === "Women" && (
          <MeasurementWomen
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
        )}
        {customer.sex === "Men" && (
          <MeasurementMen
            neck={customer.neck}
            waist={customer.waist}
            hips={customer.hips}
            bicep={customer.bicep}
            wrist={customer.wrist}
            forehead={customer.forehead}
            chest_at_ampits={customer.chest_at_ampits}
            chest_or_bust={customer.chest_or_bust}
            thigh_at_crotch={customer.thigh_at_crotch}
            mid_thigh={customer.mid_thigh}
            knee={customer.knee}
            below_knee={customer.below_knee}
            calf={customer.calf}
            ankle={customer.ankle}
            elbow={customer.elbow}
            forearm={customer.forearm}
            torso_circum={customer.torso_circum}
            pants_length={customer.pants_length}
            shoulders={customer.shoulders}
            top_length={customer.top_length}
          />
        )}
      </div>

      <div className='flex flex-col items-center justify-center pt-12'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          <div className='flex flex-col lg:items-center '>
            <p className='font-medium text-lg text-center'>Preferred Fabric</p>
            <div className='mt-2 rounded-xl w-auto'>
              {customer.fabric && (
                <CdImageComponent
                  width='280'
                  height='150'
                  image={customer.fabric}
                  radius='rounded-xl'
                />
              )}
            </div>
          </div>
          <div className='w-full flex flex-col max-w-xs sm:max-w-sm mx-auto'>
            <p className='mb-2 font-medium text-lg text-center'>
              Measurement on Paper
            </p>
            {customer.m_on_paper ? (
              <SketchScreenshotComponent
                width='250'
                height='700'
                image={customer.m_on_paper}
                sizes='50vw'
                classnames='rounded-xl'
              />
            ) : (
              <div className='w-[250px] aspect-video mx-auto border rounded-xl bg-slate-200 flex items-center justify-center'>
                No paper measurement
              </div>
            )}
          </div>
          <div className='w-full flex flex-col max-w-xs sm:max-w-sm mx-auto'>
            <p className='mb-2 font-medium text-lg text-center'>
              Design Sketch
            </p>
            {customer.sketch ? (
              <SketchScreenshotComponent
                width='250'
                height='700'
                image={customer.sketch}
                sizes='50vw'
                classnames='rounded-xl'
              />
            ) : (
              <div className='w-[250px] aspect-video mx-auto border rounded-xl bg-slate-200 flex items-center justify-center'>
                No sketch
              </div>
            )}
          </div>
        </div>
      </div>

      <div className='pt-12 flex flex-col justify-center items-center gap-8'>
        {gallery && gallery.length < 1 ? (
          <div className='border rounded-xl py-16 px-8'>
            No gallery photo(s) at the moment
          </div>
        ) : (
          <div className=' w-full max-w-xs sm:max-w-sm mx-auto'>
            <Gallery gallery={gallery} />
          </div>
        )}
        <div>
          <p className='text-center'>Upload gallery photos</p>
          <UploadGalleryPhotos id={customer.id} />
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsPage;
