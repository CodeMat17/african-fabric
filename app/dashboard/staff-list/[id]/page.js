import DeleteStaff from "@/components/profile-staff/DeleteStaff";
import EditStaff from "@/components/profile-staff/EditStaff";
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
    .select("id, name, tel, email, position, is_admin")
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
          <label>Name</label>
          <p className='border px-3 py-2.5 rounded-xl bg-gray-100'>
            {staff.name}
          </p>
        </div>
        <div>
          <label>Email</label>
          <p className='border px-3 py-2.5 rounded-xl bg-gray-100'>
            {staff.email}
          </p>
        </div>
        <div>
          <label>Tel</label>
          <p className='border px-3 py-2.5 rounded-xl bg-gray-100'>
            {staff.tel}
          </p>
        </div>
        <div className='flex gap-4'>
          <div className='w-full'>
            <label>Position</label>
            <p className='border px-3 py-2.5 rounded-xl bg-gray-100 text-center'>
              {staff.position ? (
                staff.position
              ) : (
                <span className='text-red-400'>Not profiled yet</span>
              )}
            </p>
          </div>
          <div className='w-full'>
            <label>Is admin</label>
            <p className='border px-3 py-2.5 rounded-xl bg-gray-100  text-center'>
              {staff.is_admin ? (
                <span className='text-green-600 '>Yes</span>
              ) : (
                <span className='text-red-600'>No</span>
              )}
            </p>
          </div>
        </div>
        <div className='mt-6 flex flex-col sm:flex-row gap-3'>
          <DeleteStaff id={staff.id} name={staff.name} />
          <EditStaff
            id={staff.id}
            staff_name={staff.name}
            staff_tel={staff.tel}
          />

          <ProfileStaff
            id={staff.id}
            staff_name={staff.name}
            staff_position={staff.position}
          />

          <MakeAdmin id={staff.id} admin={staff.is_admin} />
        </div>
      </div>
    </div>
  );
};

export default StaffDetail;
