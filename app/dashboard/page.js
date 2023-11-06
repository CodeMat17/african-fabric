import ConsultantFolders from "@/components/ConsultantFolders";
import RecentOrders from "@/components/RecentOrders";
import Statistics from "@/components/Statistics";
import { supabaseClient } from "@/supabaseClient";

const topCard = [
  { id: 1, tag: "CCs", desc: "Current Customers", value: 982 },
  { id: 2, tag: "CJs", desc: "Completed Jobs", value: 800 },
  { id: 3, tag: "PJs", desc: "Pending Jobs", value: 82 },
];

const page = async () => {
  let {
    data: recent,
    error,
    count,
  } = await supabaseClient
    .from("customers")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(5);

  const data = [1000, 600, 20]; // You can replace these with your actual data

  return (
    <div className='p-4 bg-[#f8f9fa]'>
      <p className='text-lg font-medium'>OVERVIEW</p>
      <div className='lg:flex lg:justify-evenly'>
        <Statistics />
        <ConsultantFolders />
      </div>
      {/* <pre>{ JSON.stringify(recent, null, 2)}</pre> */}
      <RecentOrders recent={recent} />
    </div>
  );
};

export default page;
