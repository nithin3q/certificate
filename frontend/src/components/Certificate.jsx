import React from 'react';
import moment from 'moment';
import { createUseStyles } from 'react-jss';
import QRCode from 'qrcode.react';
import stylesheet from './Certificate.styles';
import bg from '../assets/5570863.jpg';

const Certificate = ({ uuid, certificate, company }) => {
  const getDifference = (startDate, endDate) => {
    const diff = Math.ceil(moment(endDate).diff(moment(startDate), 'months', true));
    
    const years = Math.floor(diff / 12);
    let diffString = '';
    if (years) {
      diffString = years + ' year';
      if (years > 1) {
        diffString += 's';
      }
    }

    const months = diff % 12;
    if (months) {
      if (years) {
        diffString += ' & ';
      }
      diffString += months + ' month';
      if (months > 1) {
        diffString += 's';
      }
    }
    return diffString;
  }

  const name = certificate[0];
  const position = certificate[1];
  const startDate = certificate[2] * 1000;
  const endDate = certificate[3] * 1000;
  const awardedAt = certificate[5] * 1000;
  const user = certificate[6];
  const designation = certificate[7];
  const companyName = company[0];
  const logoURL = company[1];
  const website = company[2];
  const primaryColor = company[3];
  const secondaryColor = company[4];
  const difference = getDifference(startDate, endDate);

  // Get the current URL
  const currentURL = `${window.location.origin}/certificate/${uuid}`;

  const classes = createUseStyles(stylesheet(primaryColor, secondaryColor))();

  return (
    <div className={classes['certificate-container']} style={{ backgroundImage: `url(${bg})` }}>
      <a href={website} target="_blank" rel="noopener noreferrer">
        <div className={classes['styled-div']}>
          <img src={logoURL} alt="Company logo" />
        </div>
      </a>
      <div className={classes['main-content']}>
        <p className={classes['main-heading']}>
          <span>Certificate </span>
          of Achievement
        </p>
        <p className={classes['certificate-text']}>
          This certificate is presented to
          <span className='name'>{name}</span>
          For successfully completing his/her tenure as&nbsp;
          <span>{position}</span> from&nbsp;
          <span>{moment(startDate).format('MMMM Do YYYY')}</span> to&nbsp;
          <span>{moment(endDate).format('MMMM Do YYYY')}</span>&nbsp;
          {difference ? `(${difference})` : ''}
        </p>
      </div>
      <div className={classes['certificate-footer']}>
        <div className={classes['footer-content']}>
          <div className={classes['qr-code-container']}>
          <QRCode 
              value={currentURL} 
              style={{ 
                width: '128px', 
                height: '128px',
                '@media (max-width: 768px)': {
                  width: '80px',
                  height: '80px',
                }
              }} 
            />
          </div>
          <div className={classes['designation-container']}>
            <p className={classes['issuer']}>{user}</p>
            <p className={classes['issuer-designation']}>{designation} at {companyName}</p>
          </div>
          <p className={classes['issued-date']}>{moment(awardedAt).format('Do MMMM, YYYY.')}</p>
        </div>
      </div>
      <p className={classes['certificate-uuid']}>{uuid}</p>
    </div>
  );
};

export default Certificate;
