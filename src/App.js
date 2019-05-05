import React, { Component } from 'react'
import axios from 'axios'
import './App.css'
import Balance from '../components/Balance';
import Transactions from '../components/Transactions';
import Operations from '../components/Operations';

class App extends Component {

  render() {
  
    return (
      <div className="App">

        <div id="balance">
          Balance:
          <Balance />
        </div>

        <div id="transactions">
          Transactions:
          <Transactions />
        </div>

        <div id="operations">
          Operations:
          <Operations />
        </div>

      </div>
    )
  }
}

export default App
