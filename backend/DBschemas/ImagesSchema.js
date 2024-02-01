const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    Pname: {
        type: String,
        required: true
    },
    imaOriName: {
        type: String,
        required: true
    }
});

const imageSchema = mongoose.model("ImagesName", UserSchema);

module.exports = imageSchema;
