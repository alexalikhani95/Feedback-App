import React, { useState, useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import RatingSelect from "./RatingSelect";
import Button from "./shared/Button";
import Card from "./shared/Card";

const FeedbackForm = () => {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const {addFeedback} = useContext(FeedbackContext)

  const handleTextChange = (e) => {
    if (text === '') { // If not text, set the button to be disabled
      setBtnDisabled(true)
      setMessage(null)
    } else if(text !== '' && text.trim().length <= 10) { // .trim trims away any whitespace
      setMessage('Text must be at least 10 characters')
      setBtnDisabled(true)
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }

    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if(text.trim().length > 10) {
      const newFeedback = {
        text,
        rating
      }

      addFeedback(newFeedback)

      setText('')
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review"
            onChange={handleTextChange}
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>

        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
