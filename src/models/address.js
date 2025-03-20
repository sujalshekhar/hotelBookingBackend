'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
  
    static associate(models) {
      Address.hasOne(models.Hotel, {
        foreignKey: 'address_id'
      })
    }
  }
  Address.init({
    address_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    line1: {
      type: DataTypes.STRING,
      allowNull: false
    },
    line2: {
      type: DataTypes.STRING
    },
    landmark: {
      type: DataTypes.STRING
    },
    pincode: {
      type: DataTypes.STRING,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    district: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    timestamps: true,
    modelName: 'Address',
  });
  return Address;
};