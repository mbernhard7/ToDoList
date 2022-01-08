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
                    <h2> Error </h2>
                    <button>X</button>
                </div>
                <span id="errorMessage">{JSON.stringify(props.error)}</span>
            </div>
        </div>
        }
    </>
}

export default ErrorPopUp;
