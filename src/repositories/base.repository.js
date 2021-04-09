class BaseRepository {
  constructor(mongoModel) {
    this.mongoModel = mongoModel;
  }
  async getAllDataModels() {
    return await this.mongoModel.find();
  }
  async getIdDataModel(id) {
    return await this.mongoModel.findById(id);
  }
  async createNewDataModel(newItem) {
    return await this.mongoModel.create(newItem);
  }
  async updateDataModel(id, updatedItem) {
    return await this.mongoModel.findByIdAndUpdate(id, updatedItem, {
      new: true,
    });
  }
  async deleteDataModel(id) {
    await this.mongoModel.findByIdAndDelete(id);
    return true;
  }
}

module.exports = BaseRepository;
