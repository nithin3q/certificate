import React, { useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import { LuCopy } from "react-icons/lu";
import { GoVerified } from "react-icons/go";

const useStyles = createUseStyles({
  container: {
    border: '1px solid #f4f4f4',
    borderRadius: '8px',
    padding: '20px',
    maxWidth: '400px',
    margin: 'auto',
    background: '#fff',
    textAlign: 'left', // Align text to the left
    position: 'relative'

  },
  title: {
    fontSize: '28px',
    fontWeight: '700',
    color: '#000',
    marginBottom: '15px',
  },
  section: {
    marginBottom: '15px',
    fontSize: '18px',
    color: '#105236',
    display: 'flex',
    alignItems: 'center', // Align items vertically centered
    gap: '10px', // Add space between image and text
  },
  blockchainId: {
    fontSize: '18px',
    color: '#333',
    marginBottom: '10px',
    wordBreak: 'break-all',
    marginLeft: '30px',
    fontWeight: 'bold',
  },
  copyButton: {
    display: 'flex',
    alignItems: 'center',
    color: '#007bff',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    cursor: 'pointer',
    fontSize: '16px',
    outline: 'none',
    background: 'transparent',
    transition: 'background 0.3s ease',
    '&:hover': {
      background: '#e0e0e0',
    },
  },
  image: {
    marginRight: '2px', // Space between image and text
  }
});

const CredentialVerification = () => {
  const classes = useStyles();
  const [data, setData] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Fetch data from the API
    fetch('http://localhost:5000/api/credential')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleCopy = () => {
    if (data) {
      navigator.clipboard.writeText(data.blockchainID).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset the copied state after 2 seconds
      });
    }
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className={classes.container}>
      <div className={classes.title}>Credential Verification</div>
      <div className={classes.section}><GoVerified color='white' fill='blue' size={25}/>This credential is from a<span style={{fontWeight:'bold'}}>{data.issuer}</span></div>
      <div className={classes.section}>
        <img
          src='https://google.accredible.com/assets/images/colored-icons/ethereum.svg'
          width="25px"
          className={classes.image}
          alt="Ethereum logo"
        />
        Blockchain ID:
      <button className={classes.copyButton} onClick={handleCopy}>
        <LuCopy size={20} style={{ marginRight: '8px' }} />
        {copied ? 'Copied!' : 'Copy'}
      </button>
      </div>

      <div className={classes.blockchainId} >
          {data.blockchainID}
        </div>
    </div>
  );
};

export default CredentialVerification;
