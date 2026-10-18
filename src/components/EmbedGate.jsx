import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getConsent, saveConsent, subscribeConsent } from '../consent';

// Renders children (a third-party iframe) only after the visitor allows embeds.
const EmbedGate = ({ provider, children }) => {
  const [allowed, setAllowed] = useState(() => !!getConsent()?.embeds);

  useEffect(() => subscribeConsent(() => setAllowed(!!getConsent()?.embeds)), []);

  if (allowed) return children;

  const enable = () => saveConsent({ ...getConsent(), embeds: true });

  return (
    <div className="embed-gate" style={{ padding: '2rem', textAlign: 'center', background: '#f5f7fa', borderRadius: 8 }}>
      <p>
        This content is provided by {provider}, which may set cookies and receive your IP address.
        Please allow third-party embeds to view it. See our <Link to="/cookies">Cookie Policy</Link>.
      </p>
      <button className="button" onClick={enable}>
        Allow {provider} content
      </button>
    </div>
  );
};

EmbedGate.propTypes = {
  provider: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default EmbedGate;
