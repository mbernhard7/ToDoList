import './Task.css'
import {AppModes} from "./App";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'

function Task(props) {

    function getPriorityClass(num) {
        if (num === 1) {
            return 'priorityLevel low';
        } else if (num === 2) {
            return 'priorityLevel medium';
        } else {
            return 'priorityLevel high';
        }
    }

    return (
        <li className="listItem">
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
                                value={props.task.taskName}
                                onChange={(e) => props.onTaskChanged(props.task.id, 'taskName', e.target.value)}
                            />
                            <select
                                className='prioritySelector'
                                value={props.task.priorityLevel}
                                onChange={(e) => props.onTaskChanged(props.task.id, 'priorityLevel', parseInt(e.target.value))}
                            >
                                <option aria-label="Low priority" value='1'>!</option>
                                <option aria-label="Medium priority" value='2'>!!</option>
                                <option aria-label="High priority" value='3'>!!!</option>
                            </select>
                            <button
                                aria-label="Delete task"
                                className="deleteButton"
                                onClick={() => props.onTasksDeleted([props.task.id])}
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
        </li>
    )
}

export default Task;
