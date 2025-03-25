const BaseRepository = require('./base.repository');
const { Address } = require('../models');

class AddressRepository extends BaseRepository {
    constructor() {
        super(Address);
    }
}

module.exports = AddressRepository;