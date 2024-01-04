import React from 'react';
import "./Payment.css";
import { useAuth } from '../../context/GlobalState';
import { Link } from 'react-router-dom';
import CheckoutProduct from "../checkoutproduct/CheckoutProduct";
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../../context/AppReducer';

const Payment = () => {
    const {basket, user} = useAuth();
  return (
    <div className='payment'>
      <div className='payment-container'>
        <h1>Checkout(<Link to="/checkout">{basket.length}items</Link>)</h1>
        <div className='payment-section'>
            <div className='payment-title'>
                <h3>Delivery Adress</h3>
            </div>
            <div className='payment-adress'>
                <p>{user?.email}</p>
            </div>
        </div>
        <div className='payment-section'>
            <div className='payment-title'>
                <h3>Review items and delivery</h3>
            </div>
            <div className='payment-items'>
                {basket.map((item) => (
                    <CheckoutProduct 
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />
                ))}
            </div>
        </div>
        <div className='payment-section'>
            <h3>Payment Method</h3>
            <div className='payment-details'> 
                <form>
                    <div className='payment-priceContainer'>
                    <CurrencyFormat 
                        renderText={(value) => <h3>Order Total : {value}</h3>}    
                        decimalScale={2}
                        value={getBasketTotal(basket)}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"$"}
                    />
                    <button>
                        <span>Buy Now</span>
                    </button>
                    </div>
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Payment;