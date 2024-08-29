import React from "react";
import { Routes, Route } from "react-router-dom";
import SalaryHome from "./pages/SalaryHome";
import CreateSalaryRecoard from "./pages/CreateSalaryRecoard";
import ShowSalaryRecoards from "./pages/ShowSalaryRecoards";
import EditSalaryRecoard from "./pages/EditSalaryRecoard";
import DeleteSalaryRecoard from "./pages/DeleteSalaryRecoard";
import ShowSalary from "./pages/ShowSalary";
import Navbar from "./components/Navbar";

import FeedbackAdmin from "./pages/FeedbackAdmin";
import Feedback from "./pages/Feedback";
import CreateFeedback from "./pages/CreateFeedback";
import ShowFeedback from "./pages/ShowFeedback";
import EditFeedback from "./pages/EditFeedback";
import DeleteFeedback from "./pages/DeleteFeedback";

import Users from "./pages/Users";
import CreateUser from "./pages/CreateUsers";
import ShowUser from "./pages/ShowUser";
import EditUser from "./pages/EditUser";
import DeleteUser from "./pages/DeleteUser";
import LogIn from "./components/users/LogIn";
import SignUp from "./components/users/SignUp";
import DashBoard from "./pages/DashBoard";
//import UserProfile from "./components/User/UserProfile";
import UserProfile from "./pages/UserProfile";
import UpdateUserProfile from "./pages/UpdateUserProfile";

import ShowBookAdmin from "./pages/ShowBookAdmin";
import Home from "./pages/Home";
import CreateBook from "./pages/CreateBooks";
import ShowBook from "./pages/ShowBook";
import EditBook from "./pages/EditBook";
import DeleteBook from "./pages/DeleteBook";

import TransportAdmin from "./pages/TransportAdmin";
import Transport from "./pages/Transport";
import CreateTransport from "./pages/CreateTransport";
import ShowTransport from "./pages/ShowTransport";
import EditTransport from "./pages/EditTransport";
import DeleteTransport from "./pages/DeleteTransport";
import Bookseat from "./pages/Bookseat";
//import SeatSelction from "./SeatSelection/SeatSelction";

import OrderHome from "./pages/OrderHome";
import CreateItem from "./pages/CreateItem";
import ShowItem from "./pages/ShowItem";
import EditItem from "./pages/EditItem";
import DeleteItem from "./pages/DeleteItem";
import UserView from "./pages/UserView";
import Cart from "./pages/Cart";

import TicketAdmin from "./pages/TicketAdmin";
import Ticket from "./pages/Ticket";
import CreateTicket from "./pages/CreateTicket";
import ShowTicket from "./pages/ShowTicket";
import EditTicket from "./pages/EditTicket";
import DeleteTicket from "./pages/DeleteTicket";

import PaymentHome from "./pages/PaymentHome";
import CreatePayment from "./pages/CreatePayment";
import ShowPayment from "./pages/ShowPayment";
import EditPayment from "./pages/EditPayment";
import DeletePayment from "./pages/DeletePayment";

import Ajendas from "./pages/Ajendas";
import EventView from "./pages/EventView";
import { AddEvent } from "./pages/AddEvent";
import Events from "./pages/Events";
import EditEvent from "./pages/EditEvent";
import EventInfo from "./pages/EventInfo";
import UserShowOrder from "./pages/UserShowOrder";
import UserShowTransport from "./pages/UserShowTransport";
import UserShowBook from "./pages/UserShowBook";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/salary" element={<SalaryHome />} />
        <Route path="/salary/create" element={<CreateSalaryRecoard />} />
        <Route path="/salary/details/:_id" element={<ShowSalaryRecoards />} />
        <Route path="/salary/edit/:_id" element={<EditSalaryRecoard />} />
        <Route path="/salary/delete/:_id" element={<DeleteSalaryRecoard />} />
        <Route path="/salary/details1/:_id" element={<ShowSalary />} />

        <Route path="/feedbackadmin" element={<FeedbackAdmin />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/feedback/create" element={<CreateFeedback />} />
        <Route path="/feedback/details/:id" element={<ShowFeedback />} />
        <Route path="/feedback/edit/:id" element={<EditFeedback />} />
        <Route path="/feedback/delete/:id" element={<DeleteFeedback />} />

        <Route path="/users" element={<Users />} />
        <Route exact path="/dashboard" element={<DashBoard />} />
        <Route exact path="/profile" element={<UserProfile />} />
        <Route exact path="/profile/:id" element={<UpdateUserProfile />} />
        <Route path="/regi" element={<SignUp />} />
        <Route path="/log" element={<LogIn />} />
        <Route path="/users/create" element={<CreateUser />} />
        <Route path="/users/details/:id" element={<ShowUser />} />
        <Route path="/users/edit/:id" element={<EditUser />} />
        <Route path="/users/delete/:id" element={<DeleteUser />} />

        <Route path="/usershowbook" element={<UserShowBook />} />
        <Route path="/bookadmin" element={<ShowBookAdmin />} />
        <Route path="/books" element={<Home />} />
        <Route path="/books/create" element={<CreateBook />} />
        <Route path="/books/details/:id" element={<ShowBook />} />
        <Route path="/books/edit/:id" element={<EditBook />} />
        <Route path="/books/delete/:id" element={<DeleteBook />} />

        <Route path="/usershowtransport" element={<UserShowTransport />} />
        <Route path="/transportadmin" element={<TransportAdmin />} />
        <Route path="/transport" element={<Transport />} />
        <Route path="/transport/create" element={<CreateTransport />} />
        <Route path="/transport/details/:id" element={<ShowTransport />} />
        <Route path="/transport/edit/:id" element={<EditTransport />} />
        <Route path="/transport/delete/:id" element={<DeleteTransport />} />
        <Route path="/bookseat/:id" element={<Bookseat />} />

        <Route path="/usershoworder" element={<UserShowOrder />} />
        <Route path="/order" element={<OrderHome />} />
        <Route path="/order/create" element={<CreateItem />} />
        <Route path="/order/edit/:_id" element={<EditItem />} />
        <Route path="/order/delete/:_id" element={<DeleteItem />} />
        <Route path="/order/details/:_id" element={<ShowItem />} />
        <Route path="/home/userview" element={<UserView />} />
        <Route path="/Cart/:id" element={<Cart />} />

        <Route path="/ticketadmin" element={<TicketAdmin />} />
        <Route path="/ticket" element={<Ticket />} />
        <Route path="/ticket/create" element={<CreateTicket />} />
        <Route path="/ticket/details/:id" element={<ShowTicket />} />
        <Route path="/ticket/edit/:id" element={<EditTicket />} />
        <Route path="/ticket/delete/:id" element={<DeleteTicket />} />

        <Route path="/payment" element={<PaymentHome />} />
        <Route path="/payment/create" element={<CreatePayment />} />
        <Route path="/payment/details/:id" element={<ShowPayment />} />
        <Route path="/payment/edit/:id" element={<EditPayment />} />
        <Route path="/payment/delete/:id" element={<DeletePayment />} />

        <Route path="/ajenda" element={<Ajendas />} />
        <Route path="/addajenda/:eventId" element={<Ajendas />} />
        <Route path="/eventsview" element={<EventView />} />
        <Route path="/addevent" element={<AddEvent />} />
        <Route path="/editevent/:id" element={<EditEvent />} />
        <Route path="/events" element={<Events />} />
        <Route path="/eventsview/:eventId" element={<EventInfo />} />
      </Routes>
    </>
  );
};

export default App;
