const BaseController = require("./baseController");

class TransactionsController extends BaseController {
  constructor(model) {
    super(model);
  }

  /** if a method in this extended class AND the base class has the same name, the one in the extended class will run over the base method */

  async getOne(req, res) {
    try {
      const transaction = await this.model.findOne();
      return res.json(transaction);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // Create new transaction
  async insertOne(req, res) {
    const { totalPrice } = req.body;

    try {
      const newTransaction = await this.model.create({
        totalPrice: totalPrice,
      });

      // Respond with new transaction
      return res.json(newTransaction);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = TransactionsController;
