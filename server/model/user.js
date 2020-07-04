const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = new schema({
    name : {
        type : String,
        required : true
    },
    laundryId : {
        type : Number,
        required : true
    },
    password : {
        type : String,
        required : true
    }
})

const User = mongoose.model("User",userSchema);

module.exports = User;