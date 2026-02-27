const cookieParser = require("cookie-parser");
const cors = require("cors");
const express = require("express");
const morgan = require("morgan");
const session = require("express-session");

const app = express();
const PORT = 3000;

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
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
    resave: true,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      sameSite: "lax",
      maxAge: 1800000,
      secure: false,
    },
  }),
);

app.use("/products", require("../src/routes/productsRoutes"));
app.use("/users", require("../src/routes/usersRoutes"));
app.use("/carts", require("../src/routes/cartsRoutes"));
app.use("/orders", require("../src/routes/ordersRoutes"));
app.use("/location", require("../src/routes/locationRoutes"));

app.listen(PORT, () => {
  console.log(`Working at http://localhost:${PORT}\nPORT:${PORT}`);
});
