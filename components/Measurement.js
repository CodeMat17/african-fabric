"use client";



const Tag = ({ item, value }) => (
  <div className='w-full text-sm flex flex-col items-center justify-center'>
    <label className='whitespace-nowrap'>{item}</label>
    <p className='w-full flex items-center justify-center text-black bg-black/10 h-8 rounded-full'>{value}</p> 
  </div>
);

import { Accordion, AccordionItem } from "@nextui-org/react";

const Measurement = ({
  neck,
  o_bust,
  bust,
  u_bust,
  waist,
  hips,
  nk_heel,
  nk_abov_knee,
  a_length,
  s_seam,
  arm_hole,
  bicep,
  fore_arm,
  wrist,
  v_neck_cut,
  abv_knee_ankle,
  w_abv_knee,
}) => {

  const measurements = [
    { id: 1, item: "Neck", value: neck },
    { id: 2, item: "O-Bust", value: o_bust },
    { id: 3, item: "Bust", value: bust },
    { id: 4, item: "U-Bust", value: u_bust },
    { id: 5, item: "Waist", value: waist },
    { id: 6, item: "Hips", value: hips },
    { id: 7, item: "Nk-Heel", value: nk_heel },
    { id: 8, item: "Nk abv Knee", value: nk_abov_knee },
    { id: 9, item: "A-Length", value: a_length },
    { id: 10, item: "S-Seam", value: s_seam },
    { id: 11, item: "Arm Hole", value: arm_hole },
    { id: 12, item: "Bicep", value:  bicep},
    { id: 13, item: "Fore Arm", value: fore_arm },
    { id: 14, item: "Wrist", value: wrist },
    { id: 15, item: "V Neck Cut", value: v_neck_cut },
    { id: 16, item: "Abv Knee-Ankle", value: abv_knee_ankle },
    { id: 17, item: "Waist-above Kneel", value: w_abv_knee },
  ];

  return (
    <Accordion className='lg:mt-9 border border-[#55c694] w-full rounded-xl'>
      <AccordionItem
        key='1'
        aria-label='Measurements'
        subtitle='Press to open / close'
        title='Measurments'
        className=' px-2  '>
        <div className='pb-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-4 gap-x-2 sm:gap-x-4'>
          {!measurements ? (
            <p>Measurement has not been taken</p>
          ) : (
            <>
              {measurements.map((item) => (
                <Tag key={item.id} item={item.item} value={item.value} />
              ))}
            </>
          )}
        </div>
      </AccordionItem>
    </Accordion>
  );
};

export default Measurement;
