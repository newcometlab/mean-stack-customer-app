var mongoose = require("mongoose");
var Schema = mongoose.Schema;
//var bcrypt = require("bcrypt-node");

var UserSchema = new Schema({
    idNumber: { type: String, lowercase: true, required: true, unique: true},
    firstName: { type: String, required: true},
    lastName: { type: String, required: true},
    email: { type: String, lowercase: true, required: true},
    phoneNumber: { type: String, required: true}
});

// UserSchema.pre("save", (next) => {
//     let user = this;
//     bcrypt.hash(user.password, null, null, (error, hash) => {
//         if (error) {
//             return next(error);
//         }
//         user.password = hash;
//         next();
//     })
// });

module.exports = mongoose.model("User", UserSchema);