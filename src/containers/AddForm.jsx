import {
  compose,
  withState,
  withHandlers,
} from 'recompose';
import fire from '../firebase';

import AddEntryForm from '../components/AddForm';

const enhance = compose(
  withState('entryText', 'setEntryText', ''),
  withHandlers({
    handleChange: ({ setEntryText }) => (e) => {
      setEntryText(e.target.value);
    },
    addEntry: ({
      setEntryText, entryText,
    }) => (e) => {
      e.preventDefault();
      const user = fire.auth().currentUser;
      let userId;
      if (user) {
        userId = user.uid;
      }
      const entryRef = fire.database().ref(`/entries/${userId}`);
      const entry = {
        entryText,
      };
      entryRef.push(entry);
      setEntryText('');
    },
  }),
);

export default enhance(AddEntryForm);
