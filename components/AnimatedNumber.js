'use client'

import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

const AnimatedComponent = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 8000 });
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const AnimatedNumber = ({ classnames, value }) => {
  return <div className={classnames}><AnimatedComponent value={value} /></div> 
};

export default AnimatedNumber;
