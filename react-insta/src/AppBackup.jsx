import { useState, useEffect } from "react";
import "./App.css";

import { storiesData } from "./mocks/stories";
import { userData } from "./mocks/user";
import { postsData } from "./mocks/posts";

// components
import TopBar from "./components/TopBar";
import Stories from "./components/Stories";
import Posts from "./components/Posts";
import Camera from "./components/Camera/Camera";

function App() {
  const [section, setSection] = useState("home");

  const [stories, setStories] = useState(storiesData);
  const [user, setUser] = useState(userData);
  const [posts, setPosts] = useState(postsData);

  // 1. useEffect Unlimited - Viene scatenato ogni volta che viene montato il componente
  // useEffect(() => {
  //   fetch("https://api.npoint.io/c59d0538fafba6432ffe")
  //     .then((res) => res.json())
  //     .then((data) => setPosts(data));
  // });

  // 2. useEffect Lite - Viene scatenato una sola volta
  useEffect(() => {
    fetch("https://api.npoint.io/c59d0538fafba6432ffe")
      .then((res) => res.json())
      .then((data) => setPosts(data));
    // console.log("Ho invocato lo useEffect!");
  }, []);

  // 3. useEffect Limited - Viene scatenato ogni volta che un dipendente cambia $$$
  // useEffect(() => {
  //   fetch("https://api.npoint.io/c59d0538fafba6432ffe")
  //     .then((res) => res.json())
  //     .then((data) => setPosts(data));

  //   console.log("Ho invocato lo useEffect!");
  // }, [stories]);

  // 4. useEffect Resurrected - Viene scatenata una funzione di clean-up prima che lo useEffect viene ri-lanciato
  // useEffect(() => {
  //   fetch("https://api.npoint.io/c59d0538fafba6432ffe")
  //     .then((res) => res.json())
  //     .then((data) => setPosts(data));

  //   console.log("Ho invocato lo useEffect!");

  //   return () => {
  //     // Clean-up function
  //     console.log("Ho invocato il return dello useEffect!");
  //   };
  // }, [stories]);

  // const onHandleClick1 = () => setStories([]);
  // const onHandleClick2 = () => setPosts([]);

  const onSectionRender = () => {
    switch (section) {
      case "home":
        return (
          <>
            {/* <button onClick={onHandleClick1}>Cliccami! Cliccami! stories</button>
    <button onClick={onHandleClick2}>Cliccami! Cliccami! posts</button> */}
            <Stories user={user} stories={stories} />
            <Posts posts={posts} />
          </>
        );
      case "camera":
        return <Camera />;
      case "tv":
        return <h1>TVVVVV</h1>;
      case "messages":
        return <h1>MESSAGGGGIIIIII</h1>;
    }
  };

  return (
    <>
      <TopBar setSection={setSection} />
      {onSectionRender()}
    </>
  );
}

export default App;
