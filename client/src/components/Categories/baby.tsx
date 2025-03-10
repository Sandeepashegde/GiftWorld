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

const babygift: GiftItem[] = [
  {
    id: 1,
    name: "Soft plush toy set",
    price: 499,
    offer: "10% Off",
    image: "/baby-in-1.jpg",
  },
  {
    id: 2,
    name: "Milestone memory book",
    price: 249,
    offer: "15% Off",
    image: "/baby-in-2.jpg",
  },
  {
    id: 3,
    name: "Cotton baby clothes set",
    price: 299,
    offer: "5% Off",
    image: "/baby-in-3.webp",
  },
  {
    id: 4,
    name: "Musical night lamp",
    price: 299,
    offer: "20% Off",
    image: "/baby-in-4.jpg",
  },
  {
    id: 5,
    name: "Personalized baby blanket",
    price: 399,
    offer: "20% Off",
    image: "/baby-in-5.webp",
  },
  // Add more birthday gift items here
];

const Babygift: React.FC = () => {
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
      <h1>Baby Gifts</h1>
      <div className="birthday-gifts-grid">
        {babygift.map((item) => (
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

export default Babygift;
