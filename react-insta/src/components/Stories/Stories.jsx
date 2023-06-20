import { useState } from "react";

import "./Stories.css";

// components
import Story from "../Story";

const Stories = ({ user, stories }) => {
  return (
    <div className="Stories">
      <ul className="Stories__List">
        {/* <li className="Stories__Item">
          <Story story={user} />
        </li> */}
        {stories &&
          stories.map((story) => (
            <li className="Stories__Item" key={story.id}>
              <Story story={story} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Stories;
