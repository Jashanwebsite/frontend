import React, { useState , } from "react";
import noteContext from "./notecontext";
import { rule } from "postcss";

// import Addnote from "../Components/Addnote";

const Notestate = (props) => {
  const [loder,setloder] = useState(false)
  const [newclass,setnewclass] = useState(false)
  const host = "https://backen-inotebook.onrender.com"
  const noteinitial = [
  ]
  const [notes, setnotes] = useState(noteinitial)
  // const [newFullnotes,setFullnotes]=useState({title:"",tag:"",description:""})
  // get all notes
  const getnote = async () => {
    setloder(true)
    const response = await fetch(`${host}/notes/fetchnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token")
      },
    });
    const json = await response.json()
    setnotes(json)
    setloder(false)
  }
  // console.log()
  const addnote = async (title, description, tag) => {
     setloder(true)
    const response = await fetch(`${host}/notes/addnotes`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem("token")
      },
      body: JSON.stringify({ "title": title, "description": description, "tag": tag }) // body data type must match "Content-Type" header
    });
    const note = await response.json();
    setnotes(notes.concat(note))
    setloder(false)
  }
  // delete call
  const Deletenote = async (id) => {
    setloder(true)
    const response = await fetch(`${host}/notes/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token")
      },
    });
    const json = await response.json(); // parses JSON response into native JavaScript objects
    // console.log(json)
    let updatenote = notes.filter((note) => { return note._id !== id })
    setnotes(updatenote)
    setloder(false)
  }
  // edit a note
  const editnote = async (enote) => {
    setloder(true)
    // console.log(enote)
      const response = await fetch(`${host}/notes/update/${enote.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token")
        },
        body: JSON.stringify({"title":enote.etitle,"tag":enote.etag,"description": enote.edescription}),
      });
      const json = await response.json()
      // console.log(json)
      let newnote = JSON.parse(JSON.stringify(notes))
      for (let index = 0; index < newnote.length; index++) {
         const element = notes[index];
        if (element._id === enote.id) {
          newnote[index].title = enote.etitle,
          newnote[index].description = enote.edescription,
          newnote[index].tag = enote.etag   
          break;
          
        }
    }setnotes(newnote)
    setloder(false)

  }
  return (
    <noteContext.Provider value={{notes, loder,setnotes, addnote, editnote, Deletenote, getnote,newclass,setnewclass }}>
      {props.children}
    </noteContext.Provider>
  )
}
export default Notestate;