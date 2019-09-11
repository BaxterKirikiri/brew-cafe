import { firebase } from './firebase';
import 'firebase/firestore';

//Initialize firestore cloud database
const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });
export { db };