const mongoose = require('mongoose');
const schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

// create user Employee & driver & user Customers schema  & model ..
const clients2Schema = new schema({
    nameAR :{
        type :String,
        required :[true ,'nameAR field is required .'],
        max :120
    },
    nameEN :{
        type :String,
        required :[true ,'nameEN field is required .'],
        max :120
    },        
    img: {
        type: String,
        required: false
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
const clients2 = mongoose.model('clients2', clients2Schema);
module.exports = clients2;


