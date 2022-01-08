import './ListPopUp.css'
import {AppModes} from "./App";
import {useState} from "react";
import {faPlus, faTrash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function ListPopUp(props) {
    const [listName, setListName] = useState("");
    const [toBeDeletedID, setToBeDeletedID] = useState(null);

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
                            setToBeDeletedID(null);
                            props.setAppMode(AppModes.DEFAULT_MODE)
                        }}
                    >X
                    </button>
                    <h2> Lists </h2>
                    <button>X</button>
                </div>
                <div id="listsContainer">
                    <table id="lists" border="1" frame="void" rules="rows">
                        <thead>
                            <tr>
                                <th className='default'>Default</th>
                                <th className='name'/>
                                <th className='deleteCell'/>
                            </tr>
                        </thead>
                        <tbody>
                            {props.lists.map(l => <tr key={l.id} id="list">
                                {toBeDeletedID === l.id ?
                                    <td colSpan="3" className='confirmCell'>
                                        <span>Delete {l.listName}?</span>
                                        <button
                                            className="cancelDelete"
                                            onClick={() => setToBeDeletedID(null)}
                                        >No</button>
                                        <button
                                            className="deleteConfirm"
                                            onClick={() => {
                                                props.onListDeleted(l.id);
                                                setToBeDeletedID(null);
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
                                        <td className='name'>
                                            <input
                                                className="listName"
                                                type="text"
                                                value={l.listName}
                                                onChange={(e)=>props.onListChanged(l.id,'listName',e.target.value)}
                                            />
                                        </td>
                                        <td className='deleteCell'>
                                            <button
                                                className={l.isDefault ? "hidden" : "deleteListButton"}
                                                disabled={l.isDefault}
                                                onClick={() => setToBeDeletedID(l.id)}
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
                </div>
                <div id='createListRow'>
                    <div id='createInputWrapper'>
                        <input
                            id='createListInput'
                            type='text'
                            value={listName}
                            placeholder="New list"
                            onChange={(e) => setListName(e.target.value)}
                        />
                    </div>
                    <div id='createListWrapper'>
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
        </div>
        }
    </>
}

export default ListPopUp;
