import React, { useState, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'

const Home = () => {

  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState('false')
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)


  const submitHandler = (e) => {
    e.preventDefault()
  }

  useGSAP(function () {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: '70%',
        padding: 24
        // opacity:1
      })
      gsap.to(panelCloseRef.current, {
        opacity: 1
      })
    } else {
      gsap.to(panelRef.current, {
        height: '0%',
        padding: 0
        // opacity:0
      })
      gsap.to(panelCloseRef.current, {
        opacity: 0
      })
    }
  }, [panelOpen])

  return (
    <div className='h-screen relative'>
      <img className='w-16 absolute  left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="uber-logo" />

      <div className='h-screen w-screen'>
        {/*  image for temporary */}
        <img className='w-full h-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="map image " />
      </div>
      <div className=' flex flex-col justify-end h-screen absolute top-0 w-full '>
        <div className='h-[30%] p-5 bg-white relative'>
          <h5 className='absolute top-3 left-3 text-xl '>
            <i className='ri-arrow-down-wide-line'></i>
          </h5>
          <h4 className='text-2xl font-semibold'>Find a trip</h4>
          <form onSubmit={(e) => {
            submitHandler(e)
          }}>
            <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-700 rounded-full"></div>
            <input
              onClick={() => {
                setPanelOpen(true)
              }}
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value)
              }}
              className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5'
              type="text"
              placeholder='Add a pick-up location' />


            <input
              onClick={() => {
                setPanelOpen(true)
              }}
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value)
              }}
              className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3'
              type="text"
              placeholder='Enter your destination' />
          </form>

        </div>
        <div ref={panelRef} className='h-0 bg-red-500 '>   {/*we do h-[70%] */}

        </div>
      </div>
    </div>
  )
}

export default Home