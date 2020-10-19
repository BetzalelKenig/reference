const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
// Import Routes
const authRoute = require("./routes/auth");

dotenv.config();

// Connext to DB
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("connected to db")
);

//Route Middlewares
// Body parser
app.use(express.json());
app.use("/api/user", authRoute);

const PORT = 3000;

app.listen(PORT, () => console.log(`Server runinig on port ${PORT}`));
