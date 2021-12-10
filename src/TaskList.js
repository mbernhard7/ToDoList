import './TaskList.css'
import Task from "./Task";
import {AppModes, TasksShowing} from "./SignedInApp";

function TaskList(props) {
    let tasks = props.data?.filter(task =>
        props.tasksShowing === TasksShowing.ALL ||
        (props.tasksShowing === TasksShowing.UNCOMPLETED && !task.isChecked)
    );

    function addToTaskChangeList(id, changes) {
        props.setDataChanges({...props.dataChanges, [id]: changes})
    }

    return <ul id="itemList">
        {tasks.length > 0 ?
            tasks.map(task => {
                return <Task
                    key={task.id}
                    task={task}
                    onTaskChanged={props.onTaskChanged}
                    appMode={props.appMode}
                    addToTaskChangeList={addToTaskChangeList}
                    taskChangeList={task.id in props.dataChanges ? props.dataChanges[task.id] : {}}
                />
            })
            : <li key='1' id="noItems">
                <h3>{props.appMode === AppModes.EDIT_MODE ?
                    'No tasks to edit.' :
<<<<<<< HEAD
                    props.lists.length===0 ?
                        'You have no lists. Create your first one by clicking the lists icon above!'
                        : 'You have completed all your tasks, woohoo!'
                    }
=======
                    'You have completed all your tasks, woohoo!'}
>>>>>>> 6fa5b392df9e4bd7de8288ba3931bef585624ffa
                </h3>
            </li>
        }
    </ul>
}

export default TaskList;
