'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RoomType extends Model {
   
    static associate(models) {
      
      RoomType.hasMany(models.Booking, {
        foreignKey: 'room_types_id'
      })

      RoomType.belongsTo(models.Hotel, {
        foreignKey: 'hotel_id'
      })

      RoomType.belongsTo(models.Rate, {
        foreignKey: 'rate_id'
      })

    }
  }
  RoomType.init({
    room_type_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    total_quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    hotel_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rate_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    timestamps: true,
    modelName: 'RoomType',
  });
  return RoomType;
};