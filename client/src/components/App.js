import React from 'react';
import { useState, useEffect } from 'react';

import './App.sass';

import Section from './Section';
import Container from './Container';
import EndpointsList from './EndpointsList';
import EventsList from './EventsList';
import EventDetails from './EventDetails';
import api from './../api/api.js';
import AddEndpointForm from './AddEndpointForm';

const App = () => {

  const [endpoints, setEndpoints] = useState([]);
  const [events, setEvents] = useState([]);
  const [activeEndpoint, setActiveEndpoint] = useState('');
  const [activeEvent, setActiveEvent] = useState('');
  const [activeEventDetails, setActiveEventDetails] = useState('');


  useEffect(() => {
    api.getAllEndpoints((endPoints) => setEndpoints(endPoints));
  }, endpoints);

  const handleEndpointClick = (event) => {
    event.preventDefault();
    const thisPath = event.target.text.slice(1);
    setActiveEndpoint(thisPath);
    api.getEventsForEndpoint(thisPath, (events) => setEvents(events));
  };

  const handleEventClick = (event) => {
    event.preventDefault();
    setActiveEvent(event.target.text);
    api.getDetailsForEvent(activeEndpoint, event.target.text, (details) => {
      setActiveEventDetails(JSON.stringify(details));
    });
  }

  const handleEndpointFormSubmit = (newPath) => {
    api.createEndpoint(newPath, () => api.getAllEndpoints((endPoints) => setEndpoints(endPoints)));
  };

  return (
    <Section>
      <Container>
        <h1 className="title">Webhooks!</h1>

        <div className="columns">
          <div className="column">
            <h2 className="subtitle">Endpoints</h2>

            <div className="content">
              <EndpointsList
                endPoints={endpoints}
                activePath={activeEndpoint}
                onClick={handleEndpointClick}
              />

              <AddEndpointForm
                onSubmit={handleEndpointFormSubmit}
              ></AddEndpointForm>
            </div>

          </div>
          <div className="column">
            <h2 className="subtitle">Events</h2>

            <div className="content">
              <EventsList
                events={events}
                activeEvent={activeEvent}
                onClick={handleEventClick}
              />
            </div>

          </div>
        </div>

        <div className="container mt-6">
          <h1 className="title">Event Details</h1>
          <div className="content">
            <EventDetails
              activeEventDetails={activeEventDetails}
            />
          </div>
        </div>

      </Container>
    </Section>
  );
};

export default App;