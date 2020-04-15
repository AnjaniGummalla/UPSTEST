const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var SoftDeletePlugin = require('mongoose-delete');

var InternalSchema = new Schema({

    Description: { type: String },
    No: { type: String },
    Experience: { type: String },
});

const LabourSchema = new Schema({

    Welders: {
     Description: { type: String },
     No: { type: String },
    Experience: { type: String }
},
    Fitters:{
     Description: { type: String },
     No: { type: String },
    Experience: { type: String }
},
    Helpers:{
     Description: { type: String },
     No: { type: String },
    Experience: { type: String }
},
    Fabricators:{
     Description: { type: String },
     No: { type: String },
    Experience: { type: String }
},
    Riggers:{
     Description: { type: String },
     No: { type: String },
    Experience: { type: String }
},
    Others:{
     Description: { type: String },
     No: { type: String },
    Experience: { type: String }
},

});


const LabourModel = mongoose.model('Labours', LabourSchema);

LabourSchema.plugin(SoftDeletePlugin, { deletedAt: true, deletedBy: true, overrideMethods: 'all' });

module.exports = LabourModel;