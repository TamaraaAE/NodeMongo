const mongoose = require("mongoose");

const productSchema = mongoose.Schema( 
    {
        name: {
            type: String, 
            required: true
        },
        quantity: {
            type: Number,
            required: true,
            default: 0
        },
        price: {
            type: Number,
            required: true
        },
        Image: {
            type: String,
            required: false
        }
            
    }
);

const product = mongoose.model("Product", productSchema);
module.exports = product;