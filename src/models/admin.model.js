const mongoose = require("mongoose");
const { createHashPassword, comparePassword } = require("../helpers/salt");
const AdminSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

AdminSchema.pre("save", async function (next) {
  const user = this
  if (!user.isModified("password")) return next();
  let newPassword = await createHashPassword(user.password);
  user.password = newPassword;
  next();
});

AdminSchema.methods.comparePassword = comparePassword;

module.exports = mongoose.model("admin", AdminSchema);
