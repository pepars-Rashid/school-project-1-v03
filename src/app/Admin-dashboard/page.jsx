import AdminNav from '@/components/admin-dashboard/adminNav'
import { Example, StaggeredDropDown } from '@/components/admin-dashboard/Nav'

export default function page() {
  return (
    <div className='flex'>
      {/* <AdminNav/> */}
      <div className='flex-grow'></div>
      <Example/>
    </div>
  )
}