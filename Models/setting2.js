const mongoose =require('mongoose');
const schema =mongoose.Schema;

// create user Employee & driver & user Customers schema  & model ..
const setting2Schema =new schema({
key :{
    type :String,
    required :[true ,' key  field is required .']
},
value :{
    type :String,
    required :[true ,' value  field is required .']
},
valueAr :{
    type :String,
    required :[true ,' value  field is required .']
},
type: {
    type: Number,
    default: 1,
    required: false
},
}
,{
  timestamps: true // Saves createdAt and updatedAt as dates. createdAt will be our timestamp.

});
const setting2 =mongoose.model('setting2', setting2Schema);
module.exports =setting2; 
