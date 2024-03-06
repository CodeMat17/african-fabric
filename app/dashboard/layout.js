// import HeaderNavBar from "@/components/HeaderNavBar";
// import Nav from "@/components/Nav";
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

  const {
    data: { session },
  } = await supabase.auth.getSession();

  let { data, error } = await supabase
    .from("staffers")
    .select("is_admin")
    .eq("id", session?.user?.id)
    .single();

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
