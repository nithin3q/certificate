import React, { useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import { LuCopy } from "react-icons/lu";
import { GoVerified } from "react-icons/go";

const useStyles = createUseStyles({
  container: {
    border: '1px solid #000',
    borderRadius: '8px',
    padding: '20px',
    maxWidth: '400px',
    margin: 'auto',
    background: 'transparent',
    textAlign: 'left',
    position: 'relative',
    '@media (max-width: 768px)': {
      maxWidth: '100%', // Make sure it scales better on smaller screens
      padding: '15px', // Adjust padding to fit smaller screens
      borderRadius: '0px', // Adjust border radius for better fit on smaller screens
      border: '1px solid #000',
      background: 'rgb(255, 255, 255, 0.1)',

    },
  },
  title: {
    fontSize: '28px',
    fontWeight: '700',
    color: '#000',
    marginBottom: '15px',
    '@media (max-width: 768px)': {
      fontSize: '22px', // Increase font size on smaller screens for better readability
      marginBottom: '10px',
    },
  },
  section: {
    marginBottom: '15px',
    fontSize: '18px',
    color: '#000',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    '@media (max-width: 768px)': {
      fontSize: '14px', // Slightly larger font size for smaller screens
      gap: '6px', // Adjust gap for better spacing on smaller screens
    },
  },
  blockchainId: {
    fontSize: '18px',
    color: '#333',
    marginBottom: '10px',
    wordBreak: 'break-all',
    marginLeft: '30px',
    fontWeight: 'bold',
    '@media (max-width: 768px)': {
      fontSize: '14px', // Adjust font size for smaller screens
      marginLeft: '15px', // Reduce margin for better fit on smaller screens
    },
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
      background: '#007bff1a',
    },
    '@media (max-width: 768px)': {
      padding: '8px 15px', // Adjust padding for smaller screens
      fontSize: '14px', // Adjust font size for smaller screens
    },
  },
  image: {
    marginRight: '2px',
    width: '25px', // Default width for larger screens
    '@media (max-width: 768px)': {
      width: '20px', // Reduce width for smaller screens
    },
  }
});

const CredentialVerification = () => {
  const classes = useStyles();
  const [data, setData] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://certificate-05bu.onrender.com/api/credential')
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
      <div className={classes.section}>
        <GoVerified color='white' fill='blue' size={25} />
        This credential is from a <span style={{ fontWeight: 'bold' }}>{data.issuer}</span>
      </div>
      <div className={classes.section}>
        <img
          src='https://google.accredible.com/assets/images/colored-icons/ethereum.svg'
          className={classes.image}
          alt="Ethereum logo"
        />
        Blockchain ID:
        <button className={classes.copyButton} onClick={handleCopy}>
          <LuCopy size={20} style={{ marginRight: '8px' }} />
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <div className={classes.blockchainId}>
        {data.blockchainID}
      </div>
    </div>
  );
};

export default CredentialVerification;
