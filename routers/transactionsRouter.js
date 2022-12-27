const express = require("express");
const router = express.Router();

class TransactionsRouter {
  constructor(controller) {
    this.controller = controller;
  }
  routes() {
    router.get("/", this.controller.getAll.bind(this.controller));
    router.post("/", this.controller.insertOne.bind(this.controller));
    router.get("/:transactionid", this.controller.getOne.bind(this.controller));
    // router.put(
    //   "/:transactionid",
    //   this.controller.updateOne.bind(this.controller)
    // );
    return router;
  }
}

module.exports = TransactionsRouter;
