import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";

const BookModel = ({ book, onClose }) => {
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
          {book.b_Code}
        </h2>
        <h4 className="my-2 text-gray-500">{book.b_Code}</h4>
        <div className="flex justify-start items-center gap-x-2">
          <PiBookOpenTextLight className="text-red-300 text-2xl " />
          <h2 className="my-1">{book.destination}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <PiBookOpenTextLight className="text-red-300 text-2xl " />
          <h2 className="my-1">{book.d_time}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <BiUserCircle className="text-red-300 text-2xl" />
          <h2 className="my-1">{book.a_time}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <PiBookOpenTextLight className="text-red-300 text-2xl " />
          <h2 className="my-1">{book.a_seat}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <BiUserCircle className="text-red-300 text-2xl" />
          <h2 className="my-1">{book.price}</h2>
        </div>
        <p className="mt-4">Mega - Event</p>
        <p className="mt-2">
          This is for your convenience
        </p>
      </div>
    </div>
  );
};

export default BookModel;
