import './styles/Team.css';

const Team = () => (
  <section id="team" className="animate">
    <h2>Our Team</h2>
    <div className="team-container">
      <div className="team-member">
        <p>Vedant Kumar</p>
        <div className="team-detail">
          <h3>Technical Lead</h3>
          <p>Details about Vedant Kumar...</p>
        </div>
      </div>
      <div className="team-member">
        <p>Saptrishi Acharya</p>
        <div className="team-detail">
          <h3>Technical Lead</h3>
          <p>Details about Saptrishi Acharya...</p>
        </div>
      </div>
      <div className="team-member">
        <p>Shaurya</p>
        <div className="team-detail">
          <h3>Member</h3>
          <p>Details about Shaurya...</p>
        </div>
      </div>
    </div>
  </section>
);

export default Team;
