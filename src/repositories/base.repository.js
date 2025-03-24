class BaseRepository {
    constructor(model) {
        this.model = model;
    }

    async findById(id) {
        return await this.model.findByPk(id);
    }

    async create(data) {
        return await this.model.create(data);
    }

    async update(id, data) {
        return await this.model.update(data, { where: { id: id } });
    }

    async delete(id) {
        return await this.model.destroy({ where: { id: id } });
    }
}

module.exports = BaseRepository;