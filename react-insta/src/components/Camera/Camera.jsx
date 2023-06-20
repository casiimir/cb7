import { useState, useEffect } from "react";
import "./index.css";

const Camera = () => {
  const [constraints, setConstraints] = useState({
    audio: false,
    video: { width: 396, height: 1080 },
  });

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((mediaStream) => {
        const video = document.querySelector("video");

        video.srcObject = mediaStream;
        video.onloadedmetadata = () => {
          video.play();
        };
      })
      .catch((err) => {
        console.error(`${err.name}: ${err.message}`);
      });
  }, []);

  return <video className="Camera"></video>;
};

export default Camera;
