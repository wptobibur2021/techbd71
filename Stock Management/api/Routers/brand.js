/**
 * ===================
 * CATEGORY ROUTER DECLARATION BELOW
 * ===================
 */

const router = require('express').Router()
const Brand = require('../Models/Brand')

/*
*================
*   GET API DECLARATION BELOW
* ===============
*/



/*
*================
*   POST API DECLARATION BELOW
* ===============
*/
router.post('/create', async (req,res)=>{
    const newCat = new Brand(req.body)
    console.log('New Cat: ', newCat)
    try{
        const saveCat = await newCat.save()
        await res.status(200).json(saveCat)
    }catch (e) {
        await res.status(500).json(e.message)
    }
})

module.exports = router