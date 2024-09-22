import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import requestIp from "request-ip"
const app = express();

// CORS configuration
app.use(cors({
    origin: process.env.CORS_ORIGIN, // Ensure this is correctly set in your environment
    credentials: true
}));

// Middleware
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());
app.use(express.static("public"));

// Routes
import userRouter from "./routes/user.routes.js";
import messageRouter from "./routes/message.routes.js";

app.get("/", (req, res) => {
    return res.send("<h1>Server started successfully</h1>");
});

app.use("/api/v1/users", userRouter);
app.use("/api/v1/message", messageRouter);

// Logging middleware (for debugging)
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
app.use(requestIp.mw());

export { app };
