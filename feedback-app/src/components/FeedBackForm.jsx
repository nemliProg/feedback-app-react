import { useState } from "react";
import RatingSelect from "./RatingSelect";

function FeedBackForm() {

const [review, setReview] = useState('');
const [isdisabled, setisdIsabled] = useState(true);
const [message, setMessage] = useState('');
const [rating, setRating] = useState(10);

const handleTextChange = (e) => {
  if (review.length === 0) {
    setMessage(null)
    setisdIsabled(true)
  } else if(review !== '' && review.trim().length <= 10) {
    setMessage("Review must be at least 10 characters.")
    setisdIsabled(true)
  }else {
    setMessage(null)
    setisdIsabled(false)
  }
  setReview(e.target.value)

}

const btnClasses = 'text-white absolute right-2.5 bottom-1.5 top-1.5 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-[#ff6a95]-300 font-medium rounded-lg text-md px-6 py-2';

  return (
    <div className="bg-white p-4 m-4 rounded-xl overflow-hidden">
      <form>
        <h2 className="font-bold text-center m-3 text-xl">
          How would be rate your service with us?
        </h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"></div>
          <input
            type="text"
            onChange={handleTextChange}
            value={review}
            className="block p-2 pl-6 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-red-500 focus:border-blue-500"
            placeholder="Write a review"
            required
          />
          <button
            type="submit"
            className={ isdisabled ? `bg-slate-500 ${btnClasses}` : `bg-blue-700 ${btnClasses}` }
            disabled={isdisabled}

          >
            Add
          </button>

        </div>
        <div className="text-center text-red-300 font-bold">
          { message }
        </div>
      </form>
    </div>
  );
}

export default FeedBackForm;
