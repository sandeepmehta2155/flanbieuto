import { useEffect, useState } from "react";
import axios from "axios";

export function ChatBot() {
  const [chatBot, setChatBot] = useState("none");
  const [chat, setChat] = useState("");
  const [chatOutput, setChatOutput] = useState("");
  useEffect(() => {
    axios
      .get("https://breaking-bad-quotes.herokuapp.com/v1/quotes/5")
      .then((res) => {
        setChatOutput(res.data[0].quote);
      });
  }, [chat]);

  return (
    <>
      <span
        className="bi bi-chat-dots"
        onClick={() =>
          setChatBot((chatBot) => (chatBot === "none" ? "" : "none"))
        }
      >
        <svg className="chat-bubble" viewBox="0 0 100 100">
          <path
            className="line line1"
            d="M 30.7873,85.113394       30.7873,46.556405 C 30.7873,41.101961
      36.826342,35.342 40.898074,35.342 H 59.113981 C 63.73287,35.342
      69.29995,40.103201 69.29995,46.784744"
          />
          <path
            className="line line2"
            d="M 13.461999,65.039335 H 58.028684 C
        63.483128,65.039335
        69.243089,59.000293 69.243089,54.928561 V 45.605853 C
        69.243089,40.986964 65.02087,35.419884 58.339327,35.419884"
          />
          <circle className="circle circle1" r="1.9" cy="50.7" cx="42.5" />
          <circle className="circle circle2" cx="49.9" cy="50.7" r="1.9" />
          <circle className="circle circle3" r="1.9" cy="50.7" cx="57.3" />
        </svg>
      </span>
      <div
        className="chatBox"
        style={{
          display: chatBot
        }}
      >
        <input
          type="text"
          className="chatBot"
          onKeyDown={(e) =>
            e.key === "Enter" ? setChat(e.target.value) : setChat("")
          }
        />
        <div className="chatOuput">{chatOutput}</div>
        <div className="chatFooter">
          This is just for fun
          <span role="img" aria-labelledby="smiley">
            😄
          </span>
          <div />
          Please don't mind
        </div>
      </div>
    </>
  );
}
