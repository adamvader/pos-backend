const cors = require("cors");
const express = require("express");
require("dotenv").config();

// importing Routers
const OrdersRouter = require("./routers/ordersRouter");
const ProductsRouter = require("./routers/productsRouter");
const TransactionsRouter = require("./routers/transactionsRouter");

// importing Controllers
const OrdersController = require("./controllers/ordersController");
const ProductsController = require("./controllers/productsController");
const TransactionsController = require("./controllers/transactionsController");

//import DB
const db = require("./db/models/index");
const { order, product, transaction } = db;

// initializing Controllers
const ordersController = new OrdersController(order);
const productsController = new ProductsController(product);
const transactionsController = new TransactionsController(transaction);

// initializing Routers
const ordersRouter = new OrdersRouter(ordersController).routes();
const productsRouter = new ProductsRouter(productsController).routes();
const transactionsRouter = new TransactionsRouter(
  transactionsController
).routes();

const PORT = process.env.PORT;
const app = express();

//enable CORS access to this server
app.use(cors());

//enable reading JSON request bodies
app.use(express.json());

//enable and use router
app.use("/orders", ordersRouter);
app.use("/products", productsRouter);
app.use("/transactions", transactionsRouter);

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
