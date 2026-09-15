import './Projects.css';
import DiplomatsCarousel from './carousel/DiplomatsCarousel';
import useInViewReveal from './carousel/useInViewReveal';
import StatCounter from './StatCounter';

const STATS = [
  { value: '260+', label: 'Training Candidates' },
  { value: '8+', label: 'Partner Organizations' },
  { value: '8+', label: 'Projects Completed' },
  { value: '$40k+', label: 'Pro Bono Value Delivered' }
];

const Projects = () => {
  const [gridRef, isSplit] = useInViewReveal();
  const [statsRef, areStatsRevealed] = useInViewReveal();

  return (
    <section className="projects-section white" id="projects">
      <div className="container">
        <div className="projects-header">
          <h2 className="section-title">The Data Diplomats Training Program</h2>
          <p className="section-subtitle">
            NYC&apos;s entry-level tech pathway is shrinking. We match career-ready candidates
            with qualified nonprofits and NGOs that need data and IT help — and cannot hire a full-time team.
          </p>
        </div>
        
        <div className={`involvement-grid${isSplit ? ' is-split' : ''}`} ref={gridRef}>
          {/* Data & IT Professionals Section */}
          <div className="involvement-card professionals-card">
            <div className="card-header">
              <div className="card-icon professionals-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 7H4C2.9 7 2 7.9 2 9V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V9C22 7.9 21.1 7 20 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 11H8M10 15H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="17" cy="13" r="1" fill="currentColor"/>
                  <path d="M22 9L12 2L2 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Career-Ready Candidates</h3>
              <p className="card-tagline">Train on real problems. Graduate job-ready.</p>
              <div className="card-footer">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSf8bvJdbx70NBQwizsA2UKAUiZ5AILtc7bWUH0KxOT_ej6MJw/viewform?usp=header" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="button">
                  Apply to Train
                </a>
              </div>
            </div>
            
            <div className="card-content">
              <p className="card-description">
                NYC&apos;s first rung into tech has narrowed — fewer entry-level jobs, more competition,
                and employers expecting AI-fluent, applied work. Join the Data Diplomats Training Program
                to practice human-centered AI, data, and IT on live nonprofit projects.
              </p>

              <div className="benefits-list">
                <div className="benefit-item">
                  <div className="benefit-icon">✨</div>
                  <span>Career-ready portfolio from live nonprofit work</span>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">🚀</div>
                  <span>Human-centered AI, data, and IT skills</span>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">🤝</div>
                  <span>Matched placement with mission-driven teams</span>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">📈</div>
                  <span>Experience employers now require at hire</span>
                </div>
              </div>
              <div className="services-list">
              <div className="service-category">
              <h4>Train on:</h4>
              <div className="skills-tags">
                <span className="skill-tag">Applied Data Science</span>
                <span className="skill-tag">Machine Learning & AI Agents</span>
                <span className="skill-tag">Automate Web Development</span>
                <span className="skill-tag">Database Design & Data Ingestion</span>
                <span className="skill-tag">Cloud Architecture & Kubernetes</span>
                <span className="skill-tag">Data Story Telling</span>
              </div>
              </div>
              </div>
            </div>
            

          </div>
          
          {/* Visual Separator */}
          <div className="section-divider">
            <div className="divider-line"></div>
            <div className="divider-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 8L21 12L17 16M7 16L3 12L7 8M14 4L10 20" stroke="var(--primary-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="divider-line"></div>
          </div>
          
          {/* Non Profit Organizations Section */}
          <div className="involvement-card nonprofits-card">
            <div className="card-header">
              <div className="card-icon nonprofits-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                  <path d="M12 16C16.4183 16 20 19.5817 20 24H4C4 19.5817 7.58172 16 12 16Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Nonprofits &amp; NGOs</h3>
              <p className="card-tagline">Federally funded. Still funding-scarce. We bring the talent.</p>
              <div className="card-footer">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScxK78KmTbbF2LnqqVvniWg21DrrU2B8WkvS6euTILKkR18bw/viewform?usp=header" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="button secondary">
                  Request a Match
                </a>
              </div>
            </div>
            
            <div className="card-content">
              <p className="card-description">
                If grants do not cover a full-time data or IT hire, we match you with trained Data Diplomats
                who take on your biggest technical problems — dashboards, systems, websites, and
                human-centered AI — without a full-time tech staff.
              </p>
              
              <div className="benefits-list">
                <div className="benefit-item">
                  <div className="benefit-icon">💡</div>
                  <span>Matched talent, not a cold volunteer list</span>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">📊</div>
                  <span>Data and IT capacity when funds fall short</span>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">🎯</div>
                  <span>Human-centered AI scoped to your mission</span>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">⚡</div>
                  <span>Solutions your budget can actually sustain</span>
                </div>
              </div>
              
              <div className="services-list">
                <div className="service-category">
                  <h4>Pro Bono Services We Offer:</h4>
                  <div className="skills-tags">
                    <span className="skill-tag">Causal Impact for Social Research</span>
                    <span className="skill-tag">Database optimization</span>
                    <span className="skill-tag">Website development & modernization</span>
                    <span className="skill-tag">Data visualization dashboards</span>
                    <span className="skill-tag">Process automation solutions</span>
                    <span className="skill-tag">Agentic AI solutions</span>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        
        <div className="projects-bottom">
          <div className="stats-section" ref={statsRef}>
            {STATS.map((stat) => (
              <div className="stat-item" key={stat.label}>
                <div className="stat-number">
                  <StatCounter value={stat.value} isActive={areStatsRevealed} />
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Data Diplomats Link */}
        <div className="data-diplomats-section">
          <div className="data-diplomats-content" style={{ textAlign: 'center' }}>
            <DiplomatsCarousel />
            <div className="data-diplomats-button-container">
              <a
                href="/#/diplomats"
                className="button data-diplomats-button"
              >
                Meet Our Data Diplomats
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
