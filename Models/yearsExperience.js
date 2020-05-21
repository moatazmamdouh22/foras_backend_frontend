const mongoose =require('mongoose');
const schema =mongoose.Schema;
const bcrypt=require('bcryptjs');

// create user Employee & driver & user Customers schema  & model ..
const yearsExperienceSchema =new schema({
titleAr :{
    type :String,
    required :[true ,' titleAr  field is required .']
},
titleEN :{
    type :String,
    required :[true ,' titleEN  field is required .']
},
status :{
    type :Number,
    default: 1, // 1 = active , 2 = deactive 
    required:false
},
}
,{
  timestamps: true // Saves createdAt and updatedAt as dates. createdAt will be our timestamp.

});
const yearsExperience =mongoose.model('yearsExperience', yearsExperienceSchema);
module.exports =yearsExperience; 
