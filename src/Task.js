import './Task.css'
import {AppModes} from "./App";

function Task(props) {
    return (
        <li>
        {props.appMode === AppModes.EDIT_MODE ?
            <div className="listItem editInProgress">
                <label>
                    <input
                        className="checkbox"
                        type="checkbox"
                        checked={props.task.isChecked}
                        disabled
                    />
                </label>
                <label>
                    <input
                        className="editInput"
                        type="text"
                        value={props.task.taskName}
                        onChange={(e) => props.onTaskChanged(props.task.id,'taskName',e.target.value)}
                    />
                </label>
                <button
                    className="deleteButton"
                    onClick={() => props.onTasksDeleted([props.task.id])}
                >Delete</button>
            </div>
            :
            <div className="listItem">
                <label>
                    <input
                        className = "checkbox"
                        type="checkbox"
                        checked={props.task.isChecked}
                        onChange={() => props.onTaskChanged(props.task.id, 'isChecked', !props.task.isChecked)}
                    />
                    <span>{props.task.taskName}</span>
                </label>
            </div>
        }
        </li>
    )
}
export default Task;