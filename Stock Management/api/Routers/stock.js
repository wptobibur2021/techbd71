/**
 * ===================
 * STOCK ROUTER DECLARATION BELOW
 * ===================
 */
const router = require('express').Router()
const Stock = require('../Models/Stock')

/**
* ===============
*   STOCK API DECLARATION BELOW
* ===============
*/
// Cart Add
router.post('/create', async (req,res)=>{
    const newStock = new Stock(req.body)
    try{
        const saveStock = await newStock.save()
        await res.status(200).json(saveStock)
    }catch (e) {
        await res.status(500).json(e.message)
    }
})

router.get('/all', async (req,res)=>{
    try{
        const stocks = await Stock.find().populate('productId')
        console.log('Stock: ', stocks)
        await res.status(200).json(stocks)
    }catch (e) {
        await res.status(500).json(e.message)
    }
})
module.exports = router