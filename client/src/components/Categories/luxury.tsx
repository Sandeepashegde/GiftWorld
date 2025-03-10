import { useNavigate } from "react-router-dom";;
import { FaArrowLeft } from "react-icons/fa"; // Import arrow icon
import "./birthday.css";

interface GiftItem {
  id: number;
  name: string;
  price: number;
  offer: string;
  image: string;
}

const luxurygift: GiftItem[] = [
  {
    id: 1,
    name: "Designer handbag or wallet",
    price: 2599,
    offer: "10% Off",
    image: "/luxury-in-1.webp",
  },
  {
    id: 2,
    name: "High-end skincare or fragrance set",
    price: 2999,
    offer: "15% Off",
    image: "/luxury-in-2.webp",
  },
  {
    id: 3,
    name: "Personalized gold or silver jewelry",
    price: 1599,
    offer: "5% Off",
    image: "/luxury-in-3.jpg",
  },
  {
    id: 4,
    name: "Exclusive wine or whiskey collection",
    price: 2599,
    offer: "20% Off",
    image: "/luxury-in-4.webp",
  },
  {
    id: 5,
    name: "Premium silk bedding set",
    price: 1599,
    offer: "20% Off",
    image: "/luxury-in-5.webp",
  },
  // Add more birthday gift items here
];

const Luxurygift: React.FC = () => {
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
        <h1>Luxury Gifts</h1>
        <div className="birthday-gifts-grid">
          {luxurygift.map((item) => (
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

export default Luxurygift;
