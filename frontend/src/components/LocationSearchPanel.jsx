import React from 'react'

const LocationSearchPanel = (props) => {


  // sample array for location

  const locations = [
    "24B, Near Kappor's cafe , Coding school",
    "22B, Near malholtra's cafe , Coding school",
    "21A, Near Singhania's cafe , Coding school",
    "20C, Near Kalesh's cafe , Coding school"
  ]


  return (
    <div>
      {
        locations.map(function (elem, idx) {
          return <div key={idx} onClick={() => {
            props.setVechiclePanel(true)
            props.setPanelOpen(false)
          }} className='flex items-center gap-4 my-2 border-2 p-3 rounded-xl border-gray-50 active:border-black justify-start'>
            <h2 className='bg-[#eee] h-8 w-12 flex items-center justify-center rounded-full'><i className='ri-map-pin-fill'> </i></h2>
            <h4 className='font-medium'>{elem}</h4>
          </div>

        })
      }
    </div>
  )
}

export default LocationSearchPanel
