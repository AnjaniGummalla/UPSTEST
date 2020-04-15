const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const SoftDelete = require('mongoose-delete');
const ItemSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    CatID: {
       type: Schema.Types.ObjectId,
       ref: 'Catagory',
       //required: true
    },
});

ItemSchema.plugin(SoftDelete, { deletedAt: true, deletedBy: true, overrideMethods: 'all' });
const ItemModel = mongoose.model('Item', ItemSchema);

module.exports = ItemModel;