import React from 'react';
import "./FinalPage.css";

const FinalPage = ({ onReset, formData }) => {
  return (
    <div className='finalpage'>
      <h1>Hello {formData.firstName}</h1>
      <div className="pd">
        <p>Email Address: {formData.email}</p>
        <p>Phone Number: {formData.phoneNumber}</p>
      </div>
      <div className="ad">
        <p>Address: {formData.streetAddress}, {formData.city}, {formData.country}</p>
      </div>
      <button onClick={onReset}>Home Page</button>
    </div>
  );
};

export default FinalPage;
