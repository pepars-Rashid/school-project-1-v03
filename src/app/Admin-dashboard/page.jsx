import Sidebar from '@/components/admin-dashboard/adminNav'
import ColumnDiagram1 from '@/components/testing/h-barchart'
import DegreeLevels from '@/components/testing/now'



export default function page() {
  return (
    <div className='flex'>
      <div className='min-h-[640px] min-w-[500px] flex-grow grid grid-rows-[57%_40%] gap-[3%] pr-[25px] pl-[50px] pt-[100px] pb-[50px]'>
      
      <div className="grid grid-cols-[71%_27%] gap-[2%]">
        <div className="rounded-[15px] border-[3px] border-[#BFBFBF] "></div>
        <div className="rounded-[15px] border-[3px] border-[#BFBFBF] "><DegreeLevels/></div>
      </div>

      <div className="w-full rounded-[15px] border-[3px] border-[#BFBFBF]"><ColumnDiagram1/> </div>
    
      </div>
      <Sidebar/>
    </div>
  )
}