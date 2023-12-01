import HeaderNavBar from "@/components/HeaderNavBar";
import Nav from "@/components/Nav";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import Loading from "./loading";

export const dynamic = "force-dynamic";

export default function DashboardLayout({ children }) {
  return (
    <div className='w-full md:px-2 flex bg-[#f8f9fa] min-h-screen text-black'>
      <Toaster />
      <Nav />
      <main className='md:ml-[278px] flex-grow md:rounded-3xl md:overflow-hidden transition-all transform duration-500'>
        <HeaderNavBar />
        <Suspense fallback={<Loading />}>
           <section>{children}</section>
        </Suspense>
       
      </main>
    </div>
  );
}
