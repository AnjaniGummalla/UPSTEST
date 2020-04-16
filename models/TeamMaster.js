const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var SoftDeletePlugin = require('mongoose-delete');
const testschema = new Schema({
  corespec1: {
    type: Schema.Types.Mixed,
    //required: true,
    //unique: false
  }
});
const TeamMasterSchema = new Schema({

    corespec1:{
    type:  [Schema.Types.Mixed]
    },
    corespec2:[Schema.Types.Mixed],
    capacity:[Schema.Types.Mixed],
    variablespec:[Schema.Types.Mixed],
    optionalspec:[Schema.Types.Mixed],
    selecteditemcode:{
        type: Schema.Types.ObjectId,
        ref: 'Item',
    }

}, {strict: false});

const TeamMasterModel = mongoose.model('TeamMaster', TeamMasterSchema);

// const initialRecord = new TeamMasterSchema({ corespec1 : '' });
// initialRecord.save();

TeamMasterSchema.plugin(SoftDeletePlugin, { deletedAt: true, deletedBy: true, overrideMethods: 'all' });

module.exports = TeamMasterModel;