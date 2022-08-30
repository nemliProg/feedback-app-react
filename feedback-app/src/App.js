import { useState } from "react";
import Header from "./components/Header";
import FeedBackStats from "./components/FeedBackStats";
import FeedBackData from "./data/FeedBackData";
import FeedBackList from "./components/FeedBackList";
import FeedBackForm from "./components/FeedBackForm";

function App() {
  const [feedback, setFeedback] = useState(FeedBackData);

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback( feedback.filter((item)=>{
        return item.id !== id
      }))
    }
  };

  return (
    <>
      <Header />
      <main className="container">
        <FeedBackForm />
        <FeedBackStats feedback={feedback} />
        <FeedBackList feedback={feedback} handleDelete={deleteFeedback} />
      </main>
    </>
  );
}

export default App;
