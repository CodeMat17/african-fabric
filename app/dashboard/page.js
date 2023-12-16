import AgentsFolders from "@/components/AgentsFolders";
import RecentOrders from "@/components/RecentOrders";
import Statistics from "@/components/Statistics";
import { supabaseClient } from "@/supabaseClient";

export const revalidate = 0;

const page = async () => {
  const queryOrderCount = supabaseClient
    .from("customers")
    .select("id", { count: "exact" });

  const { count: total } = await queryOrderCount;

  const { count: ready } = await queryOrderCount.eq("ready", true);

  const { data: recent } = await supabaseClient
    .from("customers")
    .select("id, name, avatar, email, style, fabric")
    .order("created_at", { ascending: false })
    .limit(5);

  const queryAgentsCount = supabaseClient
    .from("staffers")
    .select("id", { count: "exact" });

  const { count: noOfTailors } = await queryAgentsCount.eq(
    "position",
    "Tailor"
  );

  const { count: noOfConsultants } = await queryAgentsCount.eq(
    "position",
    "Consultant"
  );

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
      {/* <pre>{JSON.stringify(recent, null, 2)}</pre> */}
      <RecentOrders recent={recent} />
    </div>
  );
};

export default page;
