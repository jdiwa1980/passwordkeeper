const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes")
require("dotenv").config();

const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(cors({
    origin: [
        
        "https://passwordkeeper-mu.vercel.app"
    ],
    credentials: true
}));
app.use(express.json());

app.use("/api/records", require("./routes/recordRoutes"));
app.use("/api/auth", authRoutes)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});