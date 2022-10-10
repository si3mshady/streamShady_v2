import React from 'react'
import { useLocation, Link } from 'react-router-dom';


export default function Player({videoRef,sound,loop}) {
    const {state:data} = useLocation()
    console.log(data.id)
  return (
    <div>
         <video ref={videoRef} autoPlay  width="50%" loop={loop} muted={sound} >

        <source src={`http://localhost:4000/video/${data.id}/play`} type="video/mp4"/>

        </video>
    </div>
  )
}
