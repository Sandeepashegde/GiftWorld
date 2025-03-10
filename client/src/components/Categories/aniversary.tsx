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

const aniversarygifts: GiftItem[] = [
  { id: 1, name: "Customized couple portrait or caricature", price: 499, offer: "10% Off", image: "/anniversary-in-1.jpg" },
  { id: 2, name: "Romantic dinner or weekend getaway voucher", price: 1299, offer: "15% Off", image: "/anniversary-in-2.webp" },
  { id: 3, name: "Engraved couple bracelets or rings", price: 1499, offer: "5% Off", image: "/anniversary-in-3.jpg" },
  { id: 4, name: "Personalized star map of a special date", price: 799, offer: "20% Off", image: "/anniversary-in-4.jpg" },
  { id: 5, name: "Subscription box for wine, coffee, or chocolates", price: 1599, offer: "20% Off", image: "/anniversary-in-5.webp" },
];

const Aniversarygifts: React.FC = () => {
  const navigate = useNavigate();

  const calculateDiscountedPrice = (price: number, offer: string) => {
    const discount = parseFloat(offer) / 100;
    const discountedPrice = price - price * discount;
    return discountedPrice.toFixed(2);
  };

  const addToCart = (item: GiftItem) => {
    const savedCart = localStorage.getItem("cartItems");
    const cartItems = savedCart ? JSON.parse(savedCart) : [];
    const updatedCart = [...cartItems, item];

    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    navigate("/cart");
  };

  return (
    <div className="birthday-gifts-container">
      {/* Back Button */}
      <button className="back-button" onClick={() => navigate("/categories")}>
        <FaArrowLeft /> Back
      </button>

      <h1>Anniversary Gifts</h1>
      <div className="birthday-gifts-grid">
        {aniversarygifts.map((item) => (
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

export default Aniversarygifts;