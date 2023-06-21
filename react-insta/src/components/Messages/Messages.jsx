import { useState, useEffect } from "react";
import { GET } from "../../utils/http";

import "./index.css";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [chatName, setChatName] = useState("");

  useEffect(() => {
    GET("https://api.npoint.io/45615d0ddef177eef95b").then((res) =>
      setMessages(res.messageList)
    );
  }, []);

  const onSetChatName = (value) => setChatName(value);

  const onChatRendering = () => {
    switch (chatName) {
      case "":
        return messages?.map((chat, i) => (
          <div
            className="Messages__chat"
            onClick={() => onSetChatName(chat.participants[1].username)}
            key={i}
          >
            <img
              src={chat.participants[1].avatar_url}
              alt={chat.participants[1].username}
            />
            <div className="Messages__chat--text">
              <p>{chat.participants[1].username}</p>
              <p>{chat.messages[chat.messages.length - 1].content}</p>
            </div>
          </div>
        ));
      case "Emily":
        return (
          <div className="singleChat">
            <p onClick={() => onSetChatName("")}>{"<-"}</p>

            {messages[0].messages.map((message) => (
              <p
                className="singleChat__msg"
                style={{
                  alignSelf: message.sender === "John" ? "end" : "start",
                }}
              >
                {message.content}
              </p>
            ))}
          </div>
        );
    }
  };

  return <div className="Messages">{onChatRendering()}</div>;
};

export default Messages;
