import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
      <h5 className='p-3 text-center w-[93%] absolute top-0 ' onClick={() => {
        props.setVechiclePanel(false)
      }}><i className='text-3xl text-gray-800 ri-arrow-down-wide-line'></i></h5>
      <h2 className='text-2xl fonrt-semibold mb-5'>Choose a vechicle</h2>
      <div onClick={() => {
        props.setConfirmRidePanel(true)
      }} className='flex border-2 mb-2  active:border-black  rounded-xl  w-full p-3  items-center justify-between'>
        <img className='h-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCKxobWsqpOYQilwWnLIdmfuU-af_USUUzY0ztgXUIYo6Dt1tKWA0WDND0rv-bbIa3wdU&usqp=CAU" alt="" />
        <div className=' w-1/2 '>
          <h4 className='font-medium text-base'>UberGo <span> <i className='ri-user-3-fill'></i>4</span></h4>
          <h5 className='font-medium text-sm' >2 mins away</h5>
          <p className='font-normal text-xs test-gray-600'>Affordable, compact rides</p>
        </div>
        <h2 className='text-lg  font-semibold'>₹192.20</h2>
      </div>
      <div onClick={() => {
        props.setConfirmRidePanel(true)
      }} className='flex border-2 mb-2 active:border-black rounded-xl  w-full p-3  items-center justify-between'>
        <img className='h-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvsXFgDqA4hgTAoCQ1cbjnygbPD3UPsBo41A&s" alt="" />
        <div className='-ml-2 w-1/2 '>
          <h4 className='font-medium text-base'>Moto<span> <i className='ri-user-3-fill'></i>1</span></h4>
          <h5 className='font-medium text-sm' >3 mins away</h5>
          <p className='font-normal text-xs test-gray-600'>Affordable,MoterCycle rides</p>
        </div>
        <h2 className='text-lg  font-semibold'>₹56</h2>
      </div>
      <div onClick={() => {
        props.setConfirmRidePanel(true)
      }} className='flex border-2 mb-2 active:border-black rounded-xl  w-full p-3  items-center justify-between'>
        <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
        <div className='ml-2 w-1/2 '>
          <h4 className='font-medium text-base'>UberAuto<span> <i className='ri-user-3-fill'></i>3</span></h4>
          <h5 className='font-medium text-sm' >4 mins away</h5>
          <p className='font-normal text-xs test-gray-600'>Affordable,Auto rides</p>
        </div>
        <h2 className='text-lg font-semibold'>₹118.56</h2>
      </div>

    </div>
  )
}

export default VehiclePanel