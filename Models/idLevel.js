const mongoose = require('mongoose');
const schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
const ObjectId =schema.Types.ObjectId;

// create user Employee & driver & user Customers schema  & model ..
const idLevelSchema = new schema({
    generalDataID: {
        type: ObjectId,
        ref: 'generalData',
        required: [true, 'generalData is required .'],
    },
    languageID: {
        type: ObjectId,
        ref: 'language',
        required: [true, 'language field is required .'],
    },
    level: {
        type: Number,
        default: 1,
        required: true
    },
    status: {
        type: Number,
        default: 1, // 1 = active , 2 = deactive 
        required: false
    },
}
    , {
        timestamps: true // Saves createdAt and updatedAt as dates. createdAt will be our timestamp.

    });
const idLevel = mongoose.model('idLevel', idLevelSchema);
module.exports = idLevel;


