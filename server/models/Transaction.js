const mongoose = require('mongoose')
const Schema = mongoose.Schema


const transactionSchema = new Schema({
    amount: Number,
    category: String,
    vendor: String
})

const Transaction = mongoose.model('Transaction', transactionSchema)
module.exports = Transaction

// let dummyData = [
//     { amount: 3200, vendor: "Elevation", category: "Salary" },
//     { amount: -7, vendor: "Runescape", category: "Entertainment" },
//     { amount: -20, vendor: "Subway", category: "Food" },
//     { amount: -98, vendor: "La Baguetterie", category: "Food" }
//   ]

//   for(datum of dummyData) {
//       let transaction = new Transaction(datum)
//       transaction.save()
//   }