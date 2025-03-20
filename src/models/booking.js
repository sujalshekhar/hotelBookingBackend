'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
  
    static associate(models) {
      Booking.belongsTo(models.User, {
        foreignKey: 'user_id'
      })

      Booking.belongsTo(models.RoomType, {
        foreignKey: 'room_types_id'
      })

      Booking.hasOne(models.Transaction, {
        foreignKey: 'transaction_id'
      })
    }
  }
  Booking.init({
    booking_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    room_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    },
    checkin_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    checkout_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    transaction_id: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    timestamps: true,
    modelName: 'Booking',
  });
  return Booking;
};