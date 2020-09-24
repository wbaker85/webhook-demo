import React from 'react';
import api from './../api/api.js';

const EndpointsList = ({ endPoints, activePath, onClick }) => (
  <ul>
    {endPoints.map(endpoint => {
      return (
        <li
          key={endpoint.id}
        >
          <a
            style={{ fontWeight: activePath === endpoint.path ? "bold" : "" }}
            onClick={onClick}>
              /{endpoint.path}
          </a>
        <span> - {`${api.API_URL}/endpoints/${endpoint.path}`}</span>
        </li>
      );
    })}
  </ul>
);

export default EndpointsList;