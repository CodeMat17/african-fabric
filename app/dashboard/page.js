import AgentsFolders from "@/components/AgentsFolders";
import RecentOrders from "@/components/RecentOrders";
import Statistics from "@/components/Statistics";
import { supabaseClient } from "@/supabaseClient";

export const revalidate = 0;

const Dashboard = async () => {
  const { count: total } = await supabaseClient
    .from("customers")
    .select("id", { count: "exact" });

  const { count: ready } = await supabaseClient
    .from("customers")
    .select("id", { count: "exact" })
    .eq("ready", true);

  const { data: recent } = await supabaseClient
    .from("customers")
    .select("id, name, avatar, email, style, fabric")
    .order("created_at", { ascending: false })
    .limit(5);

  const { count: noOfConsultants } = await supabaseClient
    .from("staffers")
    .select("id", { count: "exact" })
    .eq("position", "Consultant");

  const { count: noOfQc } = await supabaseClient
    .from("staffers")
    .select("id", { count: "exact" })
    .eq("position", "Quality Control");
  
  const { count: noOfBeaders } = await supabaseClient
    .from("staffers")
    .select("id", { count: "exact" })
    .eq("position", "Beader");

  return (
    <div className='p-4 bg-[#f8f9fa]'>
      <p className='text-lg font-medium'>OVERVIEW</p>

      <div className='lg:flex lg:justify-evenly'>
        <Statistics total={total} ready={ready} />
        {/* <pre>{JSON.stringify(noOfConsultants, null, 2)}</pre> */}
        {/* <pre>{JSON.stringify(noOfTailors, null, 2)}</pre> */}

        <AgentsFolders
          noOfConsultants={noOfConsultants}
          noOfQc={noOfQc}
          noOfBeaders={noOfBeaders}
        />
      </div>
      <RecentOrders recent={recent} />
    </div>
  );
};

export default Dashboard;
