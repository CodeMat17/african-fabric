import CompletedJobsCard from "@/components/CompletedJobsCard";
import { supabaseClient } from "@/supabaseClient";

export const revalidate = 0;

const CompletedJobs = async () => {
  const { data: ready } = await supabaseClient
    .from("customers")
    .select("id, name, avatar, email, style, fabric, ready, completed_on, delivered_on")
    .order("ready", { ascending: false })
    .eq("ready", true);

  return (
    <div className='px-4 py-6'>
      <h1 className='text-2xl font-medium text-center'>Completed Jobs</h1>
      {/* <pre>{JSON.stringify(ready, null, 2)}</pre> */}
      <div className='mt-8 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-2 lg:gap-4'>
        {ready && ready.length < 1 ? (
          <p className='text-center py-24'>No completed job at the moment.</p>
        ) : (
          ready.map((comp) => <CompletedJobsCard key={comp.id} {...comp} />)
        )}
      </div>{" "}
    </div>
  );
};

export default CompletedJobs;
