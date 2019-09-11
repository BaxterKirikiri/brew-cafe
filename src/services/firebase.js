import firebase from 'firebase/app';

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: 'AIzaSyCJxf11_cU5O7g75HMoTRkbYbRHyh3hDZI',
        projectId: 'brew-app-453c4',
        authDomain: "brew-app-453c4.firebaseapp.com"
    });
}

export { firebase };