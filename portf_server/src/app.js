//utility imports
import express from 'express';
import { createServer } from 'http';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import {APILimiter} from "#services/authService.js";
import authRouter from "#routers/authAPI.js";
import mainRouter from "#routers/mainAPI.js";

export const app = express();
export const server = createServer(app);

//shared cors options between express and socket.io
const corsOptions = {
    origin: ["http://localhost:5173", "http://localhost:5174", "http://localhost:5175"], // allow Vite dev servers
    credentials: true //allows cookies to be sent within CORS requests
}

// middleware setup --> all request-responses pass here before
app.use(cors(corsOptions)); //allow cross-origin request, mainly for localhost testing
app.use(cookieParser()) //parse cookies from requests-response
app.use(express.json()); //parse JSON from requests-response

//app.use('/api/auth', APILimiter, authRouter);
app.use('/api/main', APILimiter, mainRouter);

app.get('/', (req, res) => {
    res.json({
        message : "Portfolio server is running and responsive!",
    });
});