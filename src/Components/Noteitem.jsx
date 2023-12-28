import React from "react";
import { useContext , useState,useEffect} from 'react'
import noteContext from "../Context/Notecontext";
import "./noteitem.css"
// import Fullnote from "./Fullnote";
const Noteitem = (props) => {
  const context = useContext(noteContext);
  let { Deletenote, fullnotes,newclass,setnewclass} = context
   const { note1, updatenote,key } = props;
   const handel=()=>{
    setnewclass(true)
    // console.log()
    // console.log(newclass)
  }
  return (
    <div  key={key}  >
      <div onClick={()=>{updatenote(note1)}}  className=" card">
        <div className="content">
          <div className="back">
            <div className="back-content">
              <strong className="">{ newclass?note1.title : note1.title.slice(0,5)}..</strong>
            </div>
          </div>
          <div className="front">

            <div className="img">
              <div className="circle">
              </div>
              <div className="circle" id="right">
              </div>
              <div className="circle" id="bottom">
              </div>
            </div>

            <div className="front-content">
              <small className="badge">{ newclass ? note1.tag : note1.tag.slice(0,5)}..</small>
              <div className="description">
                <div className="title">
                  <p className="title">
                    <strong>{ newclass?note1.description : note1.description.slice(0,5)}..</strong>
                  </p>  
                   <i onClick={handel} className=" fa-solid fa-pen-to-square hover:opacity-70 ml-9 " ></i>  
                  <i  onClick={() => { Deletenote(note1._id) }}  className="fa-solid fa-trash-can select-non hover:opacity-50" ></i>
                       
                </div>
                <p className="card-footer">
                {note1.date.slice(0,10)} &nbsp; | &nbsp; 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
export default Noteitem;
