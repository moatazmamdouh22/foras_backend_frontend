const mongoose =require('mongoose');
const schema =mongoose.Schema;
const bcrypt=require('bcryptjs');
const ObjectId =schema.Types.ObjectId;

// create user Employee & driver & user Customers schema  & model ..
const employee2Schema =new schema({
fullname :{
    type :String,
    required :[true ,' user fullname  field is required .'],
    max :120
},
mobile :{
    type :String,
    required :[true ,' user mobile field is required .'],
    max :50,
    unique: [true ,'this mobile number already exist'],
    trim: true
},
email :{
    type :String,
    required :false,
    unique: [true ,'this mobile number already exist'],
    max :150,
    trim: true
},
password :{
    type :String,
    required :[true ,' password field is required .'],
},
type :{
    type :Number,
    default: 2, // 1 = admin , 2 = sub-admins 
    required:false
},

status :{
    type :Number,
    default: 1, // 1 = active , 2 = deactive 
    required:false
},
createBy :{
    type: ObjectId,
    ref: 'employee',
    required :false
},
}
,{
  timestamps: true // Saves createdAt and updatedAt as dates. createdAt will be our timestamp.
});
const employee2 =mongoose.model('employee2', employee2Schema);
module.exports =employee2;