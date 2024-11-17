import StudentNav from "@/components/student-dashboard/studentNav";

export default function RootLayout({ children }) {
  return (
      <>
        <div className="h-[2000px] bg-gradient-to-br from-[#B3D9FF] to-[#CAE8FA]">
          {children}
          <StudentNav/>
        </div>
      </>
  );
}