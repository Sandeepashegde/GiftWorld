import { useEffect, useState } from "react";
import Card from "./card";
import ContactUs from "./contact";
export default function Homepage() {
  const cards_details = [
    {
      title: "Card Title 1",
      content:
        "This is some sample content for the card. It can be anything you want!",
      imageUrl: "/teddy_5.jpeg",
      buttonText: "Click Me",
    },
    {
      title: "Card Title 2",
      content:
        "Another card with some content. You can add more cards as needed.",
      imageUrl: "/lamp_4.jpeg",
      buttonText: "Click Me",
    },
    {
      title: "Card Title 3",
      content: "This is the third card. You can add more cards as needed.",
      imageUrl: "/frame_2.jpeg",
      buttonText: "Click Me",
    },
    {
      title: "Card Title 4",
      content: "This is the fourth card. You can add more cards as needed.",
      imageUrl: "/gift_1.jpg",
      buttonText: "Click Me",
    },
  ];

  const [cardIndex, setCardIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCardIndex((prevIndex) => (prevIndex + 1) % cards_details.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        <Card
          key={cardIndex}
          title={cards_details[cardIndex].title}
          content={cards_details[cardIndex].content}
          imageUrl={cards_details[cardIndex].imageUrl}
          buttonText={cards_details[cardIndex].buttonText}
          onButtonClick={() => alert(`Button clicked on card ${cardIndex + 1}`)}
        />
      </div>
      <ContactUs />
    </>
  );
}
