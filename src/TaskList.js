import './TaskList.css'
import Task from "./Task";
import {AppModes, TasksShowing} from "./App";

function TaskList(props) {
    let tasks = props.data?.filter(task =>
        props.tasksShowing === TasksShowing.ALL ||
        (props.tasksShowing === TasksShowing.UNCOMPLETED && !task.isChecked)
    );
    return <ul id="itemList">
        {props.appMode === AppModes.LOADING_MODE ?
            /* Loader information https://www.w3schools.com/howto/howto_css_loader.asp*/
            <div id="loader"/>
            : <>
                {tasks.length > 0 ?
                    tasks.map(task => {
                        return <Task
                            key={task.id}
                            task={task}
                            appMode={props.appMode}
                            onTaskChanged={props.onTaskChanged}
                            onTasksDeleted={props.onTasksDeleted}
                        />
                    })
                    : <li key='1' id="noItems">
                        <h3>{props.appMode === AppModes.EDIT_MODE ?
                            'No tasks to edit.' :
                            'You have completed all your tasks, woohoo!'}
                        </h3>
                    </li>
                }
            </>
        }
    </ul>
}

export default TaskList;
