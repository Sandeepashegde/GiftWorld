import { useEffect, useState } from "react";
import Card from "./card";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  const cards_details = [
    {
      title: "Baby Gifts",
      content:
        "Shop adorable baby gifts now and enjoy free gift wrapping on all orders!",
      imageUrl: "/teddy_5.jpeg",
      buttonText: "Shop now",
      redirectTo: "/Categories/baby", // Added redirect route
    },
    {
      title: "Customized Gifts",
      content:
        "Create a unique gift with our exclusive custom designs and enjoy free shipping!",
      imageUrl: "/lamp_4.jpeg",
      buttonText: "Shop now",
      redirectTo: "/Categories/personal", // Added redirect route
    },
    {
      title: "Anniversary Gifts",
      content:
        "Make your anniversary unforgettable with unique, custom-made gifts that say it all!",
      imageUrl: "/frame_2.jpeg",
      buttonText: "Shop now",
      redirectTo: "/Categories/aniversary", // Added redirect route
    },
    {
      title: "Luxury Gifts",
      content:
        "Treat someone special to a truly luxurious experience with our curated selection.",
      imageUrl: "/gift_1.jpg",
      buttonText: "Shop now",
      redirectTo: "/Categories/luxury", // Added redirect route
    },
  ];

  const [cardIndex, setCardIndex] = useState(0);
  const navigate = useNavigate(); // Initialize useHistory hook

  useEffect(() => {
    const interval = setInterval(() => {
      setCardIndex((prevIndex) => (prevIndex + 1) % cards_details.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleButtonClick = (redirectTo: string) => {
    navigate(redirectTo); // Navigate to the specified route
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
      <Card
        key={cardIndex}
        title={cards_details[cardIndex].title}
        content={cards_details[cardIndex].content}
        imageUrl={cards_details[cardIndex].imageUrl}
        buttonText={cards_details[cardIndex].buttonText}
        redirectTo={cards_details[cardIndex].redirectTo}
        onButtonClick={() => handleButtonClick(cards_details[cardIndex].redirectTo)} // Pass the route to handleButtonClick
      />
    </div>
  );
}
