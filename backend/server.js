const express = require("express");
const cors = require("cors");
const http = require("http");

const { initializeSocket, getIO } = require("./socket");

const app = express();

app.use(cors());
app.use(express.json());

const server = http.createServer(app);

initializeSocket(server);

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Zynxis Week 7 Backend is running"
    });
});

app.get("/api/test-notification", (req, res) => {
    const io = getIO();

    io.emit("notification", {
        title: "Test Notification",
        message: "Real-time notification is working!",
        timestamp: new Date()
    });

    res.json({
        success: true,
        message: "Notification sent successfully"
    });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Zynxis Week 7 server running on port ${PORT}`);
});