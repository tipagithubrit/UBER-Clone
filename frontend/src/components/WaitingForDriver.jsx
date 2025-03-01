import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div>
      <h5 className='p-3 text-center w-[93%] absolute top-0 ' onClick={() => {
        props.waitingForDriver(false)
      }}><i className='text-3xl text-gray-100 ri-arrow-down-wide-line'></i></h5>
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
        <div className='flex items-center gap-5 p-3 border-b-3'>
          <i className=' text-lg ri-map-pin-user-fill'></i>
          <div>
            <h3 className='text-lg font-medium'>562/11-A</h3>
            <p className='text-sm -mt-1 text-gray-600'>Knkariya Talab, Himanchal</p>
          </div>
        </div>
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


    </div>
  )
}

export default WaitingForDriver