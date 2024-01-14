"use client";

const Tag = ({ item, value }) => (
  <div className='w-full text-sm flex flex-col items-center justify-center'>
    <label className='whitespace-nowrap'>{item}</label>
    <p className='w-full flex items-center justify-center text-black bg-black/10 h-8 rounded-full'>
      {value}
    </p>
  </div>
);

import { Accordion, AccordionItem } from "@nextui-org/react";

const MeasurementMen = ({
  neck,
forehead,
  waist,
  hips,
  bicep,
  chest_at_ampits,
  chest_or_bust,
  thigh_at_crotch,
  mid_thigh,
  knee,
  below_knee,
  calf,
  ankle,
  elbow,
  forearm, wrist,
  torso_circum,
  pants_length,
  shoulders,
  top_length,
}) => {
  const measurements = [
    { id: 1, item: "Forehead", value: forehead },
    { id: 2, item: "Neck", value: neck },
    { id: 3, item: "Chest @ ampits", value: chest_at_ampits },
    { id: 4, item: "Chest or Bust", value: chest_or_bust },
    { id: 5, item: "Waist", value: waist },
    { id: 6, item: "Hips", value: hips },
    { id: 7, item: "Thigh @ Crotch", value: thigh_at_crotch },
    { id: 8, item: "Mid Thigh", value: mid_thigh },
    { id: 9, item: "Knee", value: knee },
    { id: 10, item: "Below Knee", value: below_knee },
    { id: 11, item: "Calf", value: calf },
    { id: 12, item: "Ankle", value: ankle },
    { id: 13, item: "Bicep", value: bicep },
    { id: 14, item: "elbow", value: elbow },
    { id: 15, item: "Forearm", value: forearm },
    { id: 16, item: "Wrist", value: wrist },
    { id: 17, item: "Torso Circum", value: torso_circum },
    { id: 18, item: "Pants Length", value: pants_length },
    { id: 19, item: "Shoulders", value: shoulders },
    { id: 20, item: "Top Length", value: top_length },
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

export default MeasurementMen;
