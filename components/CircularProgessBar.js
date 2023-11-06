"use client";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import BarProgressiveProvider from "./BarProgressiveProvider";

const CircularProgessBar = () => {
  const percentage = 91;
  const completedPercent = 91;
  const pendingPercent = 9;

  return (
    <div className='py-2 md:py-0 flex flex-col gap-4 items-center justify-center'>
      <div className='relative flex items-center justify-center w-[220px] h-[220px] md:w-[140px] md:h-[140px]'>
        <BarProgressiveProvider valueStart={0} valueEnd={completedPercent}>
          {(completedPercent) => (
            <CircularProgressbar
              value={completedPercent}
              text={`${completedPercent}%`}
              styles={buildStyles({
                fontSize: "10px",
                pathTransitionDuration: 0.2,
                textColor: "#55c694",
                // pathColor: `rgba(85, 198, 148, ${percentage / 100})`,
                pathColor: "#55c694",
                // trailColor: "#eee",
                backgroundColor: "#55c694",
              })}
            />
          )}
        </BarProgressiveProvider>
        <p className='absolute top-[127px] md:top-[80px] text-center text-lg md:text-xs'>
          Completed Jobs
        </p>
      </div>

      <div className='relative flex items-center justify-center w-[220px] h-[220px] md:w-[140px] md:h-[140px]'>
        <BarProgressiveProvider valueStart={0} valueEnd={pendingPercent}>
          {(pendingPercent) => (
            <CircularProgressbar
              value={pendingPercent}
              text={`${pendingPercent}%`}
              styles={buildStyles({
                fontSize: "10px",
                pathTransitionDuration: 0.2,
                textColor: "#55c694",
                // pathColor: `rgba(85, 198, 148, ${percentage / 100})`,
                pathColor: "#ffbf00",
                // trailColor: "#eee",
                backgroundColor: "#55c694",
              })}
            />
          )}
        </BarProgressiveProvider>
        <p className='absolute top-[127px] md:top-[80px] text-center text-lg md:text-xs'>
          Pending Jobs
        </p>
      </div>
    </div>
  );
};

export default CircularProgessBar;
