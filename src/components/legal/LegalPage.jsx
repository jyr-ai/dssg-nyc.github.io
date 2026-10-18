import PropTypes from 'prop-types';
import Seo from '../Seo';
import './LegalPage.css';

export const EFFECTIVE_DATE = 'October 18, 2026';

const LegalPage = ({ title, description, children }) => (
  <>
    <Seo title={`${title} - NYC x DSSG`} description={description} type="website" name={title} />
    <main className="legal-page">
      <h1>{title}</h1>
      <p className="legal-meta">Effective date: {EFFECTIVE_DATE}</p>
      {children}
    </main>
  </>
);

LegalPage.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default LegalPage;
