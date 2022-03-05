import Card from "./shared/Card";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackItem = ({ item }) => {
  const {deleteFeedback} = useContext(FeedbackContext)

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => deleteFeedback(item.id)}>
        <FaTimes color='purple'/>
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
};

FeedbackItem.ropTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
