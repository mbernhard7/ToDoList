import './Task.css'
import {AppModes} from "./SignedInApp";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'


function Task(props) {


    function addUpdateToChangeList(field, value) {
        props.addToTaskChangeList(props.task.id, {...props.taskChangeList, [field]: value})
    }

    function getPriorityClass(num) {
        if (num === 1) {
            return 'priorityLevel low';
        } else if (num === 2) {
            return 'priorityLevel medium';
        } else {
            return 'priorityLevel high';
        }
    }

    return <>
        {!('delete' in props.taskChangeList) && <li className="listItem">
            <label className="taskLabel">
                <input
                    className="checkbox"
                    type="checkbox"
                    checked={props.task.isChecked}
                    disabled={props.appMode === AppModes.EDIT_MODE}
                    onChange={(e) => props.onTaskChanged(props.task.id, 'isChecked', e.target.checked)}
                />
                <div className="taskContent">
                    {props.appMode === AppModes.EDIT_MODE ?
                        <>
                            <input
                                className="editInput"
                                type="text"
                                value={props.taskChangeList.taskName !== undefined ?
                                    props.taskChangeList.taskName : props.task.taskName}
                                onChange={(e) => {
                                    addUpdateToChangeList('taskName', e.target.value)
                                }}
                            />
                            <select
                                className='prioritySelector'
                                value={props.taskChangeList?.priorityLevel || props.task.priorityLevel}
                                onChange={(e) =>
                                    addUpdateToChangeList('priorityLevel', parseInt(e.target.value))
                                }
                            >
                                <option aria-label="Low priority" value='1'>!</option>
                                <option aria-label="Medium priority" value='2'>!!</option>
                                <option aria-label="High priority" value='3'>!!!</option>
                            </select>
                            <button
                                aria-label="Delete task"
                                className="deleteButton"
                                onClick={() => {
                                    addUpdateToChangeList('delete', true)
                                }}
                            >
                                <FontAwesomeIcon icon={faTrash} size="xs"/>
                            </button>
                        </>
                        :
                        <>
                            <span className="taskName">{props.task.taskName}</span>
                            <span className={getPriorityClass(props.task.priorityLevel)}>
                                {"!".repeat(props.task.priorityLevel)}
                            </span>
                        </>
                    }
                </div>
            </label>
        </li>}
    </>
}

export default Task;
