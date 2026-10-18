import { useState } from 'react';
import { Link } from 'react-router-dom';
import { openConsentSettings } from '../consent';
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
                matching job-seeking technologists with qualified social workers, under-resourced
                nonprofits, and NGOs to solve real community data challenges through human-centered AI.
                IRS-registered, EIN 41-4925712.
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
              <p className="footer-legal-links">
                <Link to="/privacy">Privacy Policy</Link>
                <Link to="/cookies">Cookie Policy</Link>
                <Link to="/ai-policy">AI Policy</Link>
                <button type="button" className="footer-link-button" onClick={openConsentSettings}>Cookie settings</button>
              </p>
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