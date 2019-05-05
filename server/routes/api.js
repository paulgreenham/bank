const express = require('express')
const router = express.Router()


const Transaction = require('../models/Transaction')

router.get('/transactions', async function(req, res) {
    let transactions = await Transaction.find({})
    res.send(transactions)
})

router.post('/transaction', function(req, res) {
    let data = req.body
    let transaction = new Transaction ({
        amount: data.amount,
        category: data.category,
        vendor: data.vendor
    })
    transaction.save()
    res.end
})


module.exports = router