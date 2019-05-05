import React, { Component } from 'react'
import Transaction from './Transaction';


class Transactions extends Component {

    render(){
        const transactions = this.props.transactions
        return (<div>
            {transactions.map(t => <Transaction key={t._id} transaction={t}/>)}
        </div>)
    }
}

export default Transactions