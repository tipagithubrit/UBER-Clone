import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";
import { useEffect } from "react";
import { useContext } from "react";
import { SocketContext } from "../context/SocketContext";
import { CaptainDataContext } from "../context/CaptainContext";
const CaptainHome = () => {

  const [ridePopupPanel, setRidePopupPanel] = useState(true)
  const [confirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false)



  const ridePopupPanelRef = useRef(null)
  const confirmRidePopupPanelRef = useRef(null)

  const { socket } = useContext(SocketContext)
  const { captain } = useContext(CaptainDataContext)

  useEffect(() => {

    socket.emit("join", { userType: "captain", userId: captain._id });

  }, [socket, captain]);


  useGSAP(function () {
    if (ridePopupPanel) {
      gsap.to(ridePopupPanelRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(ridePopupPanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [ridePopupPanel])

  useGSAP(function () {
    if (confirmRidePopupPanel) {
      gsap.to(confirmRidePopupPanelRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(confirmRidePopupPanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [confirmRidePopupPanel])

  return (
    <div className='h-screen'>
      <div className="fixed p-6 top-0 flex items-center justify-between w-screen">
        <img className="w-16" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="uber-logo" />
        <Link to='/captain-home' className=' h-10 w-10 bg-white flex items-center justify-center rounded-full'>
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className='h-3/5'>
        <img className='w-full h-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="map image " />
      </div>
      <div className='h-2/5 p-6'>
        <CaptainDetails />
      </div>
      <div ref={ridePopupPanelRef} className='fixed w-full z-10  bottom-0 translate-y-full bg-white px-3 py-6 pt-12'>
        <RidePopUp setRidePopupPanel={setRidePopupPanel} setConfirmRidePopupPanel={setConfirmRidePopupPanel} />
      </div>
      <div ref={confirmRidePopupPanelRef} className='fixed w-full z-10 h-screen  bottom-0 translate-y-full bg-white px-3 py-6 pt-12'>
        <ConfirmRidePopUp setConfirmRidePopupPanel={setConfirmRidePopupPanel} setRidePopupPanel={setRidePopupPanel} />
      </div>
    </div>


  )
}

export default CaptainHome;