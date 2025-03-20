'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    
    static associate(models) {
      Transaction.hasOne(models.Booking, {
        foreignKey: 'transaction_id'
      })
    }
  }
  Transaction.init({
    transaction_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    },
    amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    }
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Transaction',
  });
  return Transaction;
};