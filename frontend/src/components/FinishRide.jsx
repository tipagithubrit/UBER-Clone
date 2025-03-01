import React from 'react'
import { Link } from 'react-router-dom'

const FinishRide = (props) => {
  return (
    <div>
      <h5 className='p-3 text-center w-[93%] absolute top-0 ' onClick={() => {
        props.setFinishRidePanel(false)
      }}><i className='text-3xl text-gray-100 ri-arrow-down-wide-line'></i></h5>
      <h2 className='text-2xl fonrt-semibold mb-5'>Finish this Ride</h2>

      <div className='flex items-center justify-between mt-4 p-4 border-2 border-yellow-400 rounded-lg'>
        <div className='flex items-center gap-3 '>
          <img className='h-10 w-10 rounded-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdlMd7stpWUCmjpfRjUsQ72xSWikidbgaI1w&s" alt="" />
          <h2 className='text-lg font-medium'>Harshita Patel</h2>
        </div>
        <h5 className='text-lg font-semibold '>2.2 KM </h5>
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

      <div className='mt-10 w-full'>

        <Link to='/captain-home' className='w-full mt-5 flex text-lg justify-center bg-green-600 text-white font-semibold p-3 rounded-lg'>Finish Ride</Link>

        {/* <p className='mt-10 text-xs'>click on finish ride button if you have completed the payment.</p> */}

      </div>
    </div>
  )
}

export default FinishRide