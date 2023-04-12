const mongoose = require('mongoose');

const postSchema =  mongoose.Schema(
    {
        post_id: {
            type: Number,
            Auto_increment: true,
        },
        Employee_name: {
            type: String,
            required: true
        },
        Address : {
            type: String,
            required: true
        },
        Age : {
            type: Number,
            required: true
        },
        Department : {
            type: String,
            required: true
        },
        Employee_status : {
            type: String,
            required: true
        }
    }
);

module.exports = mongoose.model('Post', postSchema);