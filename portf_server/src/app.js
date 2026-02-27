//utility imports
import express from 'express';
import { createServer } from 'http';
import cors from 'cors';

export const app = express();
export const server = createServer(app);

//shared cors options between express and socket.io
const corsOptions = {
    origin: ["http://localhost:5173", "http://localhost:5174", "http://localhost:5175"], // allow Vite dev servers
    credentials: true //allows cookies to be sent within CORS requests
}

// middleware setup --> all request-responses pass here before
app.use(cors(corsOptions)); //allow cross-origin request, mainly for localhost testing
app.use(express.json()); //parse JSON from requests-response

// APIS --> ENDPOINTS MANAGEMENT
app.get('/', (req, res) => {
    res.json({
        message : "Portfolio server is running and responsive!",
    });
});