import UpdateProfile from "@/components/UpdateProfile";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const revalidate = 0;

const AccountPage = async () => {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });

  const { data, error } = await supabase
    .from("staffers")
    .select("id, name, tel, position")
    .single();

  if (data?.name && data?.position) {
    redirect("/dashboard");
  }

  if (data?.name != 'empty' && !data?.position) {
    return (
      <div className='px-4 pt-32'>
        <div className='text-center p-4 rounded-xl bg-[#55c694]/10 text-[#55c694] font-medium max-w-sm mx-auto'>
          Welcome,{" "}
          <span>
       {data?.name}. Wait for the SuperAdmin to profile you and grant you
            access.
          </span>
        </div>
      </div>
    );
  }

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <div className='px-4 py-12'>
      <h2 className='text-center text-xl font-medium'>Update your profile</h2>
      {/* <p>{JSON.stringify(session?.user?.email, null, 2)}</p> */}
   
      <UpdateProfile id={session?.user?.id} user_email={session?.user?.email} />
    </div>
  );
};

export default AccountPage;
