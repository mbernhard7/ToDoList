import './TopTab.css'
import {AppModes} from "./App";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEdit, faPlus, faSave, faUndo} from '@fortawesome/free-solid-svg-icons'
import {useState} from "react";

function TopTab(props) {
    const [previousState, setPreviousState] = useState(null);

    return (
        <div id="topTab">
            <div id='topTabThird'>
                <select
                    id='sortParameterSelector'
                    value={props.sortParameter}
                    disabled={props.data.length <= 1 || props.appMode === AppModes.LOADING_MODE}
                    onChange={(e) => props.setSortParameter(e.target.value)}
                >
                    <option value="taskName asc">Name &#x2B06;</option>
                    <option value="taskName desc">Name &#x2B07;</option>
                    <option value="created asc">Date &#x2B06;</option>
                    <option value="created desc">Date &#x2B07;</option>
                    <option value="priorityLevel asc">Priority &#x2B06;</option>
                    <option value="priorityLevel desc">Priority &#x2B07;</option>
                </select>
            </div>
            <div id='topTabThird'>
                <h1 id="title">To-Do</h1>
            </div>
            <div id='topTabThird'>
                {props.appMode === AppModes.EDIT_MODE ?
                    <>
                        <button id="cancelEdits"
                                onClick={() => {
                                    props.onCancelEdits(previousState)
                                    props.setAppMode(AppModes.DEFAULT_MODE)
                                }}
                        >
                            <FontAwesomeIcon icon={faUndo}/>
                        </button>
                        <button id="saveEdits" onClick={() => props.setAppMode(AppModes.DEFAULT_MODE)}>
                            <FontAwesomeIcon icon={faSave}/>
                        </button>
                    </>
                    :
                    <>
                        <button id="editButton"
                                onClick={() => {
                                    props.setAppMode(AppModes.EDIT_MODE)
                                    setPreviousState(props.data)
                                }}
                                disabled={props.data.length < 1 || props.appMode !== AppModes.DEFAULT_MODE}
                        >
                            <FontAwesomeIcon icon={faEdit}/>
                        </button>
                        <button id="addItem"
                                onClick={() => props.setAppMode(AppModes.ADD_MODE)}
                                disabled={props.appMode !== AppModes.DEFAULT_MODE}
                        >
                            <FontAwesomeIcon icon={faPlus}/>
                        </button>
                    </>
                }
            </div>
        </div>
    )
}

export default TopTab;