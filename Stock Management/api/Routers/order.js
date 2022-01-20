/**
 * ===================
 * STOCK ROUTER DECLARATION BELOW
 * ===================
 */
const router = require('express').Router()
const Order = require('../Models/Order')

/**
 * ===============
 *   STOCK API DECLARATION BELOW
 * ===============
 */
// Cart Add
router.post('/create', async (req,res)=>{
    const newOrder = new Order(req.body)
    try{
        const saveOrder = await newOrder.save()
        await res.status(200).json(saveOrder)
    }catch (e) {
        await res.status(500).json(e.message)
    }
})

router.get('/all', async (req,res)=>{
    try{
        const employeeId = req.query.employeeId
        const query = {employeeId: employeeId}
        console.log('EmployeeID: ', query)
        let result = []
        if(employeeId !== undefined){
            result = await Order.find(query).populate(['customerId', 'employeeId'])
        }else{
            result = await Order.find().populate(['customerId', 'employeeId'])
        }
        await res.status(200).json(result)
    }catch (e) {
        await res.status(500).json(e.message)
    }
})
// Single Order Get
router.get('/single/:id', async (req,res)=>{
    try{
        const id = req.params.id
        const order = await Order.findById(id).populate(['customerId', 'employeeId'])
        await res.status(200).json(order)
    }catch (e) {
        await res.status(500).json(e.message)
    }
})
// Income Monthly
router.get('/income', async (req, res) => {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth()-1))
    console.log('Last Month: ', lastMonth)
})


// Update Order By ID
router.put('/update/:id', async (req,res)=>{
    try{
        const orderId = req.params.id
        const cartId = req.body.cartId
        const returnPro = req.body.returnPro
        const damagePro = req.body.damagePro
        const salesPro = req.body.salesPro
        const result = await Order.updateOne(
            {_id: orderId, "carts._id": cartId},
            {
                status: 1,
                $set:{
                    "carts.$.damagePro": damagePro,
                    "carts.$.returnPro": returnPro,
                    "carts.$.salesPro": salesPro,
                }
            }
        )




        // const result = await Order.findOne(query).then(item=>{
        //     const updateCart = item.carts.map((item)=>item._id).indexOf(cartId)
        //     console.log('updateCart', updateCart)
        //     item.carts[updateCart].damagePro = damagePro
        //     item.carts[updateCart].returnPro = returnPro
        //     item.save();
        //     console.log('Item', item)
        // })
        // Person.findOne(personQuery).then(item => {
        //     const audioIndex = item.items.map(item => item.id).indexOf(itemID);
        //     item.items[audioIndex].name = 'Name value';
        //     item.save();
        // });
        //const result = await Order.findOne()
        // const updateDoc = {
        //     damage: damagePro,
        //     return: returnPro
        // }
        // const orderUpdate = findOrder.carts.filter((cart)=>cart._id === cartId)
        //
        // console.log('Order Update: ', orderUpdate[0])
        // const doc = {
        //     orderUpdate: updateDoc
        // }
        // const result = await Order.findByIdAndUpdate(orderId, { $set:
        //         {status: 1, doc}
        // })
        // const orderUpdate = findOrder.carts.findByIdAndUpdate(cartId,{
        //     updateDoc
        // })

       // console.log('Update Cart: ', orderUpdate)
       // console.log('Update Doc: ', updateDoc)
        //const result = await orderUpdate.updateOne(updateDoc)
        await res.status(200).json(result)
        //console.log('Result: ', result)
    }catch (e) {
        await res.status(500).json(e.message)
    }
})
module.exports = router


