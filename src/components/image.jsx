import React from 'react';
import './Image.css';

export const Image = ({ title, largeImage, smallImage }) => {
  return (
    <div className="image-container">
      <img 
        src={smallImage} 
        alt={title} 
        className="project-thumbnail"
        loading="lazy"
      />
      <div className="image-hover-content">
        <h3>{title}</h3>
      </div>
    </div>
  );
};