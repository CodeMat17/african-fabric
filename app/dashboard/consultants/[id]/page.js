import UpdateConsultantComponent from "@/components/update-consultants/UpdateConsultantComponent";
import { supabaseClient } from "@/supabaseClient";
import { notFound } from "next/navigation";

export const revalidate = 0;

const ConsultantDetail = async ({ params: { id } }) => {
  let {
    data: consultant,
    error,
    count,
  } = await supabaseClient
    .from("consultants")
    .select("id, name, tel")
    .match({ id })
    .single();

  if (!consultant) {
    notFound;
  }

  return (
    <div className='px-4 pt-8 pb-12'>
      <p className='text-center text-xl font-medium'>
        Update Consultant Details
      </p>

      {/* <pre>{JSON.stringify(consultant, null, 2)}</pre> */}
      <div className='mt-6 text-sm'>
        <UpdateConsultantComponent
          id={consultant.id}
          c_name={consultant.name}
          c_tel={consultant.tel}
        />
      </div>
    </div>
  );
};

export default ConsultantDetail;
