import {supabaseClient} from '@/supabaseClient'
import Nav from '../../components/Nav'
import HeaderNavBar from '../../components/HeaderNavBar'
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import Loading from "./loading";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function DashboardLayout({ children }) {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });

  const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return (
        <p className='text-center text-red-600 py-32'>You are not logged in.</p>
      );
    }

  let { data, error } = await supabase
    .from("staffers")
    .select("is_admin")
    .eq("id", user?.id)
    .single();
  
  console.log('Data: ', data);
  
   if (error || !data) {
     return (
       <p className='text-center text-red-600 py-32'>
         Unable to verify admin status. Please contact the Manager.
       </p>
     );
   }

  return (
    <>
      <Suspense fallback={<Loading />}>
        {data.is_admin ? (
          <div className='w-full md:px-2 flex bg-[#f8f9fa] min-h-screen text-black'>
            <Toaster />
            <Nav />
            <main className='md:ml-[278px] flex-grow md:rounded-3xl md:overflow-hidden transition-all transform duration-500'>
              <HeaderNavBar />
              <section>{children}</section>
         
            </main>
          </div>
        ) : (
          <p className='text-center text-red-600 py-32'>
            You are not an admin.
          </p>
        )}
      </Suspense>
    </>
  );
}
