import { motion, AnimatePresence } from "framer-motion"
import FeedBackItem from "./FeedBackItem";

function FeedBackList({ feedback, handleDelete }) {
  if (!feedback || feedback.length === 0) {
    return (
      <p className="text-red-600 font-bold text-center my-7">No Feedback Yet</p>
    );
  }

  return <div className="m-4">
    <AnimatePresence>
      {feedback.map((item) => {
        return (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedBackItem key={item.id} item={item} handleDelete={handleDelete} />
          </motion.div>
        );
      })}
    </AnimatePresence>
  </div>;
}

export default FeedBackList;
