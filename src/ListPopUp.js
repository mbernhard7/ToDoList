import './ListPopUp.css'
import {AppModes} from "./App";
import {useState} from "react";
import {faPlus, faTrash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function ListPopUp(props) {
    const [listName, setListName] = useState("");
    const [toBeDeletedName, setToBeDeletedName] = useState(null);

    return <>
        {props.appMode === AppModes.EDIT_LISTS_MODE &&
        <div id="listPopUpBackground">
            <div id="listPopUp">
                <div id="listHeader">
                    <button
                        id="closeList"
                        disabled={props.lists.length === 0}
                        onClick={() => {
                            setListName("");
                            setToBeDeletedName(null);
                            props.setAppMode(AppModes.DEFAULT_MODE)
                        }}
                    >X
                    </button>
                    <h2> Lists </h2>
                    <button>X</button>
                </div>
                <table id="lists">
                    <thead>
                        <tr>
                            <th>Default</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.lists.map(l => <tr id="list">
                            {toBeDeletedName === l.listName ?
                                <td className="confirmationRow">
                                    <span>Are you sure?</span>
                                    <button
                                        className="cancelDelete"
                                        onClick={() => setToBeDeletedName(null)}
                                    >No</button>
                                    <button
                                        className="delete"
                                        onClick={() => {
                                            props.onListDeleted(l.id);
                                            setToBeDeletedName(null);
                                            }
                                        }
                                    >Yes</button>
                                </td>
                                :
                                <>
                                    <td className='default'>
                                        <input
                                            className="defaultRadio"
                                            type="radio"
                                            checked={l.isDefault}
                                            onChange={() => props.onListChanged(l.id, 'isDefault', true)}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            className="listName"
                                            type="text"
                                            value={l.listName}
                                            onChange={(e)=>props.onListChanged(l.id,'listName',e.target.value)}
                                        />
                                    </td>
                                    <td>
                                        <button
                                            className="deleteButton"
                                            disabled={l.isDefault}
                                            onClick={() => setToBeDeletedName(l.listName)}
                                        >
                                            <FontAwesomeIcon icon={faTrash} size="xs"/>
                                        </button>
                                    </td>
                                </>
                            }
                        </tr>)
                        }
                    </tbody>
                </table>
                <div id='createListRow'>
                    <input
                        type='text'
                        value={listName}
                        placeholder="New list"
                        onChange={(e) => setListName(e.target.value)}
                    />
                    <button id='createNewList'
                            disabled={listName.length === 0}
                            onClick={() => {
                                props.onListAdded(listName, props.lists.length === 0);
                                setListName("");
                            }}
                    >
                        <FontAwesomeIcon icon={faPlus}/>
                    </button>
                </div>
            </div>
        </div>
        }
    </>
}

export default ListPopUp;
