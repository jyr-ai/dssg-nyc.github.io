import { useState } from 'react';
import PropTypes from 'prop-types';
import DonateModal from './DonateModal';
import './Footer.css';
import siteProperties from '../data/siteproperties.json';
import socialIcons from '../data/socialicons.json';

const Footer = () => {
  const [isDonateOpen, setIsDonateOpen] = useState(false);

  if (Object.keys(siteProperties).length === 0 || Object.keys(socialIcons).length === 0) {
    return (
      <footer className="modern-footer">
        <div className="container">
          <p>Loading...</p>
        </div>
      </footer>
    );
  }

  return (
    <footer className="modern-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <div className="footer-logo">
                <img src="/images/logo3.png" alt="DSSG Logo" className="logo-img" />
                <div className="brand-text">
                  <h3>NYC DSSG</h3>
                  <p>Data Science for Social Good</p>
                  <p>Data Diplomats for Nonprofits</p>
                </div>
              </div>
              <p className="brand-description">
                We&apos;re a 501(c)(3) that runs the Data Diplomats Training Program —
                matching career-ready NYC technologists with funding-scarce nonprofits
                to solve data, IT, and human-centered AI problems. IRS-registered, EIN 41-4925712.
              </p>
              <div className="social-links">
                {Object.entries(siteProperties.socialProfiles).map(([key, value]) => {
                  return socialIcons[key] ? (
                    <a href={value} target="_blank" rel="noopener noreferrer" key={key} className="social-link">
                      <img src={socialIcons[key]} alt={key} />
                    </a>
                  ) : null;
                })}
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="footer-legal">
              <p>&copy; 2026 Data Diplomats for Nonprofits, Inc. — 501(c)(3) IRS-registered organization. All rights reserved.</p>
            </div>
            <div className="footer-attribution">
              <p className="footer-address">{siteProperties.address}</p>
            </div>
          </div>
        </div>
      </div>
      <DonateModal isOpen={isDonateOpen} onClose={() => setIsDonateOpen(false)} />
    </footer>
  );
}

Footer.propTypes = {
  foregroundColor: PropTypes.string,
  backgroundColor: PropTypes.string,
};

export default Footer;