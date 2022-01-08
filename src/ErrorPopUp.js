import './ErrorPopUp.css'

function ErrorPopUp(props) {
    return <>
        {props.error &&
        <div id="popUpBackground" className="errorPopUp">
            <div id="popUp">
                <div id="popUpHeader">
                    <button
                        id="closePopUp"
                        onClick={() => window.location.reload(true)}
                    >X
                    </button>
                    <h2 id="errorTitle">ERROR</h2>
                    <button>X</button>
                </div>
                <span
                    id="errorMessage">Type: {JSON.stringify(props.error.name)}<br/>Message: {JSON.stringify(props.error.code)}</span>
            </div>
        </div>
        }
    </>
}

export default ErrorPopUp;
