import { DataTypes, Model, Sequelize } from 'sequelize';

interface ArticleAttributes {
  id?: number;
  code: string;
  description: string;
}

export class Article extends Model<ArticleAttributes> implements ArticleAttributes {
  public id!: number;
  public code!: string;
  public description!: string;

  static associate(models: any) {
  }
}

export function initArticleModel(sequelize: Sequelize) {
  Article.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      code: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'articles',
      underscored: true,
    }
  );
  return Article;
}
