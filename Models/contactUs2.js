const mongoose = require('mongoose');
const schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

// create user Employee & driver & user Customers schema  & model ..
const contactUs2Schema = new schema({
    fullname: {
        type: String,
        required: [true, 'firstName field is required .'],
        max: 120
    },
    mobile :{
        type :String,
        required :[true ,'phoneNumber field is required .'],
        max :50,
        trim: true
    },
    email :{
        type :String,
        required :[true ,'user email  field is required .'],
        max :150,
        trim: true
    },
    notes :{
        type :String,
        required:false
    },
    mapLink :{
        type :String,
        required:false
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
const contactUs2 = mongoose.model('contactUs2', contactUs2Schema);
module.exports = contactUs2; 
