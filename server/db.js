const mongoose = require('mongoose')
const {Schema} = require('mongoose')



const NgoSchema = new Schema({
    title: {type: String, unique: true},
    imgUrl: String,
    description: String,
    fundNeeded: Number,
    fundRaised: Number,
    walletAdd: String
})

const TransactionSchema = new Schema({
    orgName:String,
    amount: Number,
    userAdd: String
})


const NgoModel = mongoose.model('Ngo', NgoSchema)
const TransactionModel = mongoose.model('Transaction', TransactionSchema)

module.exports = {
    NgoModel,
    TransactionModel
}