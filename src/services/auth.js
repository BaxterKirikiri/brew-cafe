import { firebase } from './firebase';
import 'firebase/auth';

//Initialize firebase auth
const auth = firebase.auth();

const signIn = () => {
    //Initiate redirect to google sign in page
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithRedirect(provider);
}

const signOut = () => {
    auth.signOut();
}

const isAuthenticated = (user) => {
    return user !== null;
}

const isAuthorized = (user, authorizedUserIds) => {
    if (!authorizedUserIds)
        return false;

    //User is authorized if they exist and their user id matches one of the authorized user ids
    return user && authorizedUserIds.includes(user.uid);
}

export { auth, signIn, signOut, isAuthenticated, isAuthorized };