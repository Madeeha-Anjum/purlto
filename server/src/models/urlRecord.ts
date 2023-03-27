import {
  DataTypes,
  InferAttributes,
  Model,
  InferCreationAttributes,
  CreationOptional,
} from "sequelize";
import db from "../db";

// This is how you create a Sequelize Model as of Sequelize >=6.14.0
// https://sequelize.org/docs/v6/other-topics/typescript/#usage
export class UrlRecord extends Model<
  InferAttributes<UrlRecord>,
  InferCreationAttributes<UrlRecord>
> {
  declare slug: string;
  declare longUrl: string;
  declare hits: CreationOptional<number>;
  declare lastAccessedAt: CreationOptional<Date>;
}

UrlRecord.init(
  {
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    longUrl: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    hits: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    lastAccessedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
    },
  },
  {
    sequelize: db,
    // sequelize will pluralize the model name
    modelName: "url",
  }
);
