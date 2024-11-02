import AdminChart from "@/components/Chart-Progress/admin-chart";
import StudentProgress from "@/components/Circular-Progress/Student-progress";
import BarChart from "@/components/testing/barchart";
import HorizontalBarChart from "@/components/testing/horizintalbarchart";

export default function Home() {
  return (
    <>
    <div className="w-screen h-screen flex justify-center items-center">
    {/* <AdminChart/> */}
    <BarChart/>
    </div>
    </>
  );
}
