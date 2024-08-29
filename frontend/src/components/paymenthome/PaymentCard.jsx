import BookSingleCard from "./PaymentSingleCard";

const BooksCard = ({ books }) => {
  return (

    <div>

<div className="hero min-h-screen bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Payment section</h1>
      <p className="py-6">Admin Panal</p>
     
    </div>
  </div>
</div>

<br/>
<br/>
<br/>





    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books.map((item) => (
        <BookSingleCard key={item._id} book={item} />
      ))}
    </div>
    </div>
  );
};

export default BooksCard;
