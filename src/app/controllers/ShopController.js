import * as Yup from 'yup';

import Shop from '../models/Shop';

class ShopController {
  async index(req, res) {
    const shop = await Shop.findAll();
    return res.json(shop);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.String().required(),
      description: Yup.String(),
      lat: Yup.number(),
      long: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Falha na validação!' });
    }

    const { name } = req.body;

    const existShop = await Shop.findOne({
      where: { name },
    });

    if (existShop) {
      return res.status(400).json({ error: 'Estabelecimento ja cadastrado.' });
    }

    const { id, description, lat, long } = await Shop.create(req.body);

    return res.json({ id, name, description, lat, long });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.String().required(),
      description: Yup.String(),
      lat: Yup.number(),
      long: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Falha na validação!' });
    }
    const { name } = req.body;
    const { id } = req.params;

    const shop = await Shop.findByPk(id);

    if (name && shop.name !== name) {
      const existShop = await Shop.findOne({
        where: { name },
      });
      if (existShop) {
        return res
          .status(400)
          .json({ error: 'Estabelecimento ja cadastrado.' });
      }
    }

    const { description, lat, long } = await Shop.update(req.body);

    return res.json({ id, name, description, lat, long });
  }

  async delete(req, res) {
    const { id } = req.params;
    const shop = await Shop.findByPk(id);
    await shop.destroy();
    return res.json(shop);
  }
}

export default new ShopController();
