import './TaskList.css'
import Task from "./Task";
import {TasksShowing} from "./App";

function TaskList(props) {
    let tasks = props.data?.filter(task =>
        props.tasksShowing === TasksShowing.ALL ||
        (props.tasksShowing === TasksShowing.UNCOMPLETED && !task.isChecked)
    );
    return <ul id="itemList">
        {tasks.length > 0 ?
            tasks.map(task => {
                    return <Task key={task.id} task={task} onTaskChanged={props.onTaskChanged}/>
                })
            : <li key='1' id="noItems">
                <h3>You have completed all your tasks, woohoo!</h3>
            </li>
        }
    </ul>
}
export default TaskList;