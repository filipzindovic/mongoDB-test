const mongoose = require("mongoose");

var Users = mongoose.model("Users", {
    email: {
        type: String,
        required: true,
        minLength: 1,
        trim: true
    }
});

var newUser = new Users({
    email: "filip@example.com"
});

newUser.save().then(function(doc) {
    console.log(`Saved User: ${doc}`);
}, function(err) {
    console.log(`Unable to save User`);
});

module.exports = {Users};