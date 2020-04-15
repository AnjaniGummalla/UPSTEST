const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const SoftDelete = require('mongoose-delete');
const BrandSchema = new Schema({
    Brandname: {
        type: String,
        required: true,
    },
});

BrandSchema.plugin(SoftDelete, { deletedAt: true, deletedBy: true, overrideMethods: 'all' });
const BrandModel = mongoose.model('Brand', BrandSchema);

module.exports = BrandModel;