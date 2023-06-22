import "./TopBar.css";

//incons
import { CameraIcon, IGTVIcon, LogoIcon, MessangerIcon } from "../../icons";

const TopBar = ({ setSection, setCamera }) => {
  const onHandleClick = (sectionName) => {
    if (sectionName !== "camera") {
      setSection(sectionName);
      setCamera(true);
    }
    setSection(sectionName);
  };

  return (
    <div className="TopBar">
      <div className="TopBar__Camera" onClick={() => onHandleClick("camera")}>
        <CameraIcon />
      </div>
      <div className="TopBar__Logo" onClick={() => onHandleClick("home")}>
        <LogoIcon />
      </div>

      <div className="TopBar__Actions">
        <div
          className="TopBar__Actions--tv"
          onClick={() => onHandleClick("tv")}
        >
          <IGTVIcon />
        </div>
        <div
          className="TopBar__Actions--msg"
          onClick={() => onHandleClick("messages")}
        >
          <MessangerIcon />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
