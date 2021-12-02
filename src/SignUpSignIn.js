import {
    useCreateUserWithEmailAndPassword,
    useSignInWithEmailAndPassword
} from 'react-firebase-hooks/auth';
import {useState} from "react";
import './SignUpSignIn.css'

function SignUpSignIn(props) {
    const MODES = {
        SIGN_IN: 'Sign In',
        SIGN_UP: 'Sign Up',
    }
    const [mode, setMode] = useState(null);
    function verifyEmail() {
        props.auth.currentUser.sendEmailVerification();
    }

    function SignUp() {
        const [
            createUserWithEmailAndPassword,
            userCredential, loading, error
        ] = useCreateUserWithEmailAndPassword(props.auth);
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [verifyPassword, setVerifyPassword] = useState("");

        return <>
            <label htmlFor="email">Email:</label>
            <input id='email'
                   type='email'
                   value={email}
                   onChange={(e)=>setEmail(e.target.value)}
            />
            <label htmlFor="password">Password:</label>
            <input id='password'
                   type='password'
                   value={password}
                   onChange={(e)=>setPassword(e.target.value)}
            />
            <label htmlFor="verifyPassword"> Verify Password:</label>
            <input id='verifyPassword'
                   type='password'
                   value={verifyPassword}
                   onChange={(e)=>setVerifyPassword(e.target.value)}
            />
            <button id='signUpButton'
                    onClick={() => createUserWithEmailAndPassword(email, password)}
            >Submit</button>
        </>
    }

    function SignIn() {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [
            signInWithEmailAndPassword,
            userCredential, loading, error
        ] = useSignInWithEmailAndPassword(props.auth);

        return <>
            <label htmlFor="email">Email:</label>
            <input id='email'
                   type='email'
                   value={email}
                   onChange={(e)=>setEmail(e.target.value)}
            />
            <label htmlFor="password">Password:</label>
            <input id='password'
                   type='password'
                   value={password}
                   onChange={(e)=>setPassword(e.target.value)}
            />
            <button id='signInButton'
                    onClick={() => signInWithEmailAndPassword(email, password)}
            >Submit</button>

        </>
    }

    return <div id='signUpSignIn'>
        <h1 id="title">To-Do List</h1>
        {mode===MODES.SIGN_IN && <SignIn/>}
        {mode===MODES.SIGN_UP && <SignUp/>}
        <div id="buttonOptions">
        {mode!==MODES.SIGN_IN && <button id='logInButton' onClick={() => setMode(MODES.SIGN_IN)}>Log In</button>}
        {mode!==MODES.SIGN_UP && <button id='signUpButton' onClick={() => setMode(MODES.SIGN_UP)}>Sign Up</button>}
        </div>
    </div>
}

export default SignUpSignIn;