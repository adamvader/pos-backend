const BaseController = require("./baseController");

class ProductsController extends BaseController {
  constructor(model) {
    super(model);
  }

  /** if a method in this extended class AND the base class has the same name, the one in the extended class will run over the base method */

  async getOne(req, res) {
    try {
      const product = await this.model.findOne({
        where: {
          name: req.query.name,
        },
      });
      return res.json(product);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async updateOne(req, res) {
    const { productId } = req.body;
    try {
      const updateProduct = await this.model.update(req.body, {
        where: {
          id: productId,
        },
      });

      return res.json(updateProduct);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = ProductsController;
