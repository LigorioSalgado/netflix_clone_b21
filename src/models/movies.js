import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const MovieSchema = new Schema({

    "name":{
        type:String,
        required:true
    },
    "plot":{
        type:String,
        required:true
    },
    "genere":{
            type:String,
            required:true
    },
    "url":{
        type:String,
        required:true
    },
    "director":{
        type:String,
        required:true
    },
    "year":{
        type:String
    },
    "rate":{
        type:Number,
        default:0
    },
    "rating":{
        type:String,
        required:true
    },
    "is_active":{
        type:Boolean,
        default:true
    },
    "upload_at":{
        type:Date,
        default: new Date()
    }
    

},{collection:"Movies",timestamps:true});

export default mongoose.model('Movies',MovieSchema);