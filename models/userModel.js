const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Your Name"],
    maxlength: 30,
    minlength: 4,
  },
  email: {
    type: String,
    required: [true, "Please Enter Your Email"],
    unique: true,
    validate: [validator.isEmail, "Please Enter Valid Email"],
  },
  password: {
    type: String,
    required: [true, "Please Enter Your Email"],
    maxlength: 30,
    minlength: [8, "Minimum Length Should Be 8"],
    select: false,
  },
  avatar: [
    {
      publi_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  role:{
      type:String,
      default:"user"
  },
  resetPasswordToken:String,
  resetPasswordExpire:Date
});

module.exports=mongoose.model("user",userSchema)
