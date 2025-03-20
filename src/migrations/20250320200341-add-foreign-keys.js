'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // await queryInterface.addConstraint('Hotels', {
    //   fields: ['address_id'],
    //   type: 'foreign key',
    //   name: 'address_id_fk',
    //   references: {
    //     table: 'Addresses',
    //     field: 'address_id'
    //   },
    //   onDelete: 'cascade',
    //   onUpdate: 'cascade'
    // })

    // await queryInterface.addConstraint('Hotels', {
    //   fields: ['admin_id'],
    //   type: 'foreign key',
    //   name: 'admin_id_fk',
    //   references: {
    //     table: 'Admins',
    //     field: 'admin_id'
    //   },
    //   onDelete: 'cascade',
    //   onUpdate: 'cascade'
    // })

    // await queryInterface.addConstraint('Bookings', {
    //   fields: ['user_id'],
    //   type: 'foreign key',
    //   name: 'user_id_fk',
    //   references: {
    //     table: 'Users',
    //     field: 'user_id'
    //   },
    //   onDelete: 'cascade',
    //   onUpdate: 'cascade'
    // })

    await queryInterface.addConstraint('Bookings', {
      fields: ['room_type_id'],
      type: 'foreign key',
      name: 'room_type_id_fk',
      references: {
        table: 'RoomTypes',
        field: 'room_type_id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })

    await queryInterface.addConstraint('Bookings', {
      fields: ['transaction_id'],
      type: 'foreign key',
      name: 'transaction_id_fk',
      references: {
        table: 'Transactions',
        field: 'transaction_id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })

    await queryInterface.addConstraint('RoomTypes', {
      fields: ['hotel_id'],
      type: 'foreign key',
      name: 'hotel_id_fk',
      references: {
        table: 'Hotels',
        field: 'hotel_id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })

    await queryInterface.addConstraint('RoomTypes', {
      fields: ['rate_id'],
      type: 'foreign key',
      name: 'rate_id_fk',
      references: {
        table: 'Rates',
        field: 'rate_id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Hotels', 'address_id_fk')
    await queryInterface.removeConstraint('Hotels', 'admin_id_fk')
    await queryInterface.removeConstraint('Bookings', 'user_id_fk')
    await queryInterface.removeConstraint('Bookings', 'room_type_id_fk')
    await queryInterface.removeConstraint('Bookings', 'transaction_id_fk')
    await queryInterface.removeConstraint('RoomTypes', 'hotel_id_fk')
    await queryInterface.removeConstraint('RoomTypes', 'rate_id_fk')
  }
};
