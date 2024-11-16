import StudentNav from "@/components/student-dashboard/studentNav";

export default function RootLayout({ children }) {
  return (
      <>
        {children}
        <StudentNav/>
      </>
  );
}