import React, { useState, useEffect } from 'react';
import BookSingleCard from './BookSingleCard';

const BooksCard = ({ books }) => {
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    setTotalCount(books.length);
  }, [books]);

  const handleSendEmail = () => {
    const recipientEmail = 'pramudithabandara12'; // Replace with the recipient's email address
    const domain = 'gmail.com';
    const subject = encodeURIComponent('Can you upload photo for website');
    const body = encodeURIComponent('Please upload photos for the website.'); // Your default message

    window.location.href = `mailto:${recipientEmail}@${domain}?subject=${subject}&body=${body}`;
  };

  return (
    <div>
      <div className="diff aspect-[16/5]">
        <div className="diff-item-1">
          <div className="bg-primary text-primary-content text-9xl font-black grid place-content-center">SHARING HUB</div>
        </div>
        <div className="diff-item-2">
          <div className="bg-base-200 text-9xl font-black grid place-content-center">  SHARING HUB</div>
        </div>
        <div className="diff-resizer"></div>
      </div>
      <br/>

      <div className='text-center'>
        <p className='text-green uppercase tracking-wide font-medium text-lg'>OUR ALBUMS</p>
        <progress className="progress w-56"></progress>
        <h2 className='text-4x1 md:text-5x1 font-bold my-2 md:leading-sung leading-sung'></h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {books.map((item) => (
          <BookSingleCard key={item._id} book={item} />
        ))}
      </div>

      <br/>
      <br/>
      <p className="text-3xl my-4">Total upload albums: {totalCount}</p>

      <div className="md:w-1/2">
        <div className="text-left md:w-4/5">
          <p className="subtitle">Our Story & Services</p>
          <p className="my-5 text-secondary leading-[30px]">
            "Welcome to Event Memories! Relive past events and share your experiences with us. Your stories enrich our community. Don't forget to upload photos to enhance your memories and inspire others."
          </p>
          <p className="subtitle">Would you like to share yours photos with us?</p>

          <button className="btn btn-success" onClick={handleSendEmail}>Chat with an Admin</button>
        </div>
      </div>

      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
        {/* Footer content */}
      </footer>
    </div>
  );
};

export default BooksCard;
