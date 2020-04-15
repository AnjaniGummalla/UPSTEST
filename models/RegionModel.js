const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const SoftDelete = require('mongoose-delete');
const RegionSchema = new Schema({
    RegionName: {
        type: String,
        required: true,
    },
});

RegionSchema.plugin(SoftDelete, { deletedAt: true, deletedBy: true, overrideMethods: 'all' });
const RegionModel = mongoose.model('Region', RegionSchema);

module.exports = RegionModel;