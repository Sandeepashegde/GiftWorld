import React from 'react';
import './card.css';

interface CardProps {
  title: string;
  content: string;
  imageUrl: string;
  buttonText?: string;
  redirectTo: String;
  onButtonClick?: () => void;
}

const Card: React.FC<CardProps> = ({ title, content, imageUrl, buttonText, onButtonClick }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-text">{content}</p>
        {buttonText && onButtonClick && (
          <button className="card-button" onClick={onButtonClick}>
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
