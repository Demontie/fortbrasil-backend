import Sequelize, { Model } from 'sequelize';

class Shop extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        description: Sequelize.STRING,
        lat: Sequelize.STRING,
        long: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Shop;
