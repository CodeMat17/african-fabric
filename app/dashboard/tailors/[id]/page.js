import { supabaseClient } from "@/supabaseClient";
import { notFound } from "next/navigation";
import UpdateTailorComponent from "../../../../components/profile-staff/ProfileStaff";

export const revalidate = 0;

const UpdateTailor = async ({ params: { id } }) => {
  let {
    data: tailor,
    error,
    count,
  } = await supabaseClient
    .from("tailors")
    .select("id, name, tel")
    .match({ id })
    .single();

  if (!tailor) {
    notFound;
  }

  return (
    <div className='px-4 pt-4 pb-12'>
      <p className='uppercase text-center text-xl font-medium'>
        Update Tailor Details
      </p>
      <div className='mt-16'>
        <UpdateTailorComponent
          id={tailor.id}
          t_name={tailor.name}
          t_tel={tailor.tel}
        />
      </div>
    </div>
  );
};

export default UpdateTailor;
