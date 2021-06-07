import "./styles.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
export default function App() {
  const [res, setRes] = useState("");
  const [text, setText] = useState("");
  const [msg, setMsg] = useState("");
  const [visible, setVisible] = useState(false);

  const getPosts = async () => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${text}`
    );
    setRes(data.title);
    setMsg(`Data received for id:${data.id}`);
    setVisible(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, 2500);
  }, [res]);

  return (
    <div className="App">
      {visible ? <div>{msg}</div> : <></>}
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button onClick={getPosts}>Click to get posts</button>
      <div>{res}</div>
    </div>
  );
}
