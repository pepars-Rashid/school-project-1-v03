import AdminNav from '@/components/admin-dashboard/adminNav'
import Sidebar from '@/components/admin-dashboard/Nav'


export default function page() {
  return (
    <div className='flex'>
      {/* <AdminNav/> */}
      <div className='flex-grow'></div>
      <Sidebar/>
    </div>
  )
}