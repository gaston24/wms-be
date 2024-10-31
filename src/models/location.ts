import { DataTypes, Model, Sequelize } from 'sequelize';

interface LocationAttributes {
  id?: number;
  locationCode: string;
}

export class Location extends Model<LocationAttributes> implements LocationAttributes {
  public id!: number;
  public locationCode!: string;

  static associate(models: any) {
  }
}

export function initLocationModel(sequelize: Sequelize) {
  Location.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      locationCode: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      }
    },
    {
      sequelize,
      tableName: 'locations',
      underscored: true,
    }
  );
  return Location;
}
