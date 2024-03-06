import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Options from "../../../components/super-admin/Options";

const SettingsPage = async () => {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <div className='p-8 w-full'>
      <h1 className='text-center text-xl font-medium'>Admin Dashboard</h1>
      <p className='text-center text-gray-500'>...for Super Admins only</p>
      <Options session={session} />
    </div>
  );
};

export default SettingsPage;
