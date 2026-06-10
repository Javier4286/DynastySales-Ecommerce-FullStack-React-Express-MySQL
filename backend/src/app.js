require("dotenv").config();

const cookieParser = require("cookie-parser");
const cors = require("cors");
const express = require("express");
const morgan = require("morgan");
const session = require("express-session");

const app = express();
const PORT = 3000;

const allowedOrigins = [
  "http://localhost:5173",
  "https://dynasty-sales-ecommerce-full-stack.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);

      if (process.env.NODE_ENV !== "production") {
        return callback(null, true);
      }

      if (allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },

    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  }),
);
app.use(cookieParser());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));

app.use(
  session({
    secret: "mySecret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      maxAge: 24 * 60 * 60 * 1000,
      secure: process.env.NODE_ENV === "production",
    },
  }),
);

app.use("/products", require("../src/routes/productsRoutes"));
app.use("/users", require("../src/routes/usersRoutes"));
app.use("/carts", require("../src/routes/cartsRoutes"));
app.use("/orders", require("../src/routes/ordersRoutes"));
app.use("/location", require("../src/routes/locationRoutes"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
