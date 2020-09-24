import React from 'react';
import { useState } from 'react';

const AddEndpointForm = ({ onSubmit }) => {

  const [fields, setFields] = useState();

  const handleInputChange = event => {
    setFields(event.target.value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    onSubmit(fields);
  };

  return (
    <form
      onSubmit={handleFormSubmit}
    >
      <input 
        className="input"
        type="text"
        placeholder="New Endpoint"
        onChange={handleInputChange}
      >

      </input>
      <button
        className={`button is-primary`}
        style={{ width: '100%' }}
        type="submit"
      >
        Add Endpoint
      </button>
    </form>


  );
};

export default AddEndpointForm;