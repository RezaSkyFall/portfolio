import mongoose from 'mongoose'

const generalSchema = new mongoose.Schema({
  visitCounts : {type:Number,default:1}
},{timestamps:true})
const General = mongoose.models.General || mongoose.model('General', generalSchema);
module.exports =  General
  
