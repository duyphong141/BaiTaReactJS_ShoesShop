import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {

        let {shoes, setStateModal } = this.props;
        return (
            <div className="card" >
                <img src={shoes.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title" style={{height: "48px"}}>{shoes.name}</h5>
                    <p className="card-text">${shoes.price}</p>
                    <button onClick={() => {
                        setStateModal(shoes)
                    }} className="btn btn-primary"  data-toggle="modal" data-target="#modelId">Detail</button>
                </div>
            </div >
        )
    }
}
