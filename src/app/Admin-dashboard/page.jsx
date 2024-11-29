import Classification from '@/components/admin-dashboard/admin-home/classification'
import Sidebar from '@/components/admin-dashboard/adminNav'
import EditableTable from '@/components/testing/Admin-form'
import ColumnDiagram1 from '@/components/testing/h-barchart'
import DegreeLevels from '@/components/testing/now'



export default function page() {
  return (
    <div className='relative flex h-screen'>
      <div className='flex-grow w-full flex flex-wrap gap-[3%] pr-[25px] pl-[50px] pt-[100px] pb-[50px]'>
        <div className="h-[58%] w-full flex flex-wrap gap-[2%]">
          <div className="w-[71%] min-w-[300] h-full overflow-clip rounded-[15px] border-[3px] border-[#BFBFBF]"><EditableTable/></div>
          <div className="w-[27%] min-w-[200] h-full overflow-clip rounded-[15px] border-[3px] border-[#BFBFBF]"><Classification/></div>
        </div>
      <div className="w-full h-[40%] rounded-[15px] border-[3px] border-[#BFBFBF]"><ColumnDiagram1/></div>
    </div>
      <Sidebar/>
    </div>
  )
}