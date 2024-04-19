const { Schema, model} = require('mongoose');

const reserveSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    service: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    eventStartDate: {
        type: String,
        required: true,
    },
     serviceStartDate: {
        type: String,
        required: true,
    },
    FavoriteStyle: {
        type: String,
        required: true,
    },
    budget: {
        type: Number,
        required: true,
    },
    contactPerson: {
        type: String,
        required: true,
    },
    contactMethod: {
        type: Number,
        required: true,
    },
    });
    
const Reserve = model('Reserve', reserveSchema);

module.exports = Reserve;