
import Navbar from '@common/Navbar'

import { Outlet } from 'react-router-dom'




export default function Nav() {
  return (
    <div className="min-h-screen bg-base-100">
      <div>
        <Navbar />
      </div>
      <div className="mt-20">
        <Outlet/>
      </div>
   
    </div>
  )
} 