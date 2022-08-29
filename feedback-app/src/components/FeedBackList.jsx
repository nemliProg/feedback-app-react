import FeedBackItem from "./FeedBackItem"

function FeedBackList({ feedback, handleDelete}) {
  if (!feedback || feedback.length === 0) {
    return <p className="text-red-600 font-bold text-center my-7">No Feedback Yet</p>
  }


  return <div className="m-4">
      { feedback.map((item) => {
        return <FeedBackItem key={item.id} item={item} handleDelete={handleDelete} />
      }) }
      </div>
  
}

export default FeedBackList