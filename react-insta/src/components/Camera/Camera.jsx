import { useState, useEffect, useRef } from "react";
import { filtersData } from "../../mocks/filters";
import "./index.css";

const Camera = ({ camera, setCamera }) => {
  const [constraints, setConstraints] = useState({
    audio: false,
    video: { width: 396, height: 1080 },
  });

  const [filterState, setFilterState] = useState("");

  const [rangeInput, setRangeInput] = useState(0);

  const videoRef = useRef(null);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((mediaStream) => {
        videoRef.current.srcObject = mediaStream;
        videoRef.current.onloadedmetadata = () => {
          videoRef.current.play();
        };
      })
      .catch((err) => {
        console.error(`${err.name}: ${err.message}`);
      })
      .finally(onStopVideo);
  }, []);

  const onSetFilterState = (state) => setFilterState(state);

  const onRangeInputChange = (e) => setRangeInput(e.target.value);

  const onStopVideo = () => {
    if (camera) {
      console.log("TADA!");
      videoRef.current.pause();
      videoRef.current.currentTime = 0;

      const stream = videoRef.current.srcObject;
      const tracks = stream.getTracks();

      tracks.forEach((track) => track.stop());

      setTimeout(() => {
        videoRef.current.srcObject = null;
      }, 1);
    }
  };

  return (
    <>
      {/* <button onClick={onStopVideo}>🚫</button> */}
      <video
        ref={videoRef}
        className={`Camera ${filterState}`}
        // style={{ filter: `blur(${rangeInput}px)` }}
      ></video>
      {/* <input
        type="range"
        name=""
        id=""
        value={rangeInput}
        onChange={onRangeInputChange}
      /> */}
      <div className="Camera__filters">
        <ul>
          {filtersData?.map((filter) => (
            <li
              className={filter.name}
              onClick={() => onSetFilterState(filter.name)}
              key={filter.id}
            >
              <img src="https://picsum.photos/100" alt="" />
              <p>{filter.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Camera;
