
function FeedBackStats({ feedback }) {
  const len = feedback.length;
  let avg = feedback.reduce((acc,curr)=>{
    return acc + curr.rating
  },0) / len

  avg = avg.toFixed(1).replace(/[.,]0$/, '')

  return (
      <div className="flex mt-4 mx-8 justify-between items-center font-bold text-white">
        <h4>{len} { (len === 0 || len === 1) ? `Review` : `Reviews` }</h4>
        <h4>Average : { isNaN(avg) ? 0 : avg }</h4>
      </div>
  )
}

export default FeedBackStats