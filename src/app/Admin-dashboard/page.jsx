import Sidebar from '@/components/admin-dashboard/adminNav'



export default function page() {
  return (
    <div className='flex'>
      <div className='flex-grow'></div>
      <Sidebar/>
    </div>
  )
}