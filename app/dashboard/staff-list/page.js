import Tabs from "@/components/staff-list/Tabs";
import { supabaseClient } from "@/supabaseClient";

export const revalidate = 0;

const StaffList = async () => {
  const query = supabaseClient
    .from("staffers")
    .select("*")
    .order("name", { ascending: true });

  const { data: all } = await query.is("is_admin", false);
  const { data: tailors } = await supabaseClient
    .from("staffers")
    .select("*")
    .order("name", { ascending: true })
    .eq("position", "Tailor");
  const { data: consultants } = await supabaseClient
    .from("staffers")
    .select("*")
    .order("name", { ascending: true })
    .eq("position", "Consultant");

  const { data: beaders } = await supabaseClient
    .from("staffers")
    .select("*")
    .order("name", { ascending: true })
    .eq("position", "Beader");

  const { data: others } = await supabaseClient
    .from("staffers")
    .select("*")
    .order("name", { ascending: true })
    // .eq("position", "Others")
    .neq("position", "Tailor")
    .neq("position", "Consultant")
    .neq("position", "Beader");

  return (
    <div className='px-2 py-8'>
      <p className='text-xl font-medium text-center'>Staff List</p>

      <div>
        <Tabs
          all={all}
          tailors={tailors}
          consultants={consultants}
          beaders={beaders}
          others={others}
        />
      </div>
      {/* <pre className=''>{JSON.stringify(all, null, 2)}</pre> */}
    </div>
  );
};

export default StaffList;
