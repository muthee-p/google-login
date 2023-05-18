//import { Schema, model, models } from 'mongoose';

import mongoose, { model } from "mongoose";
import bcrypt from "bcrypt";

//const UserSchema = new Schema({
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'name is required!'],
    match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
  },
  email: {
    type: String,
    unique: [true, 'Email already exists!'],
    required: [true, 'Email is required!'],
  },
  
  password: {
    type: String,
    required: [true, 'password is required!'],
    match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  this.password = await bcrypt.hash(this.password, 10);
});

export default mongoose.models.User || mongoose.model("User", userSchema);

//const User = models.User || model("User", UserSchema);

//export default User;