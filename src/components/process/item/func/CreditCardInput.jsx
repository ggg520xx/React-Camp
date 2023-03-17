import React, { Component } from 'react';
import Cards from 'react-credit-cards-2';
import './CreditCardInputStyle.css';







class CreditCardInput extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cvc: '',
            expiry: '',
            focus: '',
            name: '',
            number: '',
        };

    }

    handleInputFocus = (e) => {
        this.setState({
            focus: e.target.name,
            // expiry: e.target.
        });
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }




    render() {
        return (
            <>


                <div id="PaymentForm" className="row mb-4">


                    <div className="col-12" style={{ objectFit: "fill" }}>
                        <Cards
                            cvc={this.state.cvc}
                            expiry={this.state.expiry}
                            focused={this.state.focus}
                            name={this.state.name}
                            number={this.state.number}
                            style={{ width: "200px" }}
                        />
                    </div>






                    <div >

                        <h4 className="mb-3 text-left text-2xl font-bold text-white">
                            信用卡資訊
                        </h4>

                        <hr />


                        <div className="row py-4 ">



                            <div className="col-6 text-left text-lg font-semibold text-white">
                                信用卡卡號

                                <input
                                    type="tel"
                                    name="number"
                                    onChange={this.handleInputChange}
                                    onFocus={this.handleInputFocus}
                                    className="w-full text-my_black"

                                    maxLength="16"
                                    pattern="[0-9]*"
                                />
                            </div>


                            <div className="col-6 text-left text-lg font-semibold text-white">
                                持卡人姓名
                                <input
                                    type="text"
                                    name="name"
                                    onChange={this.handleInputChange}
                                    onFocus={this.handleInputFocus}
                                    className="w-full text-my_black"
                                />

                            </div>


                       
                        </div>




                        <div className="row py-4 ">

                            <div className="col-6 text-left text-lg font-semibold text-white">
                                卡片有效期限
                                <input
                                    type="text"
                                    name="expiry"
                                    onChange={this.handleInputChange}
                                    onFocus={this.handleInputFocus}
                                    placeholder="MM&nbsp;/&nbsp;YY"
                                    className="w-full text-my_black"

                                    maxLength="5"
                                />

                            </div>


                            <div className="col-6 text-left text-lg font-semibold text-white">
                                背面末三碼

                                <input
                                    type="text"
                                    name="cvc"
                                    onChange={this.handleInputChange}
                                    onFocus={this.handleInputFocus}
                                    className="w-full text-my_black"

                                    maxLength="3"
                                />

                            </div>
                        </div>

                    </div>

                </div>
            </>
        );
    }
}

export default CreditCardInput;   