import React, { Component } from 'react'
import ProductItem from './ProductItem';

export default class ProductList extends Component {
    renderShoes = () => {
        return this.props.arrayShoes.map(shoes => {
            let {id} = shoes;
            return <div className="col-4 py-1" key={`shoes-${id}`}>
                <ProductItem setStateModal={this.props.setStateModal} shoes={shoes}/>
            </div>
        })
    }

    render() {
        return (
            <div className="row">
                {this.renderShoes()}
            </div>
        )
    }
}
