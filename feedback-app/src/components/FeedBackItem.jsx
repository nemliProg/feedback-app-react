import { FaTimes } from "react-icons/fa";
import Card from "./shared/Card";

function FeedBackItem({ item, handleDelete }) {
  return (
    <Card>
      <div className="absolute text-center w-[40px] h-[40px] rounded-full bg-[#ff6a95] -left-2 -top-3 p-2 font-bold text-white border-[1px]">
        {item.rating}
      </div>
      <button onClick={() => { handleDelete(item.id) }} className="absolute text-center top-2 right-2  font-bold">
        <FaTimes className="text-purple-900" />
      </button>
      <div className="">{item.text}</div>
    </Card>
  );
}

export default FeedBackItem;
