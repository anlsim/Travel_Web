const mongoose = require("mongoose");

const Statechema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        
    },

    }
);

module.exports = mongoose.model("State", Statechema);