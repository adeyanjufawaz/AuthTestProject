import React from 'react'
import { Link } from 'react-router-dom'

function ErrorBoundary() {
  return (
      <div className='flex flex-col gap-6 justify-center items-center py-5'>
          <h2>Error 404</h2>
          <Link to="/" className='bg-red-500 py-3 px-6' >Back to HomePage</Link>
    </div>
  )
}

export default ErrorBoundary