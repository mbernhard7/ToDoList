import './TopTab.css'
import {AppModes} from "./SignedInApp";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEdit, faPlus, faSave, faUndo} from '@fortawesome/free-solid-svg-icons'

function TopTab(props) {

    return (
        <div id="topTab">
            <div className='topTabThird first'>
                <select
                    id='sortParameterSelector'
                    value={props.sortParameter}
                    disabled={props.dataLength <= 1 || props.appMode === AppModes.LOADING_MODE}
                    onChange={(e) => props.setSortParameter(e.target.value)}
                >
                    <option aria-label="Increasing by taskname" value="taskName asc">Name &#x2B06;</option>
                    <option aria-label="Decreasing by taskname" value="taskName desc">Name &#x2B07;</option>
                    <option aria-label="Increasing by date created" value="created asc">Date &#x2B06;</option>
                    <option aria-label="Decreasing by date created" value="created desc">Date &#x2B07;</option>
                    <option aria-label="Increasing by priority level"
                            value="priorityLevel asc">Priority &#x2B06;</option>
                    <option aria-label="Decreasing by priority level"
                            value="priorityLevel desc">Priority &#x2B07;</option>
                </select>
            </div>
            <div className='topTabThird'>
                <h1 id="title">To-Do</h1>
            </div>
            <div className='topTabThird last'>
                {props.appMode === AppModes.EDIT_MODE ?
                    <>
                        <button
                            aria-label="Cancel Edits"
                            id="cancelEdits"
                            onClick={() => {
                                props.setDataChanges({})
                                props.setAppMode(AppModes.DEFAULT_MODE)
                            }}
                        >
                            <FontAwesomeIcon icon={faUndo}/>
                        </button>
                        <button
                            aria-label="Save Edits"
                            id="saveEdits"
                            onClick={() => {
                                props.applyDataChanges()
                                props.setAppMode(AppModes.DEFAULT_MODE)
                            }}>
                            <FontAwesomeIcon icon={faSave}/>
                        </button>
                    </>
                    :
                    <>
                        <button
                            aria-label="Edit Button"
                            id="editButton"
                            onClick={() => props.setAppMode(AppModes.EDIT_MODE)}
                            disabled={props.dataLength < 1 || props.appMode !== AppModes.DEFAULT_MODE}
                        >
                            <FontAwesomeIcon icon={faEdit}/>
                        </button>
                        <button
                            aria-label="Add Button"
                            id="addItem"
                            onClick={() => {
                                props.setAppMode(AppModes.ADD_TASK_MODE);
                                console.log(props.appMode)
                            }}
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