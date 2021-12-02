import {useAuthState} from 'react-firebase-hooks/auth';
import firebase from "firebase/compat";
import Lists from "./Lists";
import SignUpSignIn from "./SignUpSignIn";

const auth = firebase.auth();

function App() {
    const [user, loading, error] = useAuthState(auth);

    return <>{user ?
    <Lists user={user} auth={auth}/>
    : <SignUpSignIn auth={auth}/>
    }
    </>
}

export default App;