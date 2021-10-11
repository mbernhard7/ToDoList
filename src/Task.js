import './Task.css'

function Task(props) {
    return <li className="listItem">
        <label>
            <input
                className = "checkbox"
                type="checkbox"
                checked={props.task.isChecked}
                onChange={() => props.onTaskChanged(props.task.id, 'isChecked', !props.task.isChecked)}
            />
            <span>{props.task.taskName}</span>
        </label>
    </li>
}
export default Task;