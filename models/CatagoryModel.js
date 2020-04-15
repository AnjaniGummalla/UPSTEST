const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const SoftDelete = require('mongoose-delete');
const CatagorySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
});

CatagorySchema.plugin(SoftDelete, { deletedAt: true, deletedBy: true, overrideMethods: 'all' });
const CatagoryModel = mongoose.model('Catagory', CatagorySchema);

module.exports = CatagoryModel;