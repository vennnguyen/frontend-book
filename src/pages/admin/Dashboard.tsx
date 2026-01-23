import { useAuthStore } from '@/stores/useAuthStore'
import React from 'react'

const Dashboard = () => {
  const user = useAuthStore((s)=>s.user)
  return (
    <div>{user?.fullName}</div>
  )
}

export default Dashboard