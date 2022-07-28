import {
  DataTypes,
  InferAttributes,
  Model,
  InferCreationAttributes,
} from "sequelize";
import db from "../db";

// This is how you create a Sequelize Model as of Sequelize >=6.14.0
// https://sequelize.org/docs/v6/other-topics/typescript/#usage
export class Url extends Model<
  InferAttributes<Url>,
  InferCreationAttributes<Url>
> {
  declare slug: string;
  declare longUrl: string;
  declare expires: Date;
}

Url.init(
  {
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      // slug and expires are unique together
      primaryKey: true,
    },
    expires: {
      type: DataTypes.DATE,
      allowNull: false,
      // slug and expires are unique together
      primaryKey: true,
    },
    longUrl: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    // sequelize will pluralize the model name
    modelName: "url",
  }
);
