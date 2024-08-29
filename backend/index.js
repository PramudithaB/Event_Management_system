

import express, { request, response } from "express";
import mongoose from "mongoose";
import { PORT, mongoDBURL } from "./config.js";
import { Salary } from "./models/salaryModel.js";
import salaryRoute from './routes/salaryRoute.js'
import feedbackRoute from "./routes/feedbackRoute.js";
import usersRoute from "./routes/usersRoute.js";
import registeRoute from "./routes/registerRoute.js";
import loginRoute from "./routes/loginRoute.js";
import bookRoute from "./routes/bookRoute.js";
import transportRoute from "./routes/transportRoute.js";
import orderRoute from "./routes/orderRoute.js";
import ticketRoute from './routes/ticketRoute.js';

import paymentRoute from "./routes/paymentRoute.js";
import agendaRoutes from "./routes/agendaRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";
import contributersRoutes from "./routes/contributersRoutes.js";



import cors from 'cors';


const app = express();

app.use(express.json());


app.use(cors());


app.get("/", (request, response) => {

    console.log(request);
    return response.status(234).send(`Welcome to mern stack tutorial`);
});

app.use('/salary',salaryRoute);
app.use("/feedback", feedbackRoute);
app.use("/users", usersRoute);
app.use("/register", registeRoute);
app.use("/login", loginRoute);
app.use("/books", bookRoute);
app.use("/transport", transportRoute);
app.use('/order', orderRoute);
app.use('/ticket', ticketRoute);
app.use("/payment", paymentRoute);
app.use("/api/ajendas", agendaRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/contributors", contributersRoutes);




       
mongoose.
connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Error connecting to database:', error);
    });



