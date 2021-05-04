import axios from "axios";
import { useEffect, useState } from "react";

export function Feedback() {
  const [inputName, setInputName] = useState("");
  const [userFeedback, setInputFeedback] = useState("");
  const [response, setResponse] = useState("");

  useEffect(() => {
    console.log(response);
  }, [response]);

  function sendFeedback() {
    axios
      .post("https://e-commerce.sandeepmehta215.repl.co/feedback", {
        name: inputName,
        message: userFeedback
      })
      .then((response) => setResponse(response.data));
  }

  return (
    <div className="feedbackPage">
      <h2> Feedback</h2>
      <label>Name : </label>
      <input
        type="text"
        className="feedbackInputName"
        onChange={(e) => setInputName(e.target.value)}
      />
      <br />
      <br />
      <label>Message : </label>
      <textarea
        type="text"
        className="feedbackInputMessage"
        onChange={(e) => setInputFeedback(e.target.value)}
      />
      <br />

      <button
        className="btn btn-primary feedback-button"
        onClick={() => {
          sendFeedback();
        }}
      >
        Submit
      </button>
      <br />
      {response?.success === true && (
        <span className="successFullFeedback">
          Feedback sent successfully{" "}
          <span role="img" aria-labelledby="emoji">
            ✅
          </span>
        </span>
      )}
      {response?.success === false && (
        <span className="failedFeedback">
          Feedback not sent
          <span role="img" aria-labelledby="emoji">
            ❌
          </span>
        </span>
      )}
    </div>
  );
}
