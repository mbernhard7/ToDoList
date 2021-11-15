import './ErrorPopUp.css'

function ErrorPopUp(props) {
    return <>
        {props.error &&
        <div id="errorPopUpBackground">
            <div id="errorPopUp">
                <div id="errorHeader">
                    <button
                        id="closeError"
                        onClick={() => window.location.reload(true)}
                    >X
                    </button>
                    <h2>ERROR</h2>
                    <button>X</button>
                </div>
                <span id="errorMessage">Type: {JSON.stringify(props.error.name)}<br/>Message: {JSON.stringify(props.error.code)}</span>
            </div>
        </div>
        }
    </>
}

export default ErrorPopUp;
