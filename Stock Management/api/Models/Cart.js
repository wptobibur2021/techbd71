/**
 * =====================
 *  CART MODELS DECLARATION BELOW
 * ====================
 */
const mongoose = require('mongoose')
const CartSchema = new mongoose.Schema({
    productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    qty: {
        type: Number,
        required: true
    },
    salesPrice: {
        type: Number,
        required: true
    },
    totalPrice:{
        type: Number,
        required: true
    },
}, {timestamps: true})
module.exports = mongoose.model('Cart', CartSchema)
