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

    function parseError(message) {
        return message.replace('Firebase: ','').split('(')[0];
    }

    function SignUp() {
        const [
            createUserWithEmailAndPassword,
            userCredential, loading, error
        ] = useCreateUserWithEmailAndPassword(props.auth);
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [verifyPassword, setVerifyPassword] = useState("");

        return <div id="signUp">
            <label htmlFor="email">Email:</label>
            <input id='email'
                   className="signUpSignInInput"
                   type='email'
                   value={email}
                   onChange={(e)=>setEmail(e.target.value)}
            />
            <label htmlFor="password">Password:</label>
            <input id='password'
                   className="signUpSignInInput"
                   type='password'
                   value={password}
                   onChange={(e)=>setPassword(e.target.value)}
            />
            {(password!=="" && password.length < 6) &&
            <span className="errorMessage">Password must be at least 6 characters long</span>}
            <label htmlFor="verifyPassword"> Verify Password:</label>
            <input id='verifyPassword'
                   className="signUpSignInInput"
                   type='password'
                   value={verifyPassword}
                   onChange={(e)=>setVerifyPassword(e.target.value)}
            />
            {(password!=="" && verifyPassword!=="" && password!==verifyPassword) &&
            <span className="errorMessage">Passwords don't match!</span>}
            <button id='signUpSubmit'
                    onClick={() => createUserWithEmailAndPassword(email, password)}
                    disabled={email==="" || password.length<6 || password!==verifyPassword}
            >Submit</button>
            {error !== null && error !== undefined &&
            <span className="errorMessage">{parseError(error.message)}</span>}
        </div>
    }

    function SignIn() {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [
            signInWithEmailAndPassword,
            userCredential, loading, error
        ] = useSignInWithEmailAndPassword(props.auth);
        return <div id='signIn'>
            <label htmlFor="email">Email:</label>
            <input id='email'
                   className="signUpSignInInput"
                   type='email'
                   value={email}
                   onChange={(e)=>setEmail(e.target.value)}
            />
            <label htmlFor="password">Password:</label>
            <input id='password'
                   className="signUpSignInInput"
                   type='password'
                   value={password}
                   onChange={(e)=>setPassword(e.target.value)}
            />
            <button id='signInSubmit'
                    onClick={() => signInWithEmailAndPassword(email, password)}
                    disabled={email==="" || password===""}
            >Submit</button>
            {error !== null && error !== undefined &&
            <span className="errorMessage">{parseError(error.message)}</span>}
        </div>
    }

    return <div id='signUpSignIn'>
        {mode===null && <h1 id="title">To-Do List</h1>}
        <div id="buttonOptions">
            {mode===MODES.SIGN_IN && <SignIn/>}
            {mode===MODES.SIGN_UP && <SignUp/>}
            {mode!==null && <div id="divider">
                <hr/>
                <span>Or</span>
                <hr/>
            </div>}
            {mode!==MODES.SIGN_IN && <button id='logInButton' onClick={() => setMode(MODES.SIGN_IN)}>Log In</button>}
            {mode!==MODES.SIGN_UP && <button id='signUpButton' onClick={() => setMode(MODES.SIGN_UP)}>Sign Up</button>}
        </div>
    </div>
}

export default SignUpSignIn;