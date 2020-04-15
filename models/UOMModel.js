const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const SoftDelete = require('mongoose-delete');
const UOMSchema = new Schema({
    UOMname: {
        type: String,
        required: true,
    },
});

UOMSchema.plugin(SoftDelete, { deletedAt: true, deletedBy: true, overrideMethods: 'all' });
const UOMModel = mongoose.model('UOM', UOMSchema);

module.exports = UOMModel;