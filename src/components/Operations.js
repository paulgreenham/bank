import React, { Component } from 'react'

class Operations extends Component {
    constructor() {
        super()
        this.state = {
            category: "",
            vendor: "",
            amount: 0
        }
    }

    getInput = event => this.setState({ [event.target.name]: event.target.value })

    // setVendor = event => this.setState({ vendor: event.target.value })

    // setAmount = event => this.setState({ amount: event.target.value })

    withdraw = () => {
        const transaction = {
            amount: - (this.state.amount),
            vendor: this.state.vendor,
            category: this.state.category
        }
        this.props.makeInput(transaction)
    }

    deposit = () => {
        const transaction = {
            amount: this.state.amount,
            vendor: this.state.vendor,
            category: this.state.category
        }
        this.props.makeInput(transaction)
    }

    render(){
        return (<div>
            <input name="category" type="text" className="category" placeholder="Enter Category" 
                value={this.state.category} onChange={this.getInput} />
            <input name="vendor" type="text" className="vendor" placeholder="Enter Vendor"
                value={this.state.vendor} onChange={this.getInput} />
            <input name="amount" type="number" className="amount" placeholder="Amount"
                value={this.state.amount} onChange={this.getInput} />
            <button className="withdraw" onClick={this.withdraw}>Withdraw</button>
            <button className="deposit" onClick={this.deposit}>Deposit</button>
        </div>)
    }
}

export default Operations