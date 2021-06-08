const { Schema, model } = require('mongoose')

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: 'Please enter valid name to continue!',
      minlength: 4,
      maxlength: 255,
    },
    email: {
      type: String,
      required: 'Please enter valid email to continue!',
      minlength: 6,
      maxlength: 255,
      unique: true,
    },
    password: {
      type: String,
      required: 'Please enter valid password to continue!',
      min: 6,
      max: 255,
    },
  },
  {
    timestamps: true,
  }
)

const User = model('User', userSchema)
module.exports = User
