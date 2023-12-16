"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CgSpinnerAlt } from "react-icons/cg";

export const revalidate = 0;

const UpdateProfile = ({ id, user_email }) => {
  const supabase = createClientComponentClient();
  const router = useRouter();

  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [loading, setLoading] = useState(false);

  //   const getProfile = useCallback(async () => {
  //     try {
  //       setLoading(true);
  //       const { data, error, status } = await supabase
  //         .from("staffers")
  //         .select(`id, name`)
  //         .eq("id", id)
  //         .single();

  //       if (error && status !== 406) {
  //         throw error;
  //       }

  //       if (data) {
  //         setName(data.name);
  //       }
  //     } catch (error) {
  //       alert("Error loading user data! ", error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }, [id, supabase]);

  //   useEffect(() => {
  //     getProfile();
  //   }, [id, getProfile]);

  const updateProfile = async () => {
    try {
      setLoading(true);

      const { error } = await supabase.from("staffers").upsert({
        id: id,
        email: user_email,
        name,
        tel,
      });
      if (error) throw error;
      router.refresh();
      setLoading(false);
      alert("Profile updated!");
    } catch (error) {
      alert("Error updating the profile.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='pt-12 sm:pt-16 max-w-sm mx-auto'>
      <div className='flex flex-col gap-3 text-sm'>
        <div>
          <label>Email</label>
          <p className='border rounded-xl px-3 py-2.5 text-gray-400 bg-gray-100'>
            {user_email}
          </p>
        </div>

        <div>
          <label>Name</label>
          <input
            type='text'
            placeholder='Enter your fullname'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='w-full border rounded-xl px-3 py-2.5 bg-gray-100 focus:outline-none focus:border-[#55c694] focus:ring-[#55c694] focus:ring-1'
          />
        </div>

        <div>
          <label>Tel</label>
          <input
            type='tel'
            placeholder='Enter your phone number'
            value={tel}
            onChange={(e) => setTel(e.target.value)}
            className='w-full border rounded-xl px-3 py-2.5 bg-gray-100 focus:outline-none focus:border-[#55c694] focus:ring-[#55c694] focus:ring-1'
          />
        </div>

        <div>
          <button
            onClick={updateProfile}
            disabled={!name || !tel}
            className={`flex items-center justify-center gap-4 w-full py-2.5 bg-[#55c694] text-white rounded-xl mt-3 disabled:cursor-not-allowed disabled:bg-[#55c694]/30 ${
              loading ? "cursor-not-allowed" : ""
            }`}>
            {loading ? (
              <>
                <CgSpinnerAlt className='text-2xl animate-spin' /> Updating...
              </>
            ) : (
              "Update"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
