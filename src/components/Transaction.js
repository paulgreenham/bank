import React, { Component } from 'react'

class Transaction extends Component {
    render(){
        let t = this.props.transaction
        return (<div>
            <span>{t.category} :: </span>
            <span>{t.vendor} :: </span>
            <span>{t.amount}</span>
        </div>)
    }
}

export default Transaction