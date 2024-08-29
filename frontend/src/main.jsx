import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { AjendacontextProvider } from "./context/Ajendacontext.jsx";
import { EventcontextProvider } from "./context/Eventcontext.jsx";
import "react-big-calendar/lib/css/react-big-calendar.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <SnackbarProvider>
      <EventcontextProvider>
        <AjendacontextProvider>
          <App />
        </AjendacontextProvider>
      </EventcontextProvider>
    </SnackbarProvider>
  </BrowserRouter>
);
