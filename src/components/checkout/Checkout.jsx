import "./Checkout.css";
import {useAuth} from "../../context/GlobalState";
import checkoutImg from "../../images/checkoutAd.jpg";
import CheckoutProduct from "../checkoutproduct/CheckoutProduct";
import Subtotal from "../subtotal/Subtotal";

const Checkout = () => {
    const {user, basket} = useAuth();
  return (
    <div className="checkout">
        <div className="checkout-left">
            <img className="checkout-ad" src={checkoutImg} />
            <div>
            <h3>Hello,{user?.email}</h3>
            <h2 className="checkout-title">Your shopping Basket</h2>
            {basket.length > 0 ? (
              basket.map((item) => (
                <CheckoutProduct
                key={item.id}
                id={item.id} 
                title={item.title} 
                image={item.image}  
                price={item.price} 
                rating={item.rating} 
                />
            ))
            ) : "You have no items in your basket"}
            </div>
        </div>
        <div className="checkout-right">
           <Subtotal />
        </div>
    </div>
  )
}

export default Checkout