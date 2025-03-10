import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa"; // Import arrow icon
import "./birthday.css";

interface GiftItem {
  id: number;
  name: string;
  price: number;
  offer: string;
  image: string;
}

const homegift: GiftItem[] = [
  {
    id: 1,
    name: "Scented candles or aroma diffuser set",
    price: 499,
    offer: "10% Off",
    image: "/home-in-1.jpg",
  },
  {
    id: 2,
    name: "Wall art or modern painting",
    price: 1899,
    offer: "15% Off",
    image: "/home-in-2.jpg",
  },
  {
    id: 3,
    name: "Handmade ceramic vase or table decor",
    price: 499,
    offer: "5% Off",
    image: "/home-in-3.jpg",
  },
  {
    id: 4,
    name: "Personalized photo clock or family nameplate",
    price: 599,
    offer: "20% Off",
    image: "/home-in-4.webp",
  },
  {
    id: 5,
    name: "Smart home lighting set (like Philips Hue)",
    price: 999,
    offer: "20% Off",
    image: "/home-in-5.webp",
  },
  // Add more birthday gift items here
];

const Homegift: React.FC = () => {
  const navigate = useNavigate();
   
     const calculateDiscountedPrice = (price: number, offer: string) => {
       const discount = parseFloat(offer) / 100;
       const discountedPrice = price - price * discount;
       return discountedPrice.toFixed(2); // Limit to 2 decimal places
     };
   
     const addToCart = (item: GiftItem) => {
       const savedCart = localStorage.getItem("cartItems");
       const cartItems = savedCart ? JSON.parse(savedCart) : [];
       const updatedCart = [...cartItems, item];
   
       localStorage.setItem("cartItems", JSON.stringify(updatedCart));
       navigate("/cart"); // Redirect to Cart Page
     };
     
  
    return (
      <div className="birthday-gifts-container">
        {/* Back Button */}
      <button className="back-button" onClick={() => navigate("/categories")}>
        <FaArrowLeft /> Back
      </button>
        <h1>Home Decor Gifts</h1>
        <div className="birthday-gifts-grid">
          {homegift.map((item) => (
            <div key={item.id} className="birthday-gift-card">
              <img src={item.image} alt={item.name} className="gift-image" />
              <h3>{item.name}</h3>
              <p>Original Price: Rs {item.price}</p>
              <p>Offer: {item.offer}</p>
              <p>
                Discounted Price: Rs {calculateDiscountedPrice(item.price, item.offer)}
              </p>
              <div className="buttons">
                <button className="add-to-cart-btn" onClick={() => addToCart(item)}>Add to Cart</button>
                <button className="buy-now-btn">Buy Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default Homegift;
