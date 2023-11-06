"use client";

import { useEffect, useState } from "react";

const BarProgressiveProvider = ({ valueStart, valueEnd, children }) => {
  const [value, setVAlue] = useState(valueStart);

  useEffect(() => {
    setVAlue(valueEnd);
  }, [valueEnd]);

  return children(value);
};

export default BarProgressiveProvider;
