const BaseController = require("./baseController");

class OrdersController extends BaseController {
  constructor(model) {
    super(model);
  }

  /** if a method in this extended class AND the base class has the same name, the one in the extended class will run over the base method */

  async getOne(req, res) {
    try {
      const order = await this.model.findOne();
      return res.json(order);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async insertOne(req, res) {
    const {
      applesQty,
      bananasQty,
      pearsQty,
      orangesQty,
      applesId,
      bananasId,
      pearsId,
      orangesId,
      transactionId,
    } = req.body;

    try {
      const newOrder = await this.model.bulkCreate([
        {
          transactionId: transactionId,
          productId: applesId,
          quantity: applesQty,
        },
        {
          transactionId: transactionId,
          productId: bananasId,
          quantity: bananasQty,
        },
        {
          transactionId: transactionId,
          productId: pearsId,
          quantity: pearsQty,
        },
        {
          transactionId: transactionId,
          productId: orangesId,
          quantity: orangesQty,
        },
      ]);

      // Respond with new transaction
      return res.json(newOrder);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = OrdersController;
