import './Home.css';
import siteProperties from '../data/siteproperties.json';
import heroData from '../data/heroimages.json';

const Home = () => {
  const hero = heroData.find(h => h.name === 'home');

  if (Object.keys(siteProperties).length === 0 || Object.keys(hero).length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <section className="hero-section" id="home">
      {hero.src && (
        <img
          className="background"
          src={hero.src}
          alt={hero.alt}
        />
      )}
      <div className="hero-overlay" />
      <div className="hero-content container">
        <div className="hero-text">
          <p className="hero-eyebrow">{siteProperties.heroEyebrow}</p>
          <h1 className="hero-title">
            {siteProperties.name}
          </h1>
          <p className="hero-subtitle">
            {siteProperties.heroSubtitle}
          </p>
          <p className="hero-description">
            {siteProperties.heroDescription}
          </p>
          <div className="hero-buttons">
            <a
              className="button"
              href={siteProperties.volunteerApplyUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply to Train
            </a>
            <a
              className="button secondary"
              href={siteProperties.nonprofitApplyUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Request a Match
            </a>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-arrow">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  );
}

export default Home;
