'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BankAccount extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      BankAccount.associate = models => {
        BankAccount.belongsTo(models.UserAccount)
      }
    }
  };
  BankAccount.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      autoIncrement: false,
    },
    balance: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'BankAccount',
  });
  return new BankAccount;
};