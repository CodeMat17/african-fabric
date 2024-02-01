"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { FaUserTie } from "react-icons/fa";
import { FaUsersGear } from "react-icons/fa6";
import { PiCrown } from "react-icons/pi";

const Options = ({ session }) => {
  const supabase = createClientComponentClient();
  const user = session?.user;
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [is_super_admin, setIsSuperAdmin] = useState(null);
  const [showOptions, setShowOptions] = useState(false);

  const getProfile = useCallback(async () => {
    try {
      setLoading(true);

      const { data, error, status } = await supabase
        .from("staffers")
        .select(`is_super_admin`)
        .eq("id", user?.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setIsSuperAdmin(data.is_super_admin);
      }
    } catch (error) {
      alert("Error loading user status!");
    } finally {
      setLoading(false);
    }
  }, [user, supabase]);

  useEffect(() => {
    setLoading(true);
    getProfile();
    setLoading(false);
  }, [user, getProfile]);

  if (loading) {
    return <p className='text-center py-20'>Please wait...</p>;
  }

  return (
    <div>
      {is_super_admin ? (
        <>
          {!showOptions ? (
            <div className='flex justify-center pt-12'>
              <button
                onClick={() => setShowOptions(true)}
                className='flex flex-col justify-center items-center px-12 py-3 border rounded-2xl shadow-md'>
                <PiCrown className='text-5xl text-[#55c694]' />
                <p>Super Admin</p>
              </button>
            </div>
          ) : (
            <div className='py-20 w-full max-w-xs lg:max-w-lg mx-auto grid grid-cols-2 sm:grid-cols-2 gap-4 lg:gap-12'>
              <button
                onClick={() => router.push("/dashboard/update-customer-info")}
                className='border rounded-xl shadow-md p-6 flex flex-col items-center justify-center'>
                <FaUsersGear className='text-3xl text-[#55c694]' />
                <p className='mt-3 text-sm w-[110px] text-center'>Order List</p>
              </button>

              <button
                onClick={() => router.push("/dashboard/staff-list")}
                className='border rounded-xl shadow-md p-6 flex flex-col items-center justify-center'>
                <FaUserTie className='text-3xl text-[#55c694]' />
                <p className='mt-3 text-sm w-[110px] text-center'>Staff List</p>
              </button>
            </div>
          )}
        </>
      ) : (
        <p className='text-center pt-24 text-red-600'>
          You are not a super admin
        </p>
      )}
    </div>
  );
};

export default Options;
