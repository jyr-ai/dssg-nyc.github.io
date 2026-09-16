import React from 'react';
import './Events.css';
import Seo from './Seo';

const LUMA_EMBED_URL = 'https://luma.com/embed/calendar/cal-4VqcQEpR4zqBF8Q/events';
const LUMA_CALENDAR_URL = 'https://luma.com/calendar/cal-4VqcQEpR4zqBF8Q';

const Events = () => {
  return (
    <>
      <Seo
        title="Events - DSSG NYC"
        description="Meetups and workshops for career-ready technologists and nonprofit partners using human-centered AI, data, and IT for social good."
        type="website"
        name="DSSG NYC Events"
      />

      <div className="events-container">
        <div className="events-hero">
          <h1>Upcoming Events</h1>
          <p>Join career-ready technologists and nonprofit partners building human-centered AI for social good</p>
        </div>

        <div className="events-content">
          <div className="events-embed-section">
            <iframe
              src={LUMA_EMBED_URL}
              className="luma-embed"
              frameBorder="0"
              allowFullScreen
              aria-hidden="false"
              tabIndex="0"
              title="DSSG NYC Events Calendar"
            />
          </div>

          <div className="events-info-large">
            <div className="events-info-content">
              <h2>About Our Events</h2>
              <p>
                DSSG NYC hosts regular meetups, workshops, and training events focused on
                career-ready, human-centered AI for under-resourced nonprofits. Our events
                bring together job-seeking technologists, students, and nonprofit partners
                to collaborate on live data and IT projects.
              </p>

              <div className="event-details">
                <h3>What to Expect:</h3>
                <ul>
                  <li>Networking with like-minded professionals</li>
                  <li>Technical workshops and presentations</li>
                  <li>Project collaboration opportunities</li>
                  <li>Guest speakers from non-profit organizations</li>
                  <li>Light refreshments and snacks</li>
                </ul>
              </div>

              <div className="events-button-container">
                <a
                  href={LUMA_CALENDAR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="events-button"
                >
                  View All Events on LUMA
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
