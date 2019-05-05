import React, { Component } from 'react'

class Balance extends Component {

    getBalance = transactions => {
        const categories = {}
        transactions.forEach(t => categories[t.category] ? categories[t.category] += t.amount : categories[t.category] = t.amount)
        return categories
    }

    render(){
        const transactions = this.props.transactions
        const categories = this.getBalance(transactions)
        return (<div>
            {Object.keys(categories).map(key => <div key={key}>{key}: {categories[key]}</div>)}
        </div>)
    }
}

export default Balance