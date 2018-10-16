import {
  compose,
  withState,
  lifecycle,
} from 'recompose';
import fire from '../firebase';

import MyExercises from '../components/MyExercises';

const enhance = compose(
  withState('entries', 'setEntries', {}),
  lifecycle({
    componentWillMount() {
      const userAu = fire.auth().currentUser;
      let userId;
      if (userAu) {
        userId = userAu.uid;
      }

      const entryRef = fire.database().ref(`/entries/${userId}`);

      entryRef.once('value', (snapshot) => {
        const entries = snapshot.val();
        let newState = [];
        for (let entry in entries) {
          newState.push({
            id: entry,
            text: entries[entry].entryText,
          });
        }
        this.props.setEntries({ newState });
      });
    },
  }),
);

export default enhance(MyExercises);
