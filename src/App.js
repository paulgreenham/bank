import React, { Component } from 'react'
import axios from 'axios'
import './App.css'
import Balance from './components/Balance';
import Transactions from './components/Transactions';
import Operations from './components/Operations';

class App extends Component {
  constructor() {
    super()
    this.state = {
      transactions: [],
      categories: [],
      balance: 0
    }
  }

  updateTransactions = async () => {
    const fromDB = await axios.get('http://localhost:3723/transactions')
    await this.setState({
      transactions: fromDB.data
    })
    this.getBalance()
  }

  async componentDidMount() {
    await this.updateTransactions()
  }

  makeInput = async (transaction) => {
    await axios.post('http://localhost:3723/transaction', transaction)
    this.updateTransactions()
  }

  getBalance = () => {
    const transactions = [...this.state.transactions]
    const categories = {}
    let balance = 0
    for (let t of transactions) {
      categories[t.category] ? categories[t.category] += t.amount : categories[t.category] = t.amount
      balance += t.amount
    }
    this.setState ({
      categories: categories,
      balance: balance
    })
}

  render() {
    return (
      <div className="App">
        <div className="balance">
          Balance: {this.state.balance}
        </div>
        <div id="summary">
          Summary:
          <Balance categories={this.state.categories}/>
        </div>

        <div id="transactions">
          Transactions:
          <Transactions transactions={this.state.transactions}/>
        </div>

        <div id="operations">
          Operations:
          <Operations makeInput={this.makeInput}/>
        </div>

      </div>
    )
  }
}

export default App
