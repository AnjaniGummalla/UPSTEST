const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var SoftDeletePlugin = require('mongoose-delete');
const MachineriesSchema = new Schema({
    WeldingMc: 
    {
    Description: { type: String },
    No: { type: String },
    Condition: { type: String },
    },
    DrillingMc: {
    Description: { type: String },
    No: { type: String },
    Condition: { type: String },
    },
     Weldingtourch: {
     Description: { type: String },
     No: { type: String },
    Experience: { type: String }
    },
    ConcreteDrillingMc:{
     Description: { type: String },
     No: { type: String },
    Experience: { type: String }
    },
    HammeringMc:{
     Description: { type: String },
     No: { type: String },
    Experience: { type: String }
    },
    CableMinimum:{
     Description: { type: String },
     No: { type: String },
    Experience: { type: String }
    },
    FlashArrester:{
     Description: { type: String },
     No: { type: String },
    Experience: { type: String }
    },
    NecessaryTools :{
     Description: { type: String },
     No: { type: String },
    Experience: { type: String }
    },
    RegulatorSwitchBoard: {
     Description: { type: String },
     No: { type: String },
    Experience: { type: String }
    },
    SafteyShoes:{
     Description: { type: String },
     No: { type: String },
    Experience: { type: String }
    },
     Safteyhelmet :{
     Description: { type: String },
     No: { type: String },
    Experience: { type: String }
    },
    SafteyBelt:{
     Description: { type: String },
     No: { type: String },
    Experience: { type: String }
    },

});

const MachineriesModel = mongoose.model('Machineries', MachineriesSchema);

MachineriesSchema.plugin(SoftDeletePlugin, { deletedAt: true, deletedBy: true, overrideMethods: 'all' });

module.exports = MachineriesModel;