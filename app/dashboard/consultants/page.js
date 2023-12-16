import AddConsultant from "@/components/update-consultants/AddConsultant";
import UpdateConsultantCard from "@/components/update-consultants/ConsultantCard";
import { supabaseClient } from "@/supabaseClient";

export const revalidate = 0;

const Consultants = async () => {
  let { data: consultants, error } = await supabaseClient
    .from("staffers")
    .select("id, name, tel")
    .order("name", { ascending: true })
    .eq("position", "Consultant");

  if (error) {
    throw new Error("Somethingwent wrong: ", error.message);
  }

  return (
    <div className='py-6 px-4'>
      <p className='text-center text-xl uppercase font-medium'>Consultants</p>
      {/* <AddConsultant /> */}
      <div className='py-10'>
        <UpdateConsultantCard data={consultants} />
      </div>
    </div>
  );
};

export default Consultants;
