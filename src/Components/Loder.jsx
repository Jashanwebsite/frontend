import React, { useContext } from 'react'
import noteContext from "../Context/notecontext";
import "./Loder.css"
function Loder() {
    const context = useContext(noteContext)
    const {loder} = context;
    console.log(loder)
  return (
    <>
    <div className='lodercontainer'>
        <div className="loader"><span></span></div>
        
    </div>
    </>
  )
}

export default Loder
