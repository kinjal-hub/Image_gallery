import React, { useState } from 'react';
import './Card.css';

const images = [
  "https://img.avianexperiences.com/trek/95ffbf54-87c6-41a1-b0dc-0df5faebff8d/Layer_1051_copy.jpg",
  "https://img.avianexperiences.com/trek/16ff078c-2c9e-4378-b8e7-e6d28a6a3085/IMG_4611_2.jpg",
  "https://img.avianexperiences.com/trek/758c6a07-890d-41bb-b718-74e09580c7c4/GOPR8820.jpg",
  "https://img.avianexperiences.com/trek/533231a5-f0d8-4e56-ae69-52b77b2db9bf/IMG_4575_2_copy.jpg",
  "https://img.avianexperiences.com/trek/1929a902-69f9-4058-8bbd-6a2ebeb542df/IMG_4575_2_copy_2.jpg"
];

const Card = () => {
  const [Index, setIndex] = useState(0);

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  
  return (
    <div className="card">
      <div className="image-container" style={{ transform: 'scale(1.1)', zIndex: 10 }}>
        <button className="nav-btn left" onClick={prevImage}>❮</button>
        <img src={images[Index]} alt="card-img" className="card-image" />
        <button className="nav-btn right" onClick={nextImage}>❯</button>
      </div>
        
      <div className="card-details">
        <div className="tags">
          <h5>5 Days 4 Nights</h5>
          <h2>Phu Quock Group Trip</h2>
          <h3>Beaches, Adventure & Ice <br/> Hopping</h3>
          <hr className="divider" /> 
          <span className="tag">✅ Save 5,000</span>
        </div>
        <div className="price-container" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <h3 color= 'red' margin= "0" >₹ 32,800</h3>
            <span style={{textDecoration: 'line-through', color: '#777', fontSize: '0.9rem'}}>
              ₹ 37,800
            </span>
       </div>
      </div>
    </div>
  );
};

export default Card;
