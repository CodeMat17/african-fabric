import { AiOutlineLoading } from "react-icons/ai";
import BeaderModal from "./modals/BeaderModal";
import QualityControlModal from "./modals/QualityControlModal";
import ReadyModal from "./modals/ReadyModal";
import TailorModal from "./modals/TailorModal";

const JobProgressBar = ({
  id,
  tailoring,
  tailor,
  assigned_on,
  finished_on,
  beading,
  beader,
  q_c,
  ready,
  beaders,
}) => {
  return (
    <div className='w-full py-6 max-w-xs mx-auto'>
      <p className='text-sm text-center mb-1'>Job Progress Status</p>

      <div className='relative pt-2'>
        <div className='mb-1 flex h-9 overflow-hidden rounded-full bg-gray-200 text-xs'>
          <TailorModal
            id={id}
            tailoring={tailoring}
            tailor={tailor}
            assigned_on={assigned_on}
            finished_on={finished_on}
          />

          <BeaderModal
            id={id}
            tailoring={tailoring}
            beader={beader}
            beading={beading}
            beaders={beaders}
          />

          <QualityControlModal id={id} beading={beading} q_c={q_c} />
          <ReadyModal id={id} q_c={q_c} ready={ready} />
         
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
