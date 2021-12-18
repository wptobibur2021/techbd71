/**
 * =====================
 *  PRODUCTS MODELS DECLARATION BELOW
 * ====================
 */
const mongoose = require('mongoose')
const ProductsSchema = new mongoose.Schema({
    productName:{
        type: String,
        required: true
    },
    catName:{
        type: String,
        required: true
    },
    brandName:{
        type: String,
        required: true
    },
    buyPrice: {
        type: Number,
        required: true
    },
    sellingPrice: {
        type: String,
        required: true
    },
    img:{
        type: String,
        required: true
    },
    productSerialNo:{
        type: String,
        required: true
    },
    productQty:{
        type: Number,
        required: true
    },
    buyDate:{
        type: String,
        required: true
    }
}, {timestamps:true})
module.exports = mongoose.model('Products', ProductsSchema)