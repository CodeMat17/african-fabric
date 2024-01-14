import CdImageComponent from "@/components/CdImageComponent";
import UpdateCustomerComponent from "@/components/update-customer/UpdateCustomerComponent";
import { supabaseClient } from "@/supabaseClient";
import { notFound } from "next/navigation";

export const revalidate = 0;

const UpdateInfo = async ({ params: { id } }) => {
  let {
    data: customer,
    error,
    count,
  } = await supabaseClient.from("customers").select("*").match({ id }).single();

  if (!customer) {
    notFound;
  }

  return (
    <div className='px-4 pt-4 pb-12'>
      <p className='uppercase text-center text-xl font-medium'>
        Update Customer Details
      </p>

      {/* <pre classNames='max-w-xs text-sm'>
        {JSON.stringify(customer, null, 2)}
      </pre> */}
      <div className='pt-8 pb-5 flex justify-center'>
        <CdImageComponent
          width='130'
          height='130'
          image={customer?.avatar}
          radius='rounded-full'
        />
      </div>
      <div>
        <UpdateCustomerComponent
          id={customer.id}
          c_name={customer.name}
          c_email={customer.email}
          c_tel={customer.tel}
          c_style={customer.style}
          c_neck={customer.neck}
          c_o_bust={customer.o_bust}
          c_bust={customer.bust}
          c_u_bust={customer.u_bust}
          c_waist={customer.waist}
          c_hips={customer.hips}
          c_nk_heel={customer.nk_heel}
          c_nk_abov_knee={customer.nk_abov_knee}
          c_a_length={customer.a_length}
          c_s_seam={customer.s_seam}
          c_arm_hole={customer.arm_hole}
          c_bicep={customer.bicep}
          c_fore_arm={customer.fore_arm}
          c_wrist={customer.wrist}
          c_v_neck_cut={customer.v_neck_cut}
          c_abv_knee_ankle={customer.abv_knee_ankle}
          c_w_abv_knee={customer.w_abv_knee}
          c_sex={customer.sex}
          c_forehead={customer.forehead}
          c_chest_at_ampits={customer.chest_at_ampits}
          c_chest_or_bust={customer.chest_or_bust}
          c_thigh_at_crotch={customer.thigh_at_crotch}
          c_mid_thigh={customer.mid_thigh}
          c_knee={customer.knee}
          c_below_knee={customer.below_knee}
          c_calf={customer.calf}
          c_ankle={customer.ankle}
          c_elbow={customer.elbow}
          c_forearm={customer.forearm}
          c_torso_circum={customer.torso_circum}
          c_pants_length={customer.pants_length}
          c_shoulders={customer.shoulders}
          c_top_length={customer.top_length}
        />
      </div>
    </div>
  );
};

export default UpdateInfo;
