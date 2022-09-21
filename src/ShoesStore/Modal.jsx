import React, { Component } from 'react'

export default class Modal extends Component {

    render() {

        let {productDetail} = this.props

        return (
            <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Thông tin chi tiết</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-4">
                                    <h2 className='text-center'>{productDetail.name}</h2>
                                    <img className=' img-fluid' src={productDetail.image} alt="" />
                                </div>
                                <div className="col-8">
                                    <h4>Thông tin sản phẩm</h4>
                                    <table className="table">
                                        <tbody>
                                            <tr>
                                                <td>Price</td>
                                                <td>{productDetail.price}</td>
                                            </tr>
                                            <tr>
                                                <td>Quantity</td>
                                                <td>{productDetail.quantity}</td>
                                            </tr>
                                            <tr>
                                                <td>Description</td>
                                                <td>{productDetail.description}</td>
                                            </tr>

                                        </tbody>
                                    </table>

                                </div>
                            </div>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
