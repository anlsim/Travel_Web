const { Double } = require("bson");
const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true,
        unique: true,
    },
    imgUrl:{
        type:String,
        required: true,
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
        type: Array,
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
        of: Number,
        required: false,
        default: null,

    },
    video: {
        type: String,
        required: false,
    }

    },{timestamps: true} 
);

module.exports = mongoose.model("Post", PostSchema);