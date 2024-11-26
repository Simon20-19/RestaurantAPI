const mongoose = require("mongoose");

const restaurantsSchema = new mongoose.Schema({
    address: {
        building: String,
        coord: [Number],
        street: String,
        zipcode: String,
    },
    borough: {
        type: String,
        required: true
    },
    cuisine: {
        type: String,
        required: true
    },
//     grades: {
//         type: Array,
//         required: true
//     },
//     name: {
//         type: String,
//         required: true
//     },
//     restaurant_id: {
//         type: String,
//         required: true
//     }
});

module.exports = mongoose.model("Restaurant", restaurantsSchema);
