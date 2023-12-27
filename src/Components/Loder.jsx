import React, { useContext } from 'react'
import noteContext from "../Context/notecontext";
import "./Loder.css"
function Loder() {
    const context = useContext(noteContext)
    const {loder} = context;
  return (
    <>
    <div className='lodercontainer'>
         <div className="loader"></div>
    </div>
    </>
  )
}

export default Loder
