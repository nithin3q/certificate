import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Certificate from '../components/Certificate';
import CredentialVerification from '../components/CredentialVerification'; // Make sure this path is correct

const CertificateDetails = () => {
  const { id } = useParams();
  const [certificate, setCertificate] = useState(null);
  const [company, setCompany] = useState([]);

  useEffect(() => {
    const fetchCertificate = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/certificates/${id}`);
        setCertificate(response.data.certificate);
        setCompany(response.data.company);
      } catch (error) {
        console.error('Error fetching certificate details:', error);
      }
    };

    fetchCertificate();
  }, [id]);

  if (!certificate || !company.length) return <div>Loading...</div>;

  return (
    <div>
      <Certificate
        uuid={id}
        certificate={certificate}
        company={company}
      />
      <CredentialVerification />
    </div>
  );
};

export default CertificateDetails;
