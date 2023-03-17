
import React, { useState } from "react";
import Cards from 'react-credit-cards-2';
import "react-credit-cards/es/styles-compiled.css";





const CreditCard = () => {


    const [data, setData] = useState({
        cvc: "",
        expiry: "",
        name: "",
        number: ""
    });


    
    const handleInputChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };




    return (
        <div id="form">
            <Cards
                cvc={data.cvc}
                expiry={data.expiry}
                focus={data.focus}
                name={data.name}
                number={data.number}
            />
            <form action="">
                <input type="number" name="cvc" placeholder="CVC" onChange={handleInputChange} />
                <input type="date" name="expiry" placeholder="Expiry Date" onChange={handleInputChange} />
                <input type="text" name="name" placeholder="Your Name" onChange={handleInputChange} />
                <input type="number" name="number" placeholder="Card Number" onChange={handleInputChange} />
                <input type="submit" />
            </form>

        </div>
    )
};

export default Cards;