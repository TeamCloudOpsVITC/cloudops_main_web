'use client';
import './styles/App.css';
import Image from 'next/image';
import im1 from './ev1.jpg';
import im2 from './ev2.jpg';

export default function Page() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCompletedEventsClick = () => {
    scrollToSection('completed-events');
  };

  const handleUpcomingEventsClick = () => {
    scrollToSection('upcoming-events');
  };

  return (
    <div className="App">
      <div className="container">
        <div className="event-box" id="completed-events">
          <h2>Completed Events</h2>
          <div className="event-list">
            <p><a href="#completed-event-details" onClick={() => scrollToSection('completed-event-details')}>INNO BLITZ</a></p>
            <p><a href="#completed-event-details" onClick={() => scrollToSection('completed-event-details')}>DOCKER WORKSHOP</a></p>
          </div>
        </div>

        <div className="event-box" id="upcoming-events">
          <h2>Upcoming Events</h2>
          <div className="event-list">
            {/*<p><a href="#upcoming-event-details" onClick={() => scrollToSection('upcoming-event-details')}>Event C</a> <button className="register-btn">Register</button></p>
            <p><a href="#upcoming-event-details" onClick={() => scrollToSection('upcoming-event-details')}>Event D</a> <button className="register-btn">Register</button></p>*/}
            <p><a href="#upcoming-event-details" onClick={() => scrollToSection('upcoming-event-details')}>EVENTS COMING SOON</a></p>
          </div>
        </div>
      </div>

      <div className="section-box" id="completed-event-details">
        <section className="section">
          <h1>Completed Event Details</h1>
          <br>
          </br>
          <br></br>
          <br>
          </br>
          <br></br>
          <div className="event-container">
            <div className="event-detail" id="event-a-details">
              <h3>INNO BLITZ</h3>
              <br></br>
             
              <Image src={im1} width={500} height={500} alt="Inno Blitz Poster"  class="img_class"/>
            </div>
            <div className="event-detail" id="event-b-details">
              <h3>DOCKER WORKSHOP</h3>
              <br></br>
              <Image src={im2} width={500} height={500} alt="Docker Workshop Poster" class="img_class"/>
            </div>
          </div>
        </section>
      </div>

      { /* <div className="section-box" id="upcoming-event-details">
        <section className="section">
          <h2>Upcoming Event Details</h2>
          <div className="event-container">
            <div className="event-detail" id="event-c-details">
              <h3>Event C</h3>
              <p>Details about Event C...</p>
            </div>
            <div className="event-detail" id="event-d-details">
              <h3>Event D</h3>
              <p>Details about Event D...</p>
            </div>
          </div>
        </section>
      </div> */ }

      <button id="scrollTopBtn" title="Go to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>↑</button>
    </div>
  );
};
