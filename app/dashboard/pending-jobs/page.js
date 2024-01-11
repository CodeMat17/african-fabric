import PendingJobsCard from "@/components/PendingJobsCard";
import { supabaseClient } from "@/supabaseClient";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const revalidation = 0;

const PendingJobs = async () => {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const { data, error } = await supabaseClient
    .from("customers")
    .select(
      "id, name, avatar, fabric, email, tel, due_date, status, ready, fitting_date, fitting_confirmed_by"
    )
    .order("status", { ascending: true })
    .order("due_date", { ascending: true })
    .neq("ready", true);

  return (
    <div className='px-4 py-8 bg-gray-100 min-h-screen'>
      <p className='text-center text-xl font-medium'>PendingJobs</p>

      <div>
        {data && data.length < 1 ? (
          <p className='text-center py-24'>No pending job at the moment.</p>
        ) : (
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto gap-4 py-8'>
            {data &&
              data.map((pending) => (
                <PendingJobsCard
                  key={pending.id}
                  {...pending}
                  session={session}
                />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PendingJobs;
