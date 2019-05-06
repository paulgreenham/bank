import React, { Component } from 'react'

class Balance extends Component {

    render(){
        // const transactions = this.props.transactions
        const categories = this.props.categories
        return (<div>
            {Object.keys(categories).map(key => <div key={key}>{key}: {categories[key]}</div>)}
        </div>)
    }
}

export default Balance