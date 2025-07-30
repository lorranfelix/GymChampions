const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 50
    },
    age: {
        type: Number,
        required: true,
        min: 0,
        max: 120
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: /.+\@.+\..+/
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    isActive: {
        type: Boolean,
        default: true
    },
    profilePicture: {
        type: String,
        default: 'https://imgs.search.brave.com/75G7rlz37xDrn5obTMn0uy5wJWZ18miMahpHstk4waM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTU0/OTU2Mzk5L3B0L2Zv/dG8vYW5vbnltb3Vz/LXNpbGh1ZXRhLWRh/LWZyZW50ZS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9NFFq/OWFhZ1ZrRzEwUWFE/SXMtQjhxRHFucjVD/WjFnQ1RKYkUtc2Ez/cUVIYz0'
    },
    phoneNumbers: {
        type: [String],
        validate: {
            validator: function(v) {
                return v.every(num => /^\+?[1-9]\d{1,14}$/.test(num));
            },
            message: props => `${props.value} is not a valid phone number!`
        },
        default: []
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    lastLogin: {
        type: Date,
        default: null
    },
    roles: {
        type: [String],
        enum: ['user', 'admin', 'moderator'],
        default: ['user']
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
