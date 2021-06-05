const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true,
        unique: true,
    },
    content:{
        type:String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
      },
    photos:{
        type:Array,
        required: false,
        default: "",
    },
    state:{
        type: String,
        required: true,

    },
    city:{
        type: String,
        required: true,
    },
    location:{
        type: Array,
        required: false,
    },
    video: {
        type: Array,
        required: false,
        default: "",
    }

    },{timestamps: true} 
);

module.exports = mongoose.model("Post", PostSchema);