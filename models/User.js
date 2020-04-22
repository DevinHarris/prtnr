const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },

    age: {
        type: Number,
        required: true
    },

    avatar: {
        type: String,
        required: true
    },

    name: {
        firstName: {
            type: String,
            required: true
        },

        lastName: {
            type: String,
            required: true
        }
    },

    location: {
        city: {
            type: String,
            required: true
        },

        state: {
            type: String,
            required: true
        },

        country: {
            type: String,
            required: true
        }
    },

    currentLocation: {
        type: String,
        enum: ['Point'],
        // required: true
        coordinates: [Number],
        city: String,
        state: String,
        country: String
    },

    bio: {
        about: {
            type: String,
            required: true
        },

        interests: String
    },

    currentlyAvailable: {
        type: Boolean,
        required: true
    },

    privateProfile: {
        type: Boolean,
        required: true
    },

    rating: {
        type: Number,
        default: 0.0
    },

    created: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model('User', UserSchema);