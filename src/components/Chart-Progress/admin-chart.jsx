"use client";

import { useEffect, useState } from "react";
import AnimatedChartProgressBar from "./chart-progress";




export default function AdminChart() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const handleIncrement = (prev) => {
      if (prev >= 70.5) {
        return 70.5;
      }
      return prev + 10;
    };
    setValue(handleIncrement);
    const interval = setInterval(() => setValue(handleIncrement), 0.1 *1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatedChartProgressBar
      max={100}
      min={0}
      value={value}
      gaugePrimaryColor="rgb(79 70 229)"
      gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
    />
  );
}
