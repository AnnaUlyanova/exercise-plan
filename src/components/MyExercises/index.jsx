import React from 'react';
import PropTypes from 'prop-types';
import {
  isEmpty,
  map,
} from 'ramda';

function MyExercises({ entries }) {
  if (isEmpty(entries)) {
    return (
      <div>Seems you don`t have any entries yet </div>
    );
  }

  return (
    <div>
      <h1>My Exercises</h1>
      <ul>
        {map(entry => (
          <li key={entry.id}>{entry.text}</li>
              ), entries.newState)}
      </ul>

    </div>
  );
}

MyExercises.propTypes = {
// eslint-disable-next-line react/forbid-prop-types
  entries: PropTypes.object.isRequired,
};

export default MyExercises;
