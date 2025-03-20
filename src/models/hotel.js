'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hotel extends Model {
   
    static associate(models) {
      Hotel.belongsTo(models.Address, {
        foreignKey: 'address_id'
      })

      Hotel.belongsTo(models.Admin, {
        foreignKey: 'admin_id'
      })

      Hotel.hasMany(models.RoomType, {
        foreignKey: 'hotel_id'
      })

    }
  }
  Hotel.init({
    hotel_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    hotel_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    hotel_location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    admin_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    timestamps: true,
    modelName: 'Hotel',
  });
  return Hotel;
};