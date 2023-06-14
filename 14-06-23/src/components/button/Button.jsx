import "./index.css";

// const Button = ({ textContent, passive = false }) => {
//   if (passive)
//     return <button className="Button passiveBtn">{textContent}</button>;
//   return <button className="Button">{textContent}</button>;
// };

const Button = ({ textContent, isPassive = false }) => {
  return (
    <button className={`Button ${isPassive ? "passiveBtn" : "activeBtn"}`}>
      {textContent}
    </button>
  );
};

export default Button;
