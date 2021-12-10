import "./PopUp.css"
import "./VerifyEmail.css"
import {useState} from "react";

function VerifyEmail(props) {
    const [emailSent, setEmailSent] = useState(false);

    function verifyEmail() {
        props.auth.currentUser.sendEmailVerification();
    }

    return <div id="popUpBackground">
        <div id="popUp">
            <div id="popUpHeader">
                <button
                    id="closePopUp"
                    onClick={() => props.auth.signOut()}
                >X
                </button>
                <h2> Verify Email </h2>
                <button>X</button>
            </div>
            <div id="verifyBody">
                {emailSent ?
                    <>
                        <span id="verifyMessage">Check your email for a verification link:<br/>{props.user.email}</span>
                        <div id="loader"/>
                        <button id='sendEmail' onClick={() => window.location.reload(true)}>Refresh Page</button>
                    </>
                    :
                    <>
                        <span
                            id="verifyMessage">Click the button below to send a verification email to:<br/>{props.user.email}</span>
                        <button id='sendEmail' onClick={() => {
                            setEmailSent(true);
                            verifyEmail();
                        }}>Send Email
                        </button>
                    </>
                }
            </div>
        </div>
    </div>
}

export default VerifyEmail;