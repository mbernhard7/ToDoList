import './TopTab.css'
import {AppModes} from "./App";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEdit} from '@fortawesome/free-solid-svg-icons'

function TopTab(props) {
    return <div id="topTab">
        {
            props.appMode === AppModes.EDIT_MODE ?
                <button
                    id="saveEdits"
                    onClick={() => props.setAppMode(AppModes.DEFAULT_MODE)}
                >Done</button>
                : <button
                    id="editButton"
                    disabled={!props.existsTasks}
                    onClick={() => props.setAppMode(AppModes.EDIT_MODE)}
                ><FontAwesomeIcon icon={faEdit} /></button>
        }
        <h1 id="title">To-Do</h1>
        <button id="addItem"
                disabled={props.appMode !== AppModes.DEFAULT_MODE}
                onClick={() => props.setAppMode(AppModes.ADD_MODE)}
        >+
        </button>
    </div>
}

export default TopTab;