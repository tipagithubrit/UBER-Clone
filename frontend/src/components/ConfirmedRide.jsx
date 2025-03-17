import React from 'react'

const ConfirmedRide = (props) => {

  return (
    <div>
      <h5 className='p-3 text-center w-[93%] absolute top-0 ' onClick={() => {
        props.setVechiclePanel(false)
      }}><i className='text-3xl text-gray-100 ri-arrow-down-wide-line'></i></h5>
      <h2 className='text-2xl fonrt-semibold mb-5'>confirm your Ride to Start</h2>

      <div className='flex gap-2 justify-between flex-col items-center'>
        <img className='h-20' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCKxobWsqpOYQilwWnLIdmfuU-af_USUUzY0ztgXUIYo6Dt1tKWA0WDND0rv-bbIa3wdU&usqp=CAU" alt="" />
      </div>
      <div className='w-full mt-5'>
        <div className='flex items-center gap-5 p-3 border-b-3'>
          <i className=' text-lg ri-map-pin-user-fill'></i>
          <div>
            <h3 className='text-lg font-medium'>562/11-A</h3>
            <p className='text-sm -mt-1 text-gray-600'>{props.pickup}</p>
          </div>
        </div>
        <div className='flex items-center gap-5  p-3 border-b-3'>
          <i className=' text-lg ri-map-pin-2-fill'></i>
          <div>
            <h3 className='text-lg font-medium'>562/11-A</h3>
            <p className='text-sm -mt-1 text-gray-600'>{props.destination}</p>
          </div>
        </div>
        <div className='flex items-center gap-5 p-3'>
          <i className='ri-currency-line'></i>
          <div>
            <h3 className='text-lg font-medium'>₹{props.fare[props.vehicleType]}</h3>
            <p className='text-sm -mt-1 text-gray-600'>Cash, Cash</p>
          </div>
        </div>
      </div>
      <button onClick={() => {
        props.setVehicleFound(true)
        props.setConfirmRidePanel(false)
        props.createRide()
      }} className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'>Confirm</button>
    </div>

  )
}

export default ConfirmedRide