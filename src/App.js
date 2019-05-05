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
      transactions: []
    }
  }

  updateTransactions = async () => {
    const fromDB = await axios.get('http://localhost:3723/transactions')
    this.setState({
      transactions: fromDB.data
    })
  }

  async componentDidMount() {
    this.updateTransactions()
  }

  makeInput = async (transaction) => {
    await axios.post('http://localhost:3723/transaction', transaction)
    this.updateTransactions()
  }

  render() {

    return (
      <div className="App">

        <div id="balance">
          Balance:
          <Balance transactions={this.state.transactions}/>
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
