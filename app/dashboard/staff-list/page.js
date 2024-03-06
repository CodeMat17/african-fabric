import Tabs from "@/components/staff-list/Tabs";
import AddTailor from "@/components/update-consultants/AddTailor";
import { supabaseClient } from "@/supabaseClient";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const revalidate = 0;

const StaffList = async () => {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const id = session?.user?.id;

  const { data } = await supabaseClient
    .from("staffers")
    .select("id, is_super_admin")
    .eq("id", id)
    .single();

  if (data?.is_super_admin != true) {
    redirect("/");
  }

  const query = supabaseClient
    .from("staffers")
    .select("*")
    .order("name", { ascending: true });

  const { data: tailors } = await supabaseClient
    .from("tailors")
    .select("*")
    .order("name", { ascending: true });

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
    .neq("position", "Tailor")
    .neq("position", "Consultant")
    .neq("position", "Beader");

  return (
    <div className='px-2 py-8'>
      <p className='text-xl font-medium text-center'>Staff</p>
      <div className='flex justify-center py-2'>
        <AddTailor />
      </div>

      <div>
        <Tabs
          tailors={tailors}
          consultants={consultants}
          beaders={beaders}
          others={others}
        />
      </div>
    </div>
  );
};

export default StaffList;
