import { useState, useEffect } from "react";

import TopBar from "./components/TopBar";
import Stories from "./components/Stories";
import Posts from "./components/Posts";
import Camera from "./components/Camera/Camera";

import { storiesData } from "./mocks/stories";
import { userData } from "./mocks/user";

import "./App.css";
import Messages from "./components/Messages/Messages";

function App() {
  const [section, setSection] = useState("home");

  const [stories, setStories] = useState(storiesData);
  const [user, setUser] = useState(userData);
  const [posts, setPosts] = useState([]);
  const [isDarkMode, setDarkMode] = useState(false);

  const [isLoading, setLoading] = useState(false);
  const [camera, setCamera] = useState(false);

  useEffect(() => {
    fetch("https://api.npoint.io/c59d0538fafba6432ffe")
      .then((res) => {
        setLoading(true);

        return res.json();
      })
      .then((data) => setPosts(data))
      .finally(() => setLoading(false));
  }, []);

  const onSectionRender = () => {
    switch (section) {
      case "home":
        return (
          <>
            <Stories user={user} stories={stories} />
            <Posts posts={posts} />
          </>
        );
      case "camera":
        return <Camera camera={camera} setCamera={setCamera} />;
      case "tv":
        return <h1>TVVVVV</h1>;
      case "messages":
        return <Messages />;
    }
  };

  return (
    <div className={`${isDarkMode && "darkMode"}`}>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <TopBar setSection={setSection} setCamera={setCamera} />
          <button onClick={() => setDarkMode((prev) => !prev)}>
            {isDarkMode ? "🌑" : "☀️"}
          </button>
          {onSectionRender()}
        </>
      )}
    </div>
  );
}

export default App;
