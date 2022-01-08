import './PopUp.css'
import './TablePopUp.css'
import './SharePopUp.css'
import {AppModes} from "./SignedInApp";
import {useState} from "react";
import {faPlus, faUndo, faUserCog} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {validateEmail} from "./SignUpSignIn";

function SharePopUp(props) {
    const [userEmail, setUserEmail] = useState("");
    const [toBeRemovedEmail, setToBeRemovedEmail] = useState(null);
    const [toBeMadeOwner, setToBeMadeOwner] = useState(null);
    const [toBeEdited, setToBeEdited] = useState(null);
    const currentList = props.lists.find(l => l.id === props.currentListID);


    function getUserRow(p) {
        return <>
            <td className='sharedEmailCell'>
                <span>{p}</span>
            </td>
            <td className='manageCell'>
                <button
                    className="manageButton"
                    onClick={() => setToBeEdited(p)}
                >
                    <FontAwesomeIcon icon={faUserCog} size="xs"/>
                </button>
            </td>
        </>
    }

    function getManageRow(p) {
        return <>
            <td className='sharedEmailCell'>
                <button
                    className="makeOwnerButton"
                    onClick={() => setToBeMadeOwner(p)}
                >Make Owner
                </button>
                <button
                    className="removeUserButton"
                    onClick={() => setToBeRemovedEmail(p)}
                >Remove
                </button>
            </td>
            <td className='manageCell'>
                <button
                    className="cancelManageButton"
                    onClick={() => setToBeEdited(null)}
                ><FontAwesomeIcon icon={faUndo} size="xs"/>
                </button>
            </td>
        </>
    }

    function getConfirmRow(p) {
        return <td colSpan="3" className='confirmCell'>
            <span>
                {p + ":"}<br/>
                {toBeRemovedEmail === p ? "Remove from list?" : "Make owner? (You will lose ownership)"}
            </span>
            <button
                className="cancelButton"
                onClick={() => toBeRemovedEmail === p ?
                    setToBeRemovedEmail(null) : setToBeMadeOwner(null)}
            >No
            </button>
            <button
                className="confirmButton"
                onClick={() => {
                    if (toBeRemovedEmail === p) {
                        setToBeRemovedEmail(null);
                        setToBeEdited(null);
                        props.onListChanged(props.currentListID,
                            'sharedWith',
                            currentList.sharedWith.filter(e => e !== p)
                        );
                    } else {
                        props.onListChanged(props.currentListID, 'owner', p);
                        props.setAppMode(AppModes.DEFAULT_MODE);
                    }
                }
                }
            >Yes
            </button>
        </td>
    }

    function getRow(p) {
        if ([toBeRemovedEmail, toBeMadeOwner].includes(p)) {
            return getConfirmRow(p);
        }
        if (p === toBeEdited) {
            return getManageRow(p);
        }
        return getUserRow(p);
    }

    return <div id="popUpBackground">
        <div id="popUp">
            <div id="popUpHeader">
                <button
                    id="closePopUp"
                    disabled={props.lists.length === 0}
                    onClick={() => {
                        setUserEmail("");
                        setToBeRemovedEmail(null);
                        setToBeMadeOwner(null);
                        props.setAppMode(AppModes.DEFAULT_MODE)
                    }}
                >X
                </button>
                <h2 id='tableTitle'>Share List:<br/>{currentList.listName}</h2>
                <button>X</button>
            </div>
            {currentList.sharedWith.filter(e => e !== props.user.email).length > 0 ?
                <div id="tableContainer">
                    <table id="table" border="1" frame="void" rules="rows">
                        <thead>
                        <tr className="tableHeaderRow">
                            <th className='sharedEmailCell'>Email</th>
                            <th className='manageCell'>Settings</th>
                        </tr>
                        </thead>
                        <tbody>
                        {currentList.sharedWith.filter(e => e !== props.user.email).map(p =>
                            <tr key={p} className="tableRow">
                                {getRow(p)}
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
                :
                <div id='messageContainer'>
                    <h3>Add another user below!</h3>
                </div>
            }
            <form id='createRow'>
                <div id='createInputWrapper'>
                    <input
                        id='createInput'
                        type="email"
                        value={userEmail}
                        placeholder="User email"
                        onChange={(e) => setUserEmail(e.target.value)}
                    />
                </div>
                <div id='createButtonWrapper'>
                    <button id='createNewButton'
                            type="submit"
                            disabled={!validateEmail(userEmail) || currentList.sharedWith.includes(userEmail)}
                            onClick={(e) => {
                                e.preventDefault();
                                props.onListChanged(props.currentListID, 'sharedWith', currentList.sharedWith.concat([userEmail]))
                                setUserEmail("");
                            }}
                    >
                        <FontAwesomeIcon icon={faPlus}/>
                    </button>
                </div>
            </form>
        </div>
    </div>
}

export default SharePopUp;
