import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  getConsent,
  saveConsent,
  hasGpc,
  OPEN_SETTINGS_EVENT,
} from '../consent';
import './ConsentBanner.css';

const OPTIONS = [
  {
    key: 'embeds',
    label: 'Third-party embeds',
    text: 'Event calendar (Luma) and donation form (Givebutter). These providers may set their own cookies.',
  },
  {
    key: 'analytics',
    label: 'Analytics',
    text: 'Helps us understand how the site is used (Google Analytics, only if enabled).',
  },
  {
    key: 'advertising',
    label: 'Advertising',
    text: 'Measures and personalizes our Google Ads campaigns (only if enabled).',
  },
];

const ConsentBanner = () => {
  const [visible, setVisible] = useState(() => getConsent() === null);
  const [showDetails, setShowDetails] = useState(false);
  const [choices, setChoices] = useState(() => getConsent() || {});
  const gpc = hasGpc();

  useEffect(() => {
    const open = () => {
      setChoices(getConsent() || {});
      setShowDetails(true);
      setVisible(true);
    };
    window.addEventListener(OPEN_SETTINGS_EVENT, open);
    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, open);
  }, []);

  const commit = (next) => {
    saveConsent(next);
    setVisible(false);
    setShowDetails(false);
  };

  if (!visible) return null;

  return (
    <div className="consent-banner" role="dialog" aria-label="Cookie and privacy preferences">
      <div className="consent-inner">
        <p className="consent-text">
          We use only essential storage by default. With your permission we also use third-party
          embeds and, if enabled, analytics and advertising cookies. You can change your mind at any
          time. See our <Link to="/privacy">Privacy Policy</Link> and{' '}
          <Link to="/cookies">Cookie Policy</Link>.
          {gpc && ' We detected a Global Privacy Control signal and are keeping advertising off.'}
        </p>

        {showDetails && (
          <ul className="consent-options">
            <li>
              <label>
                <input type="checkbox" checked disabled /> <strong>Essential</strong> (always on)
              </label>
              <span>Remembers this choice and keeps the site working.</span>
            </li>
            {OPTIONS.map(({ key, label, text }) => (
              <li key={key}>
                <label>
                  <input
                    type="checkbox"
                    checked={!!choices[key] && !(key === 'advertising' && gpc)}
                    disabled={key === 'advertising' && gpc}
                    onChange={(e) => setChoices({ ...choices, [key]: e.target.checked })}
                  />{' '}
                  <strong>{label}</strong>
                </label>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="consent-actions">
          {showDetails ? (
            <button className="consent-btn consent-btn-primary" onClick={() => commit(choices)}>
              Save choices
            </button>
          ) : (
            <button className="consent-btn" onClick={() => setShowDetails(true)}>
              Customize
            </button>
          )}
          <button
            className="consent-btn consent-btn-primary"
            onClick={() => commit({ embeds: false, analytics: false, advertising: false })}
          >
            Reject non-essential
          </button>
          <button
            className="consent-btn consent-btn-primary"
            onClick={() => commit({ embeds: true, analytics: true, advertising: true })}
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConsentBanner;
