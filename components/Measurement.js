"use client";

const measurements = [
  { id: 1, item: "Neck", value: 0 },
  { id: 2, item: "O-Bust", value: 0 },
  { id: 3, item: "Bust", value: 0 },
  { id: 4, item: "U-Bust", value: 0 },
  { id: 5, item: "Waist", value: 0 },
  { id: 6, item: "Hips", value: 0 },
  { id: 7, item: "Nk-Heel", value: 0 },
  { id: 8, item: "Nk abv Knee", value: 0 },
  { id: 9, item: "A-Length", value: 0 },
  { id: 10, item: "S-Seam", value: 0 },
  { id: 11, item: "Arm Hole", value: 0 },
  { id: 12, item: "Bicep", value: 0 },
  { id: 13, item: "Fore Arm", value: 0 },
  { id: 14, item: "Wrist", value: 0 },
  { id: 15, item: "V Neck Cut", value: 0 },
  { id: 16, item: "Abv Knee-Ankle", value: 0 },
  { id: 17, item: "Waist-above Kneel", value: 0 },
];

const Tag = ({item, value}) => (
  <div className='px-2 text-sm text-[#55c694] bg-[#55c694]/10 h-8 rounded-full flex items-center justify-center gap-2'>
    <p className="whitespace-nowrap">{item}</p>
    <p>{value}</p>
  </div>
);

import { Accordion, AccordionItem } from "@nextui-org/react";

const Measurement = () => {
  return (
    <Accordion className='lg:mt-9 border w-full md:max-w-md rounded-xl'>
      <AccordionItem
        key='1'
        aria-label='Measurements'
        subtitle='Press to open / close'
        title='Measurments'
        className=' px-2  '>
        <div className='pb-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-y-4 gap-x-2 sm:gap-x-4'>
          {!measurements ? <p>Measurement has not been taken</p> :
           <>
           {measurements.map((item) => (
              <Tag key={item.id} item={item.item} value={item.value} />
           ))}
           </>
           
          }
        </div>
      </AccordionItem>
    </Accordion>
  );
};

export default Measurement;
