import React from 'react';
import './NewCard.css';

const NewCard = () => {
  return (
    <div className='card1'>
      <div className="container">
        <img 
          src='https://img.avianexperiences.com/assets/home-page/traveller-experiences/Thailand%20Travel%202024%20-%202.jpeg?updatedAt=1732559584611' 
          alt="card1-image" 
          className='card1-image'
        />
      </div>
      <div className='card1-content'>
        <span className="yellow-star">&#x2B50; &#x2B50; &#x2B50; &#x2B50; &#x2B50;</span>
        <h4>Thank you for crafting a trip that <br/> perfectly matched our style and <br/> interests. Your attention to detail <br/> made all the difference!</h4>
        <span style={{color: '#777'}}> Read more... </span>
        
        
        <div className="profile-section">
          <img 
            src='https://img.avianexperiences.com/assets/home-page/traveller-experiences/Bhumit%20Rabadiya%20-%20Thailand.png?updatedAt=1732559585023' 
            alt="profile-pic" 
            className='profile-image'
          />
          <div className="profile-text">
            <h3 className="profile-name">Bhumit Rabadiya</h3>
            <span style={{color: '#777'}}> Thialand Trip </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewCard;
