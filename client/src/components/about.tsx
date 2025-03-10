import React from "react";
import "./about.css";

const About: React.FC = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About Gift Glimmer</h1>
        <p>
          Welcome to <strong>Gift Glimmer</strong>, the place where you discover
          the magic of gifting. Whether you're celebrating a birthday, holiday,
          or a special occasion, Gift Glimmer is here to help you find the
          perfect gift to bring a smile to your loved ones.
        </p>
        <h2>Our Mission</h2>
        <p>
          Our mission is to make gifting personal, convenient, and memorable. We
          believe every gift tells a story, and we are dedicated to ensuring
          that your gifts reflect the joy, thought, and love you wish to
          express.
        </p>
        <h2>Why Choose Us?</h2>
        <ul>
          <li>
            <strong>Wide Range of Gifts:</strong> We offer a curated collection
            of unique gifts for all occasions and recipients.
          </li>
          <li>
            <strong>Personalization:</strong> Make your gifts special with
            personalized options tailored to your needs.
          </li>
          <li>
            <strong>Seamless Shopping Experience:</strong> Our user-friendly
            interface ensures a smooth and enjoyable shopping experience.
          </li>
          <li>
            <strong>Worldwide Delivery:</strong> Share your love across the
            globe with our reliable and quick delivery options.
          </li>
        </ul>
        <h2>Contact Us</h2>
        <p>
          If you have any questions, feel free to reach out to our support team
          at{" "}
          <a href="mailto:support@giftglimmer.com">support@giftglimmer.com</a>.
          We're always here to help make your gifting experience magical.
        </p>
      </div>
    </div>
  );
};

export default About;
