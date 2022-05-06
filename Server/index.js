//https://docs.google.com/document/d/1cscaVEnZd0D_n_U0Ko60hVwsnJzg2NykIP_-B40w6jo/edit

const express = require("express");
const app = express();
const connectDB = require("./Connection/connection");
const AuthRoutes = require("./Routes/AuthRoutes");
const StudentRoutes = require("./Routes/StudentRoutes");
const SocietyRoutes = require("./Routes/SocietyRoutes");
const cookieParser = require("cookie-parser");
const cors = require("cors");
app.use(express.json());
connectDB();
require("dotenv").config();
app.use(express.urlencoded({ extended: false }));
app.use(
  cookieParser({
    name: "PermiTouch",
    secret: process.env.SECRET,
    credentials: true,
  })
);
app.use(
  cors({
    methods: ["GET,HEAD,PUT,PATCH,POST,DELETE"],
    credentials: true,
  })
);

app.use("/student", StudentRoutes);
app.use("/society", SocietyRoutes);
app.use("/", AuthRoutes);

app.listen(process.env.PORT, async (res, err) => {
  if (err) {
    return console.log(err);
  }
  return console.log(`Server running at port ${process.env.PORT}`);
});
