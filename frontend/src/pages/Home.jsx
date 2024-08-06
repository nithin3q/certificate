import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [certificateId, setCertificateId] = useState('');
  const navigate = useNavigate();

  const handleVerify = () => {
    navigate(`/certificate/${certificateId}`);
  };

  return (
    <div>
      <h1>Verify Certificate</h1>
      <input
        type="text"
        value={certificateId}
        onChange={(e) => setCertificateId(e.target.value)}
        placeholder="Enter Certificate ID"
      />
      <button onClick={handleVerify}>Verify</button>
      {/* Add scanner component if needed */}
    </div>
  );
};

export default Home;
