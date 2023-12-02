import AgentsFolders from "@/components/AgentsFolders";
import RecentOrders from "@/components/RecentOrders";
import Statistics from "@/components/Statistics";
import { supabaseClient } from "@/supabaseClient";

export const revalidate = 0;

const page = async () => {
  let query = supabaseClient;
  // .from("customers")
  // .select("name", { count: "exact" });

  let customerQuery = query.from("customers").select("id", { count: "exact" });

  let consultantQuery = query
    .from("consultants")
    .select("id", { count: "exact" });

  let tailorQuery = query.from("tailors").select("id", { count: "exact" });

  let recentQuery = query
    .from("customers")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(5);

  const { count: total } = await customerQuery;
  const { count: ready } = await customerQuery.eq("ready", true);
  const { count: noOfConsultants } = await consultantQuery;
  const { count: noOfTailors } = await tailorQuery;
  const { data: recent } = await recentQuery;

  return (
    <div className='p-4 bg-[#f8f9fa]'>
      <p className='text-lg font-medium'>OVERVIEW</p>

      <div className='lg:flex lg:justify-evenly'>
        <Statistics total={total} ready={ready} />
        <AgentsFolders
          noOfConsultants={noOfConsultants}
          noOfTailors={noOfTailors}
        />
      </div>
      {/* <pre>{JSON.stringify(noOfConsultants, null, 2)}</pre> */}
      <RecentOrders recent={recent} />
    </div>
  );
};

export default page;
