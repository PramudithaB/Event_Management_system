/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import BooksTable from "../components/Ticket/TicketTable";
import BooksCard from "../components/Ticket/TicketCard";


import backgroundImage from "../assets/TicketAssets/home2.jpg";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("card");

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/ticket")
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  console.log(books.length);
  return (

    <div
      className="p-4"
      style={{
        backgroundImage: ` url(${backgroundImage})`, // Set background image
        backgroundSize: "cover", // Adjust background image size
        backgroundPosition: "center", // Adjust background image position
        minHeight: "100vh", // Ensure the background covers the entire screen
      }}
    >

    
    <div className="p-4">
      <h1 className="mb-5 text-5xl font-bold">Create Ticket</h1>

      <div className="navbar bg-base-100">
        <div className="flex-1">
          <h4 className="mb-5 text-5xl font-bold"> </h4>
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="./public/images/I'm.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              "Event management: Turning visions into realities, we meticulously
              plan, coordinate, and execute every detail of your event, ensuring
              a flawless experience for you and your guests. From initial
              concept to post-event analysis, we're dedicated to making your
              event unforgettable."
            </p>
            <Link to="/ticket/create">
              <button className="btn btn-primary">Create Ticket</button>
            </Link>
          </div>
        </div>
      </div>

      <span className="loading loading-dots loading-xs"></span>
      <span className="loading loading-dots loading-sm"></span>
      <span className="loading loading-dots loading-md"></span>
      <span className="loading loading-dots loading-lg"></span>

      <div className="grid grid-cols-3 gap-3">
        <div className="card w-96 glass">
          <figure>
            <img src="./public/images/vertual.jpg" alt="car!" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Virtual Event</h2>
            <p>"Explore virtual events: Connect globally, learn locally."</p>
            <div className="card-actions justify-end">
              <Link to="/ticket/create">
                <button className="btn btn-primary">Create Ticket</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card w-96 glass">
          <figure>
            <img src="./public/images/semina.jpg" alt="car!" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Seminars</h2>
            <p>
              "Engage in enlightening seminars, all from the comfort of your
              screen."
            </p>
            <div className="card-actions justify-end">
              <Link to="/ticket/create">
                <button className="btn btn-primary">Create Ticket</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card w-96 glass">
          <figure>
            <img src="./public/images/product-launching.jpg" alt="car!" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Product Launch</h2>
            <p>
              "Experience the excitement of new product launches from the
              convenience of your device."
            </p>
            <div className="card-actions justify-end">
              <Link to="/ticket/create">
                <button className="btn btn-primary">Create Ticket</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <span className="loading loading-dots loading-xs"></span>
      <span className="loading loading-dots loading-sm"></span>
      <span className="loading loading-dots loading-md"></span>
      <span className="loading loading-dots loading-lg"></span>

      <div className="grid grid-cols-3 gap-3">
        <div className="card w-96 glass">
          <figure>
            <img src="./public/images/party.jpeg" alt="car!" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Party</h2>
            <p>
              "Join the fun at our virtual parties - wherever you are, it's a
              celebration!"
            </p>
            <div className="card-actions justify-end">
              <Link to="/ticket/create">
                <button className="btn btn-primary">Create Ticket</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card w-96 glass">
          <figure>
            <img src="./public/images/workshop.jpg" alt="car!" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Workshops</h2>
            <p>
              "Get hands-on with virtual workshops: learn, create, and innovate
              from anywhere."
            </p>
            <div className="card-actions justify-end">
              <Link to="/ticket/create">
                <button className="btn btn-primary">Create Ticket</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card w-96 glass">
          <figure>
            <img src="./public/images/festival.avif" alt="car!" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Festival</h2>
            <p>
              "Experience the magic of festivals online: music, art, and
              community, all from your screen."
            </p>
            <div className="card-actions justify-end">
              <Link to="/ticket/create">
                <button className="btn btn-primary">Create Ticket</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <span className="loading loading-dots loading-xs"></span>
      <span className="loading loading-dots loading-sm"></span>
      <span className="loading loading-dots loading-md"></span>
      <span className="loading loading-dots loading-lg"></span>

      <div className="flex justify-center items-center ">
        <div className="avatar-group -space-x-6 rtl:space-x-reverse">
          <div className="avatar">
            <div className="w-12">
              <img src="./public/images/I'm.jpg" />
            </div>
          </div>
          <div className="avatar">
            <div className="w-12">
              <img src="./public/images/person.jpg" />
            </div>
          </div>
          <div className="avatar">
            <div className="w-12">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <div className="avatar placeholder">
            <div className="w-12 bg-neutral text-neutral-content">
              <span>+99</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center ">
        <h2 className="mb-5 text-2xl ">Successfully resolved Tickets</h2>
      </div>

      <div className="flex justify-center items-center ">
        <progress className="progress w-56"></progress>
        <br></br>
      </div>

      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img
            src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
            className="w-full"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
            className="w-full"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
            className="w-full"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
            className="w-full"
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>

      <div className="flex justify-center items-center ">
        <h3 className="mb-5 text-2xl font-bold">
          Here are the countries with upcoming <br></br>events and for more
          details, place a ticket
        </h3>
      </div>
      <div className="flex justify-center items-center ">
        <Link to="/ticket/create">
          <button className="btn btn-primary">Create Ticket</button>
        </Link>
      </div>
      <br></br>
      <div className="flex justify-center items-center ">
        <div className="rating">
          <input
            type="radio"
            name="rating-4"
            className="mask mask-star-2 bg-green-500"
          />
          <input
            type="radio"
            name="rating-4"
            className="mask mask-star-2 bg-green-500"
            checked
          />
          <input
            type="radio"
            name="rating-4"
            className="mask mask-star-2 bg-green-500"
          />
          <input
            type="radio"
            name="rating-4"
            className="mask mask-star-2 bg-green-500"
          />
          <input
            type="radio"
            name="rating-4"
            className="mask mask-star-2 bg-green-500"
          />
        </div>
      </div>

      <div className="flex justify-center items-center ">
        <p>Add feedback to resolve the ticket</p>
      </div>

      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Ticket List</h1>

        <div className="flex justify-center items-center gap-x-4">
          
          <button
            className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg "
            onClick={() => setShowType("card")}
          >
            Card
          </button>
        </div>

        <Link to="/ticket/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>
      <h1 className="mb-5 text-2xl font-bold">
        No of ticket count - {books.length}
      </h1>
      {loading ? (
        <Spinner />
      ) : showType === "table" ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
      <div className="flex justify-center items-center ">
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-figure text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Total Likes</div>
            <div className="stat-value text-primary">250</div>
            <div className="stat-desc">All likes</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Page Views</div>
            <div className="stat-value text-secondary">2K</div>
            <div className="stat-desc">21% more than last month</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <div className="avatar online">
                <div className="w-16 rounded-full">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
            </div>
            <div className="stat-value">96%</div>
            <div className="stat-title">Tasks done</div>
            <div className="stat-desc text-secondary">12 tasks remaining</div>
          </div>
        </div>
      </div>
      <br></br>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <aside>
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg>
          <p>
            MEGA Events Ltd.
            <br />
            Providing reliable event since 1992
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
    </div>
  );
};

export default Home;
