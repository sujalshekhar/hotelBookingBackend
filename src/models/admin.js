'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
  
    static associate(models) {
      Admin.hasMany(models.Hotel, {
        foreignKey: 'admin_id'
      })
    }
  }
  Admin.init({
    admin_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_logged_in_date: {
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    timestamps: true,
    modelName: 'Admin',
  });
  return Admin;
};