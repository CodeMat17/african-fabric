import { supabaseClient } from "../supabaseClient";
import BeaderModal from "./modals/BeaderModal";
import FittingModal from "./modals/FittingModal";
import QualityControlModal from "./modals/QualityControlModal";
import ReadyModal from "./modals/ReadyModal";
import TailorModal from "./modals/TailorModal";

const JobProgressBar = async ({
  id,
  tailoring,
  tailor,
  assigned_on,
  finished_on,
  beading,
  beader,
  q_c,
  ready,
  status,
  beaders,
  fitting_date,
  fitting_confirmed_by,
  fitting_done,
  session,
}) => {
  const admin_id = session?.user?.id;

  const {
    data,
    error,
    status: queryStatus,
  } = await supabaseClient
    .from("staffers")
    .select(`staff_admin, email, name`)
    .eq("id", admin_id)
    .single();

  if (error && queryStatus !== 406) {
    throw error;
  }

  return (
    <div className='w-full py-6 max-w-sm mx-auto'>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre>
      <pre>{JSON.stringify(q_c, null, 2)}</pre> */}
      <p className='text-sm text-center mb-1'>Job Progress Status</p>

      <div className='relative pt-2'>
        <div className='mb-1 flex h-9 overflow-hidden rounded-full bg-gray-200 text-xs'>
          <TailorModal
            id={id}
            tailoring={tailoring}
            tailor={tailor}
            assigned_on={assigned_on}
            finished_on={finished_on}
            // qc_admin={data?.qc_admin}
            staff_admin={data?.staff_admin}
          />

          <BeaderModal
            id={id}
            tailoring={tailoring}
            beader={beader}
            beading={beading}
            beaders={beaders}
            // qc_admin={data?.qc_admin}
            staff_admin={data?.staff_admin}
          />

          <QualityControlModal
            id={id}
            beading={beading}
            q_c={q_c}
            // qc_admin={data?.qc_admin}
            staff_admin={data?.staff_admin}
          />

          <FittingModal
            id={id}
            q_c={q_c}
            ready={ready}
            status={status}
            fitting_date={fitting_date}
            fitting_confirmed_by={fitting_confirmed_by}
            fitting_done={fitting_done}
            // qc_admin={data?.qc_admin}
            staff_admin={data?.staff_admin}
          />

          <ReadyModal
            id={id}
            fitting_done={fitting_done}
            ready={ready}
            // qc_admin={data?.qc_admin}
            staff_admin={data?.staff_admin}
          />
        </div>
        <div className='mb-2 flex items-center justify-between text-xs'>
          <div className='text-gray-600'>Progress</div>
          <div className='text-gray-600'>Done</div>
        </div>
      </div>
    </div>
  );
};

export default JobProgressBar;
