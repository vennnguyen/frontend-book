import Header from '@/components/layout/header'
import { useAuthStore } from '@/stores/useAuthStore'
import React from 'react'

const Home = () => {
  const user = useAuthStore((s)=>s.user)
  console.log(user);
  
  return (
    <div>
        <Header/>
        <div className='text-3xl'>{user?.fullName} hi</div>
    </div>
  )
}

export default Home