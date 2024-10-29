import { DataTypes, Model, Sequelize } from 'sequelize';
import bcrypt from 'bcryptjs';

interface UserAttributes {
  id?: number;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  role_id?: number;
}

export class User extends Model<UserAttributes> implements UserAttributes {
  public id!: number;
  public firstName!: string;
  public lastName!: string;
  public userName!: string;
  public email!: string;
  public password!: string;
  public role_id?: number;

  public async verifyPassword(password: string): Promise<boolean> {
    return await bcrypt.compare(password, this.password);
  }

  static associate(models: any) {
    User.belongsTo(models.Role, { foreignKey: 'role_id' });
  }
}

export const initUserModel = (sequelize: Sequelize): typeof User => {
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'first_name',
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'last_name',
      },
      userName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        field: 'user_name',
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'users',
      underscored: true,
      hooks: {
        beforeCreate: async (user: User) => {
          const salt = await bcrypt.genSalt(10);
          user.password = await bcrypt.hash(user.password, salt);
        },
      },
    }
  );

  return User;
};
