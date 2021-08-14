import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm, ValidationError } from "@formspree/react";
import "./contact.scss";

export default function Contact() {
    const history = useHistory
  const [message, setMessage] = useState(false);
  const [state, handleSubmit] = useForm("mgerpoad");

  //   if (state.succeeded) {
  //       return <span>Thanks, I'll reply ASAP :)</span>;
  //   }

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     setMessage(true);
  //   };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img
          src="https://astrogram.s3.us-east-2.amazonaws.com/shake.svg"
          alt="title"
        />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="email" placeholder="Email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <textarea
            id="message"
            name="message"
            placeholder="Message"
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button
            onClick={() => setMessage(true) }
            type="submit"
            disabled={state.submitting}
          >
            Send
          </button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}
