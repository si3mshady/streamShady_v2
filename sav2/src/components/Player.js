import React from 'react'
import { useLocation, Link } from 'react-router-dom';


export default function Player({videoRef,sound,loop}) {
    const {state:data} = useLocation()
    console.log(data.id)
    // const url = "http://localhost:4000"
    const url = "http://54.174.109.85:4000"
  return (
    <div>
         <video ref={videoRef} autoPlay  width="50%" loop={loop} muted={sound} >

        <source src={`${url}/video/${data.id}/play`} type="video/mp4"/>

        </video>
    </div>
  )
}
