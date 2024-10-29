import fs from 'fs';
import path from 'path';
import { Sequelize, DataTypes } from 'sequelize';
import configJson from '../config/config';


import { User, initUserModel } from './user';
import { Role, initRoleModel } from './role';

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = configJson[env as keyof typeof configJson];

let sequelize: Sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable] as string, config);
} else {
  sequelize = new Sequelize(
    config.database as string,
    config.username as string,
    config.password as string,
    config
  );
}

// Initialize models
const db = {
  sequelize, // connection instance (RAW queries)
  Sequelize,
  User: initUserModel(sequelize),
  Role: initRoleModel(sequelize),
};

// Asociaciones
Object.values(db).forEach((model: any) => {
  if (model.associate) {
    model.associate(db);
  }
});

export default db;
export { User, Role };
