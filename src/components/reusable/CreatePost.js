import React, { useState } from "react";
import { CameraFill, EmojiSmile, Images, PersonCircle } from "react-bootstrap-icons";
import {Timestamp, addDoc, collection} from 'firebase/firestore'
import db from "../../firebase";

export default function CreatePost(props) {
  const [user,] = useState({
      name:'hari',
      profilepic:'https://img.freepik.com/premium-vector/h-logo-design-template-creative-h-icon-initials-based-letters-vector_487414-2807.jpg?size=626&ext=jpg&uid=R114558677&ga=GA1.1.302970376.1693332036&semt=ais',

  })
  const[message,setMessage] = useState("")
  const[image,setImage] = useState("")

      const handleSubmit = () => {
        addDoc(collection(db,"posts"),{
          message,
          username:user.name,
          image,
          timestamp:Timestamp.fromDate(new Date()),
          profilepic:user.profilepic,
        }).then(() => {
          props.fetchPosts()
          setImage("")
          setMessage("")
        })
      }

  return (
    <div className="create-post background-white br-10 my-4">
      <div className="d-flex align-items-center mx-3">
        <PersonCircle className="fs-1 pe-2" />
        <input
          type="search"
          placeholder="What's on your mind?"
          className="search-box"
          style={{ flex: 1 }}
          value={message}
          onChange={(e)=> setMessage(e.target.value)}
        />
        <input 
          type="search" 
          placeholder="Img Url" 
          className="search-box"
          value={image}
          onChange={(e)=> setImage(e.target.value)} 
        />
        <button className="btn btn-success br-20 ms-3" onClick={handleSubmit}>
            POST
        </button>
      </div>
      <div className="d-flex pt-5 pb-1 justify-content-evenly">
        <div className="d-flex post-icon align-items-center">
            <CameraFill color="red"/>Live video
        </div>
        <div className="d-flex post-icon align-items-center">
            <Images color="green"/>Photo/video
        </div>
        <div className="d-flex post-icon align-items-center">
            <EmojiSmile className="text-warning"/>Feeling Activity
        </div>
      </div>
    </div>
  );
}
