import React from "react";
import { useNavigate } from "react-router-dom";
import "./categories.css";

const categories = [
  {
    name: "Birthday Gifts",
    image: "/birthday1.jpg",
    path: "/Categories/birthday",
  },
  {
    name: "Anniversary Gifts",
    image: "/aniversary.png",
    path: "/Categories/aniversary",
  },
  { name: "Wedding Gifts", image: "/wedding.jpg", path: "/Categories/wedding" },
  {
    name: "Personalized Gifts",
    image: "/personalize.jpg",
    path: "/Categories/personal",
  },
  {
    name: "Corporate Gifts",
    image: "/corporate.jpg",
    path: "/Categories/corporate",
  },
  { name: "Baby Gifts", image: "/baby.jpg", path: "/Categories/baby" },
  { name: "Gourmet Gifts", image: "/gourmet.jpg", path: "/Categories/gourmet" },
  { name: "Home Decor Gifts", image: "/home.jpg", path: "/Categories/home" },
  {
    name: "Eco-friendly Gifts",
    image: "/eco.jpeg",
    path: "/Categories/eco",
  },
  { name: "Luxury Gifts", image: "/luxury.jpg", path: "/Categories/luxury" },
];

const Categories: React.FC = () => {
  const navigate = useNavigate();

  const handleCardClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="categories-container">
      <h1>Explore Our Gift Categories</h1>
      <div className="categories-grid">
        {categories.map((category, index) => (
          <div
            key={index}
            className="category-card"
            onClick={() => handleCardClick(category.path)}
          >
            <div className="category-image-wrapper">
              <img
                src={category.image}
                alt={category.name}
                className="category-image"
              />
            </div>
            <div className="category-overlay"></div>
            <h3>{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
