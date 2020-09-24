import React from 'react';

const EventsList = ({ events, activeEvent, onClick }) => (
  <ul>
    {events.map(event => {
      return (
        <li
          key={event.doc_id}
          onClick={onClick}
        >
          <a
            style={{ fontWeight: activeEvent === event.doc_id ? "bold" : "" }}
            onClick={onClick}
          >
              {String(event.doc_id).replace(/"/g,'')}
          </a>
        </li>
      );
    })}
  </ul>
);

export default EventsList;