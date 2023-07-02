const { DataTypes, Model } = require("sequelize");
const sequelize = require("../util/database");

class Customer extends Model {}
const options = {
  sequelize,
  modelName: 'Customer'
};
Customer.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
},options);

module.exports = Customer;
