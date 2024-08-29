import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";

const BookModel = ({ book, onClose }) => {
  const [rating, setRating] = useState(book.rating);

  const handleStarClick = (newRating) => {
    setRating(newRating);
  };

  // Calculation function for star rating
  const calculateStarRating = (numStars) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          onClick={() => handleStarClick(i)}
          className={`cursor-pointer text-2xl ${i <= numStars ? 'text-yellow-400' : 'text-gray-300'}`}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div
      className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative"
      >
        <AiOutlineClose
          className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
          onClick={onClose}
        />
        <h2 className="w-fit px-4 py-1 bg-red-400 rounded-lg">
          {book.publishYear}
        </h2>
        <h4 className="my-2 text-gray-500">{book._id}</h4>
        <div className="flex justify-start items-center gap-x-2">
          <PiBookOpenTextLight className="text-red-300 text-2xl " />
          <h2 className="my-1">{book.title}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <BiUserCircle className="text-red-300 text-2xl" />
          <h2 className="my-1">{book.author}</h2>
        </div>
        <p className="mt-4">Anything you want to show</p>
        <p className="mt-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, et!
          Eaque labore enim optio saepe error corporis asperiores cumque iusto
          debitis adipisci, velit et eius totam ut odio illo quae.
        </p>
        <div className="flex justify-center items-center gap-x-1 mt-2">
          {calculateStarRating(rating)}
        </div>
        <p className="text-center mt-2">{rating} out of 5 stars</p>
      </div>
    </div>
  );
};

export default BookModel;
