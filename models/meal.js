
const mongoose = require('mongoose');
const { Schema } = mongoose;
const foodSchema = require('./food').schema;
const nutrientSchema = require('./nutrient').schema;

const mealSchema = new Schema({

    name: String,
    description: String,
    date: {
        type: Date,
        default: Date.now
    },
    foods: [foodSchema],

    nutrientTotals: [nutrientSchema],
})

module.exports = mongoose.model('Meal', mealSchema);