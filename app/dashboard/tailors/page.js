import UpdateTailorCard from "@/components/profile-staff/EditStaff";
import TailorCard from "@/components/update-consultants/TailorCard";
import { supabaseClient } from "@/supabaseClient";

export const revalidate = 0;

const Tailors = async () => {
  let { data: tailors, error } = await supabaseClient
    .from("staffers")
    .select("*")
    .order("name", { ascending: true })
    .eq("position", "Tailor");

  if (error) {
    throw new Error(`Somethingwent wrong: ${error.message}`);
  }

  return (
    <div className='py-6 px-4'>
      <p className='text-center text-xl uppercase font-medium'>Tailors</p>
      {/* <AddTailor /> */}
      <div className='py-10'>
        <TailorCard data={tailors} />
      </div>
    </div>
  );
};

export default Tailors;
