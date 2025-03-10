import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./cart.css";

interface GiftItem {
  id: number;
  name: string;
  price: number;
  offer: string;
  image: string;
}

const Cart: React.FC = () => {
  const [cart, setCart] = useState<GiftItem[]>([]);

  // Fetch cart data from localStorage if available
  useEffect(() => {
    const savedCart = localStorage.getItem("cartItems");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Remove item from cart
  const removeFromCart = (itemId: number) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  // Calculate the total price of the cart
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>

      {/* Empty Cart View */}
      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty. Add some items!</p>
          {/* Update the link to go to the Categories page */}
          <Link to="/categories">
            <button>Shop Now</button>
          </Link>
        </div>
      ) : (
        // Cart with Items
        <>
          <ul className="cart-items">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <p>Price: Rs {item.price}</p>
                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>

          {/* Cart Summary */}
          <div className="cart-summary">
            <p>
              Total: Rs <span className="total-price">{calculateTotal()}</span>
            </p>
            <Link to="/checkout">
              <button className="buy-now-btn-cart">Buy Now</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
