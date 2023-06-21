import { useState, useEffect } from "react";
import { filtersData } from "../../mocks/filters";
import "./index.css";

const Camera = () => {
  const [constraints, setConstraints] = useState({
    audio: false,
    video: { width: 396, height: 1080 },
  });

  const [filterState, setFilterState] = useState("");

  const [rangeInput, setRangeInput] = useState(0);

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

  const onSetFilterState = (state) => setFilterState(state);

  const onRangeInputChange = (e) => setRangeInput(e.target.value);

  return (
    <>
      <video
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
