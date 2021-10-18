require("dotenv").config();
const express = require('express');
const app =  express();
const userRouter = require("./api/users/user.router");

app.use(express.json());

app.use("/api/users", userRouter);
app.listen(process.env.PORT, () => {
  console.log("Server up and running on port :", process.env.PORT);
})