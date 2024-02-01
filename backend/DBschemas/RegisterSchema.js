const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },

    phone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    pass: {
        type: String,
        required: true
    },
    cpass: {
        type: String,
        required: true
    }
})


userSchema.pre('save', async function (next) {
    if (this.isModified('pass')) {
        this.pass = await bcrypt.hash(this.pass, 12);
        this.cpass = await bcrypt.hash(this.cpass, 12);
        next();
    }
});

userSchema.methods.generateToken = async function () {
    try {
        let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return token;
    } catch (err) {
        console.log('Error', err);
    }
}

const Subscribers = new mongoose.model("Subscribers", userSchema);

module.exports = Subscribers;