import './styles/EventBox.css';

const EventBox = ({ id, title, events }) => (
  <div className="event-box" id={id}>
    <h2>{title}</h2>
    <div className="event-list">
      {events.map((event, index) => (
        <p key={index}>
          <a href={`#${id}-details`}>{event.name}</a>
          {event.register && <button className="register-btn">Register</button>}
        </p>
      ))}
    </div>
  </div>
);

export default EventBox;
