const express = require("express");
const dotenv = require("dotenv").config();
const db = require("./configs/db");
const userRouter = require("./routes/userRouter");

db();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});