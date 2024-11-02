export default function AnimatedChartProgressBar({
  max = 100,
  min = 0,
  value = 0,
  barColor,
  backgroundColor,
  className,
}) {
  const currentPercent = ((value - min) / (max - min)) * 100;

  return (
    <div className={`${className} relative w-[500px] h-8 bg-[#7164FA] bg-opacity-15 rounded-r-full`} style={{ backgroundColor }}>
      <div
        className="absolute top-0 left-0 h-full bg-blue-500 rounded-r-full"
        style={{
          width: `${currentPercent}%`,
          backgroundColor: barColor,
          transition: 'width 1s ease',
        }}
      ></div>
      <span
        data-current-value={currentPercent}
        className="absolute inset-0 flex items-center justify-center text-black font-semibold"
      >
        {currentPercent}%
      </span>
    </div>
  );
}
