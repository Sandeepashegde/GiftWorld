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

const gourmetgift: GiftItem[] = [
  {
    id: 1,
    name: "Artisanal chocolate and truffle box",
    price: 699,
    offer: "10% Off",
    image: "/gourmet-in-1.jpg",
  },
  {
    id: 2,
    name: "Premium tea or coffee collection set",
    price: 1299,
    offer: "15% Off",
    image: "/gourmet-in-2.jpg",
  },
  {
    id: 3,
    name: "Exotic spice and seasoning gift box",
    price: 999,
    offer: "5% Off",
    image: "/gourmet-in-3.jpg",
  },
  {
    id: 4,
    name: "Personalized gourmet cookie or cupcake box",
    price: 499,
    offer: "20% Off",
    image: "/gourmet-in-4.webp",
  },
  {
    id: 5,
    name: "Luxury dry fruit and nut hamper",
    price: 999,
    offer: "20% Off",
    image: "/gourmet-in-5.webp",
  },
  // Add more birthday gift items here
];

const Gourmetgift: React.FC = () => {
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
        <h1>Gourmet Gifts</h1>
        <div className="birthday-gifts-grid">
          {gourmetgift.map((item) => (
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

export default Gourmetgift;
