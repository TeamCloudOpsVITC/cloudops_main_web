import './styles/EventDetails.css';

const EventDetails = ({ id, title, details }) => (
  <section id={id} className="animate">
    <h2>{title}</h2>
    <div className="event-container">
      {details.map((detail, index) => (
        <div key={index} className="event-detail">
          <h3>{detail.name}</h3>
          <p>{detail.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default EventDetails;
