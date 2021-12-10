import {useAuthState} from 'react-firebase-hooks/auth';
import firebase from "firebase/compat";
import Lists from "./Lists";
import SignUpSignIn from "./SignUpSignIn";
import VerifyEmail from "./VerifyEmail";
import ErrorPopUp from "./ErrorPopUp";
import LoadingPopUp from "./LoadingPopUp";

const auth = firebase.auth();

function App() {
    const [user, loading, error] = useAuthState(auth);

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
                    : <SignUpSignIn auth={auth}/>
                }
            </>
        }
    </>
}

export default App;