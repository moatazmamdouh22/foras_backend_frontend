const mongoose = require('mongoose');
const schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
const ObjectId =schema.Types.ObjectId;

// create user Employee & driver & user Customers schema  & model ..
const generalDataSchema = new schema({
    firstName: {
        type: String,
        required: [true, 'firstName field is required .'],
        max: 120
    },
    lastName: {
        type: String,
        required: false,
        max: 120
    },
    birthday: {
        type: Date,
        required: false
    },
    socialStatus :{
        type :Number,
        required:false
    },
    isWorked :{
        type :Number,
        required:false
    },
    lastJob :{
        type :String,
        required:false
    },
    graduationYear :{
        type :String,
        required:false
    },
    graduationPoint :{
        type :String,
        required:false
    },
    status: {
        type: Number,
        default: 1, // 1 = active , 2 = deactive 
        required: false
    },
    phoneNumber :{
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
    nationalityID :{
        type: ObjectId,
        ref: 'nationality',
        required :false
    },
    IDNumber :{
        type :String,
        required :[true ,'IDNumber field is required .'],
        max :50,
        trim: true
    },
    cityID :{
        type: ObjectId,
        ref: 'city2',
        required :true
    },
    neighborhood: {
        type: String,
        required: false,
    },
    gender :{
        type :Number,
        default: 1, 
        required:false
    },
    specialNeeds :{
        type :Number,
        required:false
    },
    order :{
        type :Number,
        required:false
    },
    scientificDegree :{
        type :Number,
        required:true
    },
    degree :{
        type :Number,
        required:true
    },
    scientificSpecializationID :{
        type: ObjectId,
        ref: 'scientificSpecialization',
        required :[true ,'scientificSpecialization field is required .'],
    },
    graduationUniversityID :{
        type: ObjectId,
        ref: 'graduationUniversity',
        required :[true ,'graduationUniversity field is required .'],
    },
    specializedCertificates :{
        type :Number,
        required:false
    },
    specializedCertificatesID :{
        type: ObjectId,
        ref: 'specializedCertificates',
        required :[true ,'specializedCertificates field is required .'],
    },

    experienceID :{
        type: ObjectId,
        ref: 'experience',
        required :[true ,'experience field is required .'],
    },
    mostExperienceID :{
        type: ObjectId,
        ref: 'experience',
        required :[true ,'mostExperienceID field is required .'],
    },
    yearsExperienceID :{
        type: ObjectId,
        ref: 'yearsExperience',
        required :[true ,'yearsExperience field is required .'],
    },
    cv: {
        type: String,  
        required: false
    },
    otherInformation :{
        type :Number,
        required:false
    },
    description :{
        type :String,
        required:false
    },
}
    , {
        timestamps: true // Saves createdAt and updatedAt as dates. createdAt will be our timestamp.

    });
const generalData = mongoose.model('generalData', generalDataSchema);
module.exports = generalData; 
