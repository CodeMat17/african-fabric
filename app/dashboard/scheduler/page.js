import FittingsCard from "@/components/FittingsCard";
import { supabaseClient } from "../../../supabaseClient";

export const revalidate = 0;

const Scheduler = async () => {
  let { data: fittings, error } = await supabaseClient
    .from("customers")
    .select("id, name, tel, avatar, style, created_at, due_date")
    .eq("status", "fitting")
    .order("status", { ascending: true });

  if (error) {
    throw new Error("Somethingwent wrong: ", error.message);
  }

  return (
    <div className='py-6 px-4'>
      <p className='text-center text-xl uppercase font-medium'>
        Fitting Schedulling
      </p>
      {/* <pre>{JSON.stringify(fittings, null, 2)}</pre> */}
      <div className='py-10'>
        {fittings && fittings.length < 1 ? (
          <p className='text-center py-16'>
            No job is ready for fitting schedulling.
          </p>
        ) : (
          <FittingsCard fittings={fittings} />
        )}
      </div>
    </div>
  );
};

export default Scheduler;
