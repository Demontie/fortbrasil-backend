import Sequelize from 'sequelize';

import User from '../app/models/User';
import Shop from '../app/models/Shop';

import databaseConfig from '../config/database';

const models = [User, Shop];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models.map((model) => model.init(this.connection));
  }
}

export default new Database();
