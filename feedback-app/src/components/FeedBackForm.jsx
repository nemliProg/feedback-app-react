import { useState } from "react";

function FeedBackForm() {

const [review, setReview] = useState('ded');

const handleTextChange = (e) => {
  setReview(e.target.value)
}


  return (
    <div className="bg-white p-4 m-4 rounded-xxl overflow-hidden">
      <form>
        <h1 className="font-bold text-center m-3 text-xl">
          How would be rate your service with us?
        </h1>
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
            className="text-white absolute right-2.5 bottom-1.5 top-1.5 bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-[#ff6a95]-300 font-medium rounded-lg text-md px-6 py-2 "
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default FeedBackForm;
