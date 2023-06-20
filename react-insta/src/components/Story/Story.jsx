import "./Story.css";

const Story = ({ story }) => {
  return (
    <div className="Story">
      {story?.isLive && <div className="Story__Live">{"LIVE"}</div>}
      <div className="Story__Image">
        <img src={story?.userImage} alt={story?.username} />
      </div>
      <p className="Story__Username">
        {story?.isUser ? "Your Story" : story.username}
      </p>
    </div>
  );
};

export default Story;
