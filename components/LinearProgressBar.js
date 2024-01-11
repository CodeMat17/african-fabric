"use client";

import { Progress } from "@nextui-org/react";
import { useEffect, useState } from "react";

const LinearProgressBar = ({ tailoring, beading, q_c, status, ready }) => {
  const [label, setLabel] = useState("processing");
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (tailoring) {
      setLabel("Tailoring");
      setValue(20);
    }
    if (tailoring && beading) {
      setLabel("Beading");
      setValue(40);
    }
    if (tailoring && beading && q_c) {
      setLabel("Q-Controll Checked");
      setValue(60);
    }
    if (tailoring && beading && q_c && status) {
      setLabel("Fitting");
      setValue(80);
    }
    if (tailoring && beading && q_c && status && ready) {
      setLabel("Ready");
      setValue(100);
    }
  });

  return (
    <Progress
      size='sm'
      radius='full'
      classNames={{
        text: "xs",
        base: "max-w-md",
        track: "drop-shadow-md border border-default",
        indicator: "bg-gradient-to-r from-red-500 via-yellow-500 to-[#55c694]",
        label: "tracking-wider text-default-600",
        value: "text-foreground/60",
      }}
      label={label}
      value={value}
      showValueLabel={true}
    />
  );
};

export default LinearProgressBar;
