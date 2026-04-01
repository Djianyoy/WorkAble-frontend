import LoginContainer from '@/feature/_user/auth/login/container/LoginContainer'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginContainer />
    </Suspense>
    
  )
}

export default page