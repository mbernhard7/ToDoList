import {
    useAuthState,
    useCreateUserWithEmailAndPassword,
    useSignInWithEmailAndPassword
} from 'react-firebase-hooks/auth';
import firebase from "firebase/compat";
import Lists from "./Lists";
import SignUpSignIn from "./SignUpSignIn";
import VerifyEmail from "./VerifyEmail";
import ErrorPopUp from "./ErrorPopUp";
import LoadingPopUp from "./LoadingPopUp";

const auth = firebase.auth();

function App() {
    const [user, loading, error] = useAuthState(auth);

    const [
        signInWithEmailAndPassword,
        signInUserCredential, signInLoading, signInError
    ] = useSignInWithEmailAndPassword(auth);
    const [
        createUserWithEmailAndPassword,
        signUpUserCredential, signUpLoading, signUpError
    ] = useCreateUserWithEmailAndPassword(auth);

    return <>
        <ErrorPopUp
            error={error}
        />
        {loading ?
            <LoadingPopUp/>
            :
            <>
                {user ?
                    <>
                        {user.emailVerified ?
                            <Lists user={user} auth={auth}/>
                            :
                            <VerifyEmail auth={auth} user={user}/>
                        }
                    </>
                    : <SignUpSignIn auth={auth}
                                    signInWithEmailAndPassword={signInWithEmailAndPassword}
                                    signInUserCredential={signInUserCredential}
                                    signInLoading={signInLoading}
                                    signInError={signInError}
                                    createUserWithEmailAndPassword={createUserWithEmailAndPassword}
                                    signUpUserCredential={signUpUserCredential}
                                    signUpLoading={signUpLoading}
                                    signUpError={signUpError}
                    />
                }
            </>
        }
    </>
}

export default App;