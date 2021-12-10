import {useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth';
import {useState} from "react";
import './SignUpSignIn.css'
import LoadingPopUp from "./LoadingPopUp";
import ErrorPopUp from "./ErrorPopUp";

export function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function SignUpSignIn(props) {
    const MODES = {
        SIGN_IN: 'Sign In',
        SIGN_UP: 'Sign Up',
    }
    const [mode, setMode] = useState(null);

    /* Validation from:
    https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript
     */

    function parseError(message) {
        return message.replace('Firebase: ', '').split('(')[0];
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
            <ErrorPopUp error={userCredential ? {name: 'Unexpected Error', code: 'User already signed in'} : null}/>
            {loading ?
                <LoadingPopUp/> :
                <form id="signUp">
                    <label htmlFor="email">Email:</label>
                    <input id='email'
                           className="signUpSignInInput"
                           type='email'
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="password">Password:</label>
                    <input id='password'
                           className="signUpSignInInput"
                           type='password'
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                    />
                    {(password !== "" && password.length < 6) &&
                    <span className="errorMessage">Password must be at least 6 characters long</span>}
                    <label htmlFor="verifyPassword"> Verify Password:</label>
                    <input id='verifyPassword'
                           className="signUpSignInInput"
                           type='password'
                           value={verifyPassword}
                           onChange={(e) => setVerifyPassword(e.target.value)}
                    />
                    {(password !== "" && verifyPassword !== "" && password !== verifyPassword) &&
                    <span className="errorMessage">Passwords don't match!</span>}
                    <button id='signUpSubmit'
                            type='submit'
                            onClick={() => createUserWithEmailAndPassword(email, password)}
                            disabled={!validateEmail(email) || password.length < 6 || password !== verifyPassword}
                    >Submit
                    </button>
                    {error !== null && error !== undefined &&
                    <span className="errorMessage">{parseError(error.message)}</span>}
                </form>
            }
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
            <ErrorPopUp error={userCredential ? {name: 'Unexpected Error', code: 'User already signed in'} : null}/>
            {loading ?
                <LoadingPopUp/> :
                <form id='signIn'>
                    <label htmlFor="email">Email:</label>
                    <input id='email'
                           className="signUpSignInInput"
                           type='email'
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="password">Password:</label>
                    <input id='password'
                           className="signUpSignInInput"
                           type='password'
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                    />
                    <button id='signInSubmit'
                            type='submit'
                            onClick={() => signInWithEmailAndPassword(email, password)}
                            disabled={email === "" || password === ""}
                    >Submit
                    </button>
                    {error !== null && error !== undefined &&
                    <span className="errorMessage">{parseError(error.message)}</span>}
                </form>
            }
        </>
    }

    return <div id='signUpSignIn'>
        {mode === null && <h1 id="title">To-Do List</h1>}
        <div id="buttonOptions">
            {mode === MODES.SIGN_IN && <SignIn/>}
            {mode === MODES.SIGN_UP && <SignUp/>}
            {mode !== null && <div id="divider">
                <hr/>
                <span>Or</span>
                <hr/>
            </div>}
            {mode !== MODES.SIGN_IN && <button id='logInButton' onClick={() => setMode(MODES.SIGN_IN)}>Log In</button>}
            {mode !== MODES.SIGN_UP &&
            <button id='signUpButton' onClick={() => setMode(MODES.SIGN_UP)}>Sign Up</button>}
        </div>
    </div>
}

export default SignUpSignIn;