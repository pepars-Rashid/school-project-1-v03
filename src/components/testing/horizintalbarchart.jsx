'use client'
import React, { useEffect, useState } from 'react';
import AnimatedChartProgressBar from '../Chart-Progress/chart-progress';

const HorizontalBarChart = ({ categories, initialValues, barColors, className }) => {
  const [values, setValues] = useState(initialValues.map(() => 0));

  useEffect(() => {
    const handleIncrement = (prev) => {
      return prev.map((value, index) => {
        if (value >= initialValues[index]) {
          return initialValues[index];
        }
        return value + 10;
      });
    };

    const interval = setInterval(() => {
      setValues(handleIncrement);
    }, 100);

    return () => clearInterval(interval);
  }, [initialValues]);

  return (
    <div className={`${className} flex flex-col gap-4`}>
      {categories.map((category, index) => (
        <div key={index} className="flex items-center">
          <div className="w-[150px] text-right pr-4">{category}</div>
          <AnimatedChartProgressBar
            max={100}
            min={0}
            value={values[index]}
            barColor={barColors[index]}
            backgroundColor="gray-200"
            className="flex-1"
          />
        </div>
      ))}
    </div>
  );
};

export default HorizontalBarChart;
