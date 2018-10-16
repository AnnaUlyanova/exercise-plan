import React from 'react';

import AddForm from '../../containers/AddForm';
import MyExercises from '../../containers/MyExercises';

function MainComponent() {
  return (
    <div>
      <h1>Main Component</h1>
      <MyExercises />
      <AddForm />
    </div>
  );
}

export default MainComponent;
