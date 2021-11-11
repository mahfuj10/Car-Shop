import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signOut, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitalize from "../Firebase/FirebaseInitalize";

firebaseInitalize();

const UseFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);


    const auth = getAuth();
    const provider = new GoogleAuthProvider();


    const registerUser = (email, password, name, history, location) => {

        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)

            .then((userCredential) => {
                setError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                saveUser(email, name, 'POST');
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then((user) => {
                    const destination = location?.state?.from || '/';
                    history.replace(destination);
                }).catch((error) => {
                });
            })
            .catch((error) => {
                setError(error.message);

            })
            .finally(() => setIsLoading(false));
    }

    // handale google sign

    const handaleGoogleSign = () => {
        setIsLoading(true);
        signInWithPopup(auth, provider)
            .then((result) => {
                setUser(result.user);
                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT')
            }).catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }


    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        setIsLoading(true);
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false);
        })
    }, []);

    useEffect(() => {
        fetch(`https://evening-fjord-73042.herokuapp.com/users/${user?.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user?.email])


    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({})
            }).catch(error => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false));
    }


    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://evening-fjord-73042.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }


    return {
        handaleGoogleSign,
        user,
        error,
        admin,
        isLoading,
        loginUser,
        logOut,
        registerUser
    }

}

export default UseFirebase;