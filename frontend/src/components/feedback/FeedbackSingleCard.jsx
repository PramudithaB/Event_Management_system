import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { MdAttachEmail } from "react-icons/md";
//import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { BsInfoCircle } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";
import { useState } from "react";
import BookModel from "./FeedbackModel";

const BookSingleCard = ({ book }) => {
  const [showModel, setShowModel] = useState(false);
  return (
    <div className="border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl">
      <h2 className="absolute top-1 right-2 px-4 py-1 bg-red-400 rounded-lg">
        {book.Feedback}
      </h2>
      <h4 className="my-2 text-gray-500">{book._id}</h4>
      <div className="flex justify-start items-center gap-x-2">
        <CgProfile className="text-red-300 text-2xl " />
        <h2 className="my-1">{book.Name}</h2>
      </div>
      <div className="flex justify-start items-center gap-x-2">
        <MdAttachEmail className="text-red-300 text-2xl" />
        <h2 className="my-1">{book.Email}</h2>
      </div>
      <div className="flex justify-start items-center gap-x-2">
        <MdAttachEmail className="text-red-300 text-2xl" />
        <h2 className="my-1">{book.Service}</h2>
      </div>
      <div className="flex justify-start items-center gap-x-2">
        <MdAttachEmail className="text-red-300 text-2xl" />
        <h2 className="my-1">{book.Expected}</h2>
      </div>
      <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
        <BiShow
          className="text-3xl text-blue-800 hover:text-black cursor-pointer"
          onClick={() => setShowModel(true)}
        />
        <Link to={`/feedback/details/${book._id}`}>
          <BsInfoCircle className="text-2xl text-green-800 hover:text-black" />
        </Link>
        <Link to={`/feedback/edit/${book._id}`}>
          <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-black" />
        </Link>
        <Link to={`/feedback/delete/${book._id}`}>
          <MdOutlineDelete className="text-2xl text-red-600 hover:text-black" />
        </Link>
      </div>
      {showModel && (
        <BookModel book={book} onClose={() => setShowModel(false)} />
      )}
    </div>
  );
};

export default BookSingleCard;
