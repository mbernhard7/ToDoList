import './Task.css'
import {AppModes} from "./App";

function Task(props) {
    return (
        <li className={props.appMode === AppModes.EDIT_MODE ? "listItem editInProgress" : "listItem"}>
            <label>
                <input
                    className="checkbox"
                    type="checkbox"
                    checked={props.task.isChecked}
                    disabled={props.appMode === AppModes.EDIT_MODE}
                    onChange={(e) => props.onTaskChanged(props.task.id, 'isChecked', e.target.checked)}
                />
                {props.appMode !== AppModes.EDIT_MODE && <span>{props.task.taskName}</span>}
            </label>
            {props.appMode === AppModes.EDIT_MODE &&
            <>
                <label>
                    <input
                        className="editInput"
                        type="text"
                        value={props.task.taskName}
                        onChange={(e) => props.onTaskChanged(props.task.id, 'taskName', e.target.value)}
                    />
                </label>
                <button
                    className="deleteButton"
                    onClick={() => props.onTasksDeleted([props.task.id])}
                >Delete
                </button>
            </>
            }
        </li>
    )
}

export default Task;