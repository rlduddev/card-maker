import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import fireBaseApp from "./firebase";
class AuthService {
    constructor() {
        this.firebaseAuth = getAuth();
        this.googleProvider = new GoogleAuthProvider();
        this.gitProvider = new GithubAuthProvider();
    }

    login(providerName) {
        const authProvider = this.getProvider(providerName);
        return signInWithPopup(this.firebaseAuth, authProvider);
    }
    
    logout() {
        this.firebaseAuth.signOut();
      }
    
    onAuthChange(onUserChange) {
        this.firebaseAuth.onAuthStateChanged((user) => {
            onUserChange(user);
        });
    }

    getProvider(providerName) {
        switch(providerName){
            case "Google":
                return this.googleProvider;
            case "GitHub":
                return this.gitProvider;
        }
    }
}

export default AuthService