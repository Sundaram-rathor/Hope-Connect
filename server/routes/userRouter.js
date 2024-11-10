const {Router} = require('express');
const {NgoModel, TransactionModel} = require('../db')

const UserRouter = Router();


// for adding organisation
UserRouter.post('/create/org', async function(req,res){
    const title = req.body.title;
    const imgUrl = req.body.imgUrl;
    const description = req.body.description;
    const fundNeeded = req.body.fundNeeded;
    const fundRaised = req.body.fundRaised;
    const walletAdd = req.body.walletAdd

    await NgoModel.create({
        title,
        imgUrl,
        description,
        fundNeeded,
        fundRaised,
        walletAdd
    })

    res.json({
        message:'org added'
    })
   
})

//getting all org
UserRouter.get('/allorg', async function(req,res){
    const allorg = await NgoModel.find({})

    res.json({
        message: 'all org',
        allorg
    })
})

//transaction happening
UserRouter.post('/transfer', async function(req,res){
    const orgName = req.body.orgName;
    const amount = req.body.amount;
    const userAdd = req.body.userAdd;

    await TransactionModel.create({
        orgName,
        amount,
        userAdd
    })

    res.json({
        message:'transaction recorded!'
    })
})


//history 
UserRouter.post('/history', async function(req,res){
    const userAdd = req.body.userAdd;
    console.log(userAdd)
    const alltransaction = await TransactionModel.find({
        userAdd: userAdd
    })

    if(!alltransaction){
        res.json({
            message:'Not Donated Yet..'
        })
        return
    }

    res.json({
        message: 'data retrived',
        alltransaction
    })
})

module.exports = {
    UserRouter
}