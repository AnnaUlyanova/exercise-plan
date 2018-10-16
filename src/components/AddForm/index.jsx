import React from 'react';
import PropTypes from 'prop-types';

function AddTripForm({
  entryText,
  handleChange,
  addEntry,
}) {
  return (
    <div>
      <h2>Add new Exercise</h2>
      <form onSubmit={addEntry}>
        <input type="text" onChange={handleChange} value={entryText} />
        <input type="submit" />
      </form>
    </div>
  );
}

AddTripForm.propTypes = {
  entryText: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  addEntry: PropTypes.func.isRequired,
};

export default AddTripForm;
