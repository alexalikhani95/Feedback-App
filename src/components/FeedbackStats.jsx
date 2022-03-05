import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackStats = () => {
  const {feedback} = useContext(FeedbackContext)
// Calculate Ratings average
// The reduce() method executes a reducer function for array element.
// The reduce() method returns a single value: the function's accumulated result.
let average = feedback.reduce((acc, cur) => {
  return acc + cur.rating
  // ) 0 here represents the default for accumulator
}, 0) / feedback.length 

  average = average.toFixed(1).replace(/[.,]0$/,'') // Ensuring the average has one decimal place and adding regex to take away .0 if it ends in that

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      {/* // isNAN - if it's not a number (for example if there are no reviews) */}
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

export default FeedbackStats