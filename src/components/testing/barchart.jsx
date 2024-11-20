import HorizontalBarChart from "./horizintalbarchart";


const categories = [
  'العدد الكلي',
  'الأول',
  'الثاني',
  'الثالث',
  'الرابع',
  'الخامس',
  'السادس',
  'السابع',
  'الثامن',
  'التاسع',
];

const initialValues = [75, 60, 90, 40, 50, 70, 80, 30, 20, 10];
const barColors = [
  'rgb(79 70 229)',
  '#FF6F61',
  'rgb(79 70 229)',
  '#FF6F61',
  'rgb(79 70 229)',
  '#FF6F61',
  'rgb(79 70 229)',
  '#FF6F61',
  'rgb(79 70 229)',
  '#FF6F61',
];

export default function App() {
  return (
    <div className="relative">
      <HorizontalBarChart
        categories={categories}
        initialValues={initialValues}
        barColors={barColors}
        className=""
      />
      <Background/>
    </div>
  );
}

const Background = ()=>{
  return(
    <div className="absolute w-[500px] right-0 top-0 h-full flex justify-between -z-10">
      <div  className="w-[2px] h-full bg-[#7E7F80]  bg-opacity-25"></div>
      <div  className="w-[2px] h-full bg-[#7E7F80]  bg-opacity-25"></div>
      <div  className="w-[2px] h-full bg-[#7E7F80]  bg-opacity-25"></div>
      <div  className="w-[2px] h-full bg-[#7E7F80]  bg-opacity-25"></div>
      <div  className="w-[2px] h-full bg-[#7E7F80]  bg-opacity-25"></div>
      <div  className="w-[2px] h-full bg-[#7E7F80]  bg-opacity-25"></div>
    </div>
  )
}
