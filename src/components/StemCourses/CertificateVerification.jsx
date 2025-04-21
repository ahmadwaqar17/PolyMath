import React, { useState } from 'react';
import './CertificateVerification.css';

const CertificateVerification = () => {
  const [certificateNumber, setCertificateNumber] = useState('');

  const handleInputChange = (e) => {
    setCertificateNumber(e.target.value);
  };

  const handleVerify = (e) => {
    e.preventDefault();
    // Verification logic would go here
    alert(`Verifying certificate: ${certificateNumber}`);
  };

  return (
    <div className="certificate-verification">
      <div className="atom-icon">
        {/* SVG atom icon */}
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="60" cy="60" rx="25" ry="50" stroke="#4A89DC" strokeWidth="3" transform="rotate(0 60 60)" />
          <ellipse cx="60" cy="60" rx="25" ry="50" stroke="#4A89DC" strokeWidth="3" transform="rotate(60 60 60)" />
          <ellipse cx="60" cy="60" rx="25" ry="50" stroke="#4A89DC" strokeWidth="3" transform="rotate(120 60 60)" />
          <circle cx="60" cy="60" r="10" fill="#FF5252" />
          <circle cx="60" cy="10" r="6" fill="#FFC107" />
          <circle cx="103.5" cy="85" r="6" fill="#FFC107" />
          <circle cx="16.5" cy="85" r="6" fill="#FFC107" />
        </svg>
      </div>

      <h2 className="verification-title">Certificate Verification</h2>

      <p className="verification-description">
        Polymath-Kids offers a Certificate Verification tool to ensure the authenticity of 
        the certificates awarded upon completion of our courses. Our certificates are 
        STEM-certified and represent genuine achievements in various subjects such as 
        coding, graphic design, math, leadership, and more.
      </p>

      <p className="verification-description">
        To verify a certificate, simply enter the certificate number or unique ID provided. 
        This allows you to confirm that the certificate is valid, ensuring that your child's 
        accomplishments are recognized by educational institutions, employers, or any 
        third parties. Our easy-to-use verification system provides full transparency, 
        helping maintain the credibility of our programs.
      </p>

      <div className="verification-form">
        <input
          type="text"
          className="certificate-input"
          placeholder="Enter The Certificate Number To Verify"
          value={certificateNumber}
          onChange={handleInputChange}
        />
        <button className="verify-button" onClick={handleVerify}>
          VERIFY
        </button>
      </div>
    </div>
  );
};

export default CertificateVerification;
