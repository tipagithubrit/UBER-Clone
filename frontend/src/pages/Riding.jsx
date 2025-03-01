import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
  return (
    <div className='h-screen'>
      <Link to='/home' className='fixed  right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full'>
        <i className="text-lg font-medium ri-home-5-line"></i>
      </Link>
      <div className='h-1/2'>
        <img className='w-full h-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="map image " />
      </div>
      <div className='h-1/2 p-4'>
        <div className='flex items-center justify-between'>
          <img className='h-12' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCKxobWsqpOYQilwWnLIdmfuU-af_USUUzY0ztgXUIYo6Dt1tKWA0WDND0rv-bbIa3wdU&usqp=CAU" alt="" />
          <div className='text-right'>
            <h2 className='text-lg font-medium'>Sarthak </h2>
            <h4 className='text-xl font-semibold -mt-1 -mb-1'>MP04 AB 123</h4>
            <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
          </div>
        </div>
        <div className='flex gap-2 justify-between flex-col items-center'>
        </div>
        <div className='w-full mt-5'>
          <div className='flex items-center gap-5  p-3 border-b-3'>
            <i className=' text-lg ri-map-pin-2-fill'></i>
            <div>
              <h3 className='text-lg font-medium'>562/11-A</h3>
              <p className='text-sm -mt-1 text-gray-600'>Knkariya Talab, Himanchal</p>
            </div>
          </div>
          <div className='flex items-center gap-5 p-3'>
            <i className='ri-currency-line'></i>
            <div>
              <h3 className='text-lg font-medium'>₹123.45</h3>
              <p className='text-sm -mt-1 text-gray-600'>Cash, Cash</p>
            </div>
          </div>
        </div>
        <button className='w-full bg-green-600 text-white font-semibold p-2 rounded-lg' >Make a Payment</button>
      </div>
    </div>
  )
}

export default Riding