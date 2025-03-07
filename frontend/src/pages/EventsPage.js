import { Link } from "react-router-dom";

const EVENTS = [
  { id: 1, name: "Carnival" },
  { id: 2, name: "Christmas" },
  { id: 3, name: "Library's 60th Birthday" },
];

export default function Events() {
  return (
    <>
      <h1>Events</h1>
      <ul>
        {EVENTS.map((event) => (
          <li key={event.id}>
            <Link to={event.id}>{event.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
