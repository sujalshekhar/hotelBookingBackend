const AddressService = require('../services/address.service')
const ApiResponse = require('../utils/ApiResponse')

class AddressController {
    constructor() {
        this.addressService = new AddressService()
    }

    createAddress = async(req, res, next) => {
        try {
            const data = req.body;
            const address = await this.addressService.createAddress(data);
            res.status(201).json(ApiResponse.success('Address created successfully', address, 201)); 
        } catch (error) {
            next(error);
        }
    }
}

module.exports = AddressController;