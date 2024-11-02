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
    <div className="p-4">
      <HorizontalBarChart
        categories={categories}
        initialValues={initialValues}
        barColors={barColors}
        className="my-4"
      />
    </div>
  );
}
