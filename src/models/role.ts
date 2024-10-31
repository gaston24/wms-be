import { DataTypes, Model, Sequelize } from 'sequelize';

interface RoleAttributes {
  id?: number;
  name: string;
}

export class Role extends Model<RoleAttributes> implements RoleAttributes {
  public id!: number;
  public name!: string;

  static associate(models: any) {
    Role.hasMany(models.User, { foreignKey: 'role_id' });
  }
}

export const initRoleModel = (sequelize: Sequelize): typeof Role => {
  Role.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'roles',
      underscored: true,
    }
  );

  return Role;
};
