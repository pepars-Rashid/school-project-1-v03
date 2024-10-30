import AdminChart from "@/components/Chart-Progress/admin-chart";
import StudentProgress from "@/components/Circular-Progress/Student-progress";

export default function Home() {
  return (
    <>
    <div className="w-screen h-screen flex justify-center items-center">
    <AdminChart/>
    </div>
    </>
  );
}
