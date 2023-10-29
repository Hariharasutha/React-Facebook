import React, { useEffect, useState } from "react";
import Menuu from "./reusable/Menuu";
import StatusList from "./reusable/StatusList";
import CreatePost from "./reusable/CreatePost";
import Post from "./reusable/Post";
import { getDocs, collection } from "firebase/firestore";
import db from "../firebase";
function Content() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const querysnapshot = await getDocs(collection(db, "posts"));
    let temp = [];
    querysnapshot.forEach((doc) => {
      temp.push({ id: doc.id, ...doc.data() });
    });

    temp = temp.sort(function (x, y) {
      return y.timestamp - x.timestamp;
    });

    setPosts(temp);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="d-flex pt-4 ms-3">
      <Menuu />
      <div className="p-20">
        <StatusList />
        <CreatePost fetchPosts={fetchPosts} />
        {posts.map((post) => ( 
        <Post {...post} />
        ))}
       
      </div>
    </div>
  );
}

export default Content;
