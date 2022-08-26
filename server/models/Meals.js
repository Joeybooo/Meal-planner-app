const { Schema, model } = require('mongoose');

const mealsSchema = new Schema(
    {
        text: {
            type: String,
            required: true,
            trim: true        
        },
        category: {
            type: String,
            required: true
        },
        voteCount: {
            type: Number,
            default: 0
        }
    },
    {
        toJSON: {
            virtuals: true,
        }
    }
)

const Meals = model("Meals", mealsSchema);

module.exports = Meals;