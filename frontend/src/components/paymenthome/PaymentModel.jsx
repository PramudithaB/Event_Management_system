import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";

const BookModel = ({ book, onClose }) => {
  const [authorEmail, setAuthorEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleChatOpen = () => {
    if (!authorEmail) {
      setEmailError("Please enter the author's email address.");
    } else if (!isValidEmail(authorEmail)) {
      setEmailError("Please enter a valid email address.");
    } else {
      window.open(`mailto:${authorEmail}?subject=Regarding ${book.title}`);
    }
  };

  const handleSuccess = () => {
    if (!authorEmail) {
      setEmailError("Please enter the author's email address.");
    } else if (!isValidEmail(authorEmail)) {
      setEmailError("Please enter a valid email address.");
    } else {
      const message = "Payment is success";
      window.open(`mailto:${authorEmail}?subject=Payment Success&body=${message}`);
    }
  };

  const handleUnsuccess = () => {
    if (!authorEmail) {
      setEmailError("Please enter the author's email address.");
    } else if (!isValidEmail(authorEmail)) {
      setEmailError("Please enter a valid email address.");
    } else {
      const message = "Payment is unsuccessful";
      window.open(`mailto:${authorEmail}?subject=Payment Unsuccessful&body=${message}`);
    }
  };

  const isValidEmail = (email) => {
    // Email regex pattern for basic validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleEmailChange = (e) => {
    setAuthorEmail(e.target.value);
    setEmailError(""); // Clear previous error when user starts typing
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
        
          Order Item Name: <h2 className="my-1">{book.title} </h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <BiUserCircle className="text-red-300 text-2xl" />
          Email:<h2 className="my-1">{book.author}</h2>
        </div>
        <p className="mt-4">Please enter the client email to open a chat:</p>
        <div className="flex flex-col gap-y-2">
          <input
            type="email"
            placeholder="client Email"
            value={authorEmail}
            onChange={handleEmailChange}
            className={`border rounded-md px-2 py-1 ${
              emailError ? "border-red-500" : "border-gray-300"
            }`}
            required
          />
          {emailError && (
            <p className="text-red-500 text-sm">{emailError}</p>
          )}
         
          <button
            onClick={handleSuccess}
            className="bg-green-500 text-white px-4 py-2 rounded-md"
          >
            Success
          </button>
          <button
            onClick={handleUnsuccess}
            className="bg-red-500 text-white px-4 py-2 rounded-md"
          >
            Unsuccess
          </button>
        </div>
        <br/>
      </div>
    </div>
  );
};

export default BookModel;
