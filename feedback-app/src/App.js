import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";
import FeedBackStats from "./components/FeedBackStats";
import FeedBackData from "./data/FeedBackData";
import FeedBackList from "./components/FeedBackList";
import FeedBackForm from "./components/FeedBackForm";

function App() {
  const [feedback, setFeedback] = useState(FeedBackData);

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(
        feedback.filter((item) => {
          return item.id !== id;
        })
      );
    }
  };
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback,...feedback]);

  };

  return (
    <>
      <Header />
      <main className="container mx-auto">
        <FeedBackForm handleAdd={addFeedback} />
        <FeedBackStats feedback={feedback} />
        <FeedBackList feedback={feedback} handleDelete={deleteFeedback} />
      </main>
    </>
  );
}
export default App;
