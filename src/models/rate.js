'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rate extends Model {
   
    static associate(models) {
      Rate.hasOne(models.RoomType, {
        foreignKey: 'rate_id'
      })
    }
  }
  Rate.init({
    rate_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    }
  }, {
    sequelize,
    timestamps: true,
    modelName: 'Rate',
  });
  return Rate;
};