const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const dummyData = {
  certificate: [
    'Nithin Kumar Appari',
    'Software Engineer',
    Math.floor(Date.now() / 1000) - 31536000, // Start date (1 year ago)
    Math.floor(Date.now() / 1000), // End date (now)
    null, // Other data
    Math.floor(Date.now() / 1000), // Awarded date (now)
    'Abhishek T', // Issuer
    'CEO', // Issuer designation
  ],
  company: [
    'AquarLabs',
    'https://aquarlabs.com/assets/imgs/template/logo-footer.png',
    'https://example.com',
    '#24C4D4',
    'gold',
  ],
};

app.get('/api/certificates/:id', (req, res) => {
  // Replace with real logic to fetch certificate data
  res.json(dummyData);
});

app.get('/api/credential', (req, res) => {
  const credentialData = {
    issuer: " verified issuer",
    blockchain: "Ethereum blockchain",
    blockchainID: "0xc07c2c2e15e10f5fb1ddca3a57d12a132a6084e0b271521e535d6376747e2487"
  };

  res.json(credentialData);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
