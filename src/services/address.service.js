const AddressRepository = require("../repositories/address.repository");
const ApiError = require("../utils/ApiError");

class AddressService {
    constructor() {
        this.addressRepository = new AddressRepository();
    }

    async createAddress(data) {
        try {
            const address = await this.addressRepository.create(data);
            return address;
        } catch (error) {
            const status = error.status || 500;
            throw new ApiError(error.message, status);
        }
    }
}

module.exports = AddressService;