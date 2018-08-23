var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var bcrypt = require("bcrypt-node");

var UserSchema = new Schema({
    username: { type: String, lowercase: true, required: true, unique: true},
    password: { type: String, required: true},
    email: { type: String, lowercase: true, required: true, unique: true}
});

UserSchema.pre("save", (next) => {
    let user = this;
    bcrypt.hash(user.password, null, null, (error, hash) => {
        if (error) {
            return next(error);
        }
        user.password = hash;
        next();
    })
});

module.exports = mongoose.model("User", UserSchema);