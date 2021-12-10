import './PopUp.css'
import './TablePopUp.css'
import './ListPopUp.css'
import {AppModes} from "./SignedInApp";
import {useState} from "react";
import {faDoorOpen, faPlus, faTrash, faUsers} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function ListPopUp(props) {
    const [listName, setListName] = useState("");
    const [toBeDeletedID, setToBeDeletedID] = useState(null);


    function getListRow(l) {
        return <>
            {l.owner === props.user.email ?
                <td className='listNameCell'>
                    <input
                        className="listNameInput"
                        type="text"
                        value={l.listName}
                        onChange={(e) => props.onListChanged(l.id, 'listName', e.target.value)}
                    />
                </td>
                :
                <td className='sharedEmailCell'>
                    <span>{l.listName}</span>
                </td>
            }
            <td className='sharedCell'>
                {l.sharedWith.length > 1 &&
                <FontAwesomeIcon icon={faUsers} size="xs"/>
                }
            </td>
            <td className='deleteCell'>
                <button
                    className="deleteListButton"
                    onClick={() => setToBeDeletedID(l.id)}
                >
                    {l.owner === props.user.email ?
                        <FontAwesomeIcon icon={faTrash} size="xs"/>
                        :
                        <FontAwesomeIcon icon={faDoorOpen} size="xs"/>
                    }
                </button>
            </td>
        </>
    }

    function getListDeleteRow(l) {
        return <td colSpan="3" className='confirmCell'>
            <span>{(l.owner === props.user.email ? "Delete " : "Leave ") + l.listName}?</span>
            <button
                className="cancelButton"
                onClick={() => setToBeDeletedID(null)}
            >No
            </button>
            <button
                className="confirmButton"
                onClick={() => {
                    if (l.owner === props.user.email) {
                        props.onListDeleted(l.id);
                        setToBeDeletedID(null);
                    } else {
                        props.onListChanged(l.id,
                            'sharedWith',
                            l.sharedWith.filter(e => e !== props.user.email)
                        );
                    }
                }
                }
            >Yes
            </button>
        </td>
    }

    return (
        <div id="popUpBackground">
            <div id="popUp">
                <div id="popUpHeader">
                    <button
                        id="closePopUp"
<<<<<<< HEAD
=======
                        disabled={props.lists.length === 0}
>>>>>>> 6fa5b392df9e4bd7de8288ba3931bef585624ffa
                        onClick={() => {
                            setListName("");
                            setToBeDeletedID(null);
                            props.setAppMode(AppModes.DEFAULT_MODE)
                        }}
                    >X
                    </button>
                    <h2 id="tableTitle"> Lists </h2>
                    <button>X</button>
                </div>
                {props.lists.length > 0 ?
                    <div id="tableContainer">
                        <table id="table" border="1" frame="void" rules="rows">
                            <thead>
                            <tr className="tableHeaderRow">
                                <th className='listNameCell'>Name</th>
                                <th className='sharedCell'>Shared</th>
                                <th className='deleteCell'>Delete</th>
                            </tr>
                            </thead>
                            <tbody>
                            {props.lists.map(l => <tr key={l.id} className="tableRow">
                                {toBeDeletedID === l.id ?
                                    getListDeleteRow(l)
                                    :
                                    getListRow(l)
                                }
                            </tr>)
                            }
                            </tbody>
                        </table>
                    </div>
                    :
                    <div id='messageContainer'>
                        <h3>Create your first list!</h3>
                    </div>
                }
                <form id='createRow'>
                    <div id='createInputWrapper'>
                        <input
                            id='createInput'
                            type='text'
                            value={listName}
                            placeholder="New list"
                            onChange={(e) => setListName(e.target.value)}
                        />
                    </div>
                    <div id='createButtonWrapper'>
                        <button id='createNewButton'
                                type="submit"
                                disabled={listName.length === 0}
                                onClick={(e) => {
                                    e.preventDefault();
                                    props.onListAdded(listName, props.lists.length === 0);
                                    setListName("");
                                }}
                        >
                            <FontAwesomeIcon icon={faPlus}/>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ListPopUp;
