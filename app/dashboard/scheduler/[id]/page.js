import FittingSchedule from "@/components/FittingScheduleModal";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PiPhoneCallLight } from "react-icons/pi";
import { supabaseClient } from "../../../../supabaseClient";

export const revalidate = 0;

const ScheduleNow = async ({ params: { id } }) => {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  let { data: fitting } = await supabaseClient
    .from("customers")
    .select("id, name, tel, style, fitting_date, fitting_confirmed_by")
    .match({ id })
    .single();

  if (!fitting) {
    notFound;
  }

  return (
    <div className='py-6 flex flex-col justify-center items-center'>
      <p className='uppercase text-center text-xl font-medium'>
        Schedule Fitting
      </p>
      <div className='pt-10 text-center'>
        <h2 className='text-xl font-semibold'>{fitting.name}</h2>
        <p>{fitting.style}</p>
        <div className='flex justify-center  mt-6'>
          <Link
            href={`tel:${fitting.tel}`}
            className='border p-4 rounded-full shadow-lg bg-green-500/20 animate-pulse '>
            <PiPhoneCallLight className='text-3xl text-green-600' />
          </Link>
        </div>
      </div>
      <div className='mt-8'>
        <FittingSchedule id={fitting.id} email={session?.user?.email} />
      </div>

      {/* <pre>{JSON.stringify(fitting, null, 2)}</pre> */}
    </div>
  );
};

export default ScheduleNow;
