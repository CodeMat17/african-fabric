import UpdateTailorCard from "@/components/update-tailor/UpdateTailorCard";
import { supabaseClient } from "@/supabaseClient";

const Tailors = async () => {
  let { data: tailors, error } = await supabaseClient
    .from("tailors")
    .select("*");
  if (error) {
    throw new Error("Somethingwent wrong: ", error.message);
  }

  return (
    <div className='py-6 px-4'>
      <p className='text-center text-xl uppercase font-medium'>Tailors</p>
      <div className='py-10'>
        <UpdateTailorCard data={tailors} />
      </div>
    </div>
  );
};

export default Tailors;
