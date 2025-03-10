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

const weddinggift: GiftItem[] = [
  {
    id: 1,
    name: "Personalized couple initials neon sign",
    price: 999,
    offer: "10% Off",
    image: "/wedd-in-1.jpg",
  },
  {
    id: 2,
    name: "Customized champagne glasses or wine set",
    price: 899,
    offer: "15% Off",
    image: "/wedd-in-2.webp",
  },
  {
    id: 3,
    name: "Decorative wedding photo album",
    price: 799,
    offer: "5% Off",
    image: "/wedd-in-3.webp",
  },
  {
    id: 4,
    name: "Elegant dinnerware or tea set",
    price: 999,
    offer: "20% Off",
    image: "/wedd-in-4.jpg",
  },
  {
    id: 5,
    name: "Honeymoon travel voucher",
    price: 2599,
    offer: "20% Off",
    image: "/wedd-in-5.webp",
  },
  // Add more birthday gift items here
];

const Weddinggift: React.FC = () => {
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
       <h1>Wedding Gifts</h1>
       <div className="birthday-gifts-grid">
         {weddinggift.map((item) => (
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

export default Weddinggift;
