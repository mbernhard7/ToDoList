import './TopTab.css'
import {AppModes} from "./App";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEdit, faSort, faPlus, faSave} from '@fortawesome/free-solid-svg-icons'

function TopTab(props) {
    return <div id="topTab">
        <div id='topTabThird'>
            {
                props.appMode === AppModes.EDIT_MODE ?
                    <button
                        id="saveEdits"
                        onClick={() => props.setAppMode(AppModes.DEFAULT_MODE)}
                    >
                        <FontAwesomeIcon icon={faSave} size="xs" />
                    </button>
                    : <>
                        <button
                            id="editButton"
                            disabled={!props.existsTasks}
                            onClick={() => props.setAppMode(AppModes.EDIT_MODE)}
                        >
                            <FontAwesomeIcon icon={faEdit} size="xs" />
                        </button>
                        <button
                            id="sortButton"
                            onClick={() => props.setAppMode(AppModes.EDIT_MODE)}
                        >
                            <FontAwesomeIcon icon={faSort}/>
                        </button>
                    </>
            }
        </div>
        <div id='topTabThird'>
            <h1 id="title">To-Do</h1>
        </div>
        <div id='topTabThird'>
            <button id="addItem"
                    disabled={props.appMode !== AppModes.DEFAULT_MODE}
                    onClick={() => props.setAppMode(AppModes.ADD_MODE)}
            >
                <FontAwesomeIcon icon={faPlus}/>
            </button>
        </div>
    </div>
}

export default TopTab;