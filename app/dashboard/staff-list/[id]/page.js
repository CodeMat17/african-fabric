import DeleteStaff from "@/components/profile-staff/DeleteStaff";
import EditStaff from "@/components/profile-staff/EditStaff";
import Level2Admin from "@/components/profile-staff/Level2Admin";
import MakeAdmin from "@/components/profile-staff/MakeAdmin";
import ProfileStaff from "@/components/profile-staff/ProfileStaff";
import { supabaseClient } from "@/supabaseClient";
import { notFound } from "next/navigation";

export const revalidate = 0;

const StaffDetail = async ({ params: { id } }) => {
  let {
    data: staff,
    error,
    count,
  } = await supabaseClient
    .from("staffers")
    .select("id, name, tel, email, position, is_admin, qc_admin")
    .match({ id })
    .single();

  if (!staff) {
    notFound;
  }

  return (
    <div className='px-4 pt-8 pb-12'>
      <p className='text-center text-xl font-medium'>Profile Staff</p>
      <div className='mt-6 text-sm text-gray-500 flex flex-col gap-3 max-w-md mx-auto'>
        <div>
          <label>Email</label>
          <p className='border px-3 py-2.5 rounded-xl bg-gray-100'>
            {staff.email}
          </p>
        </div>
        <div>
          <label>Title</label>
          <p className='border px-3 py-2.5 rounded-xl bg-gray-100'>
            {staff.name}
          </p>
        </div>
        <div className='flex items-center gap-3'>
          <label className=''>Access:</label>
          <p className='border px-3 py-2.5 rounded-xl bg-gray-100'>
            {staff.is_admin ? (
              <span className='text-green-600 '>Granted</span>
            ) : (
              <span className='text-red-600'>Not granted</span>
            )}
          </p>
        </div>
        {/* <div className='flex gap-4'>
          <div className='w-full flex flex-col'>
            <label className='text-center'>Is admin</label>
            <p className='border px-3 py-2.5 rounded-xl bg-gray-100  text-center'>
              {staff.is_admin ? (
                <span className='text-green-600 '>Yes</span>
              ) : (
                <span className='text-red-600'>No</span>
              )}
            </p>
          </div>
        </div> */}
        <div className='mt-6'>
          {/* <EditStaff
            id={staff.id}
            staff_name={staff.name}
            staff_tel={staff.tel}
          /> */}

          {/* <ProfileStaff
            id={staff.id}
            staff_name={staff.name}
            staff_position={staff.position}
          /> */}

          <MakeAdmin id={staff.id} admin={staff.is_admin} />
          {/* {staff?.is_admin ? (
            <Level2Admin id={staff.id} level2_admin={staff.qc_admin} />
          ) : (
            <DeleteStaff id={staff.id} name={staff.name} />
          )} */}
        </div>
        {/* {staff?.is_admin && <DeleteStaff id={staff.id} name={staff.name} />} */}
      </div>
    </div>
  );
};

export default StaffDetail;
