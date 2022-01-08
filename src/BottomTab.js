import './BottomTab.css'
import {AppModes, TasksShowing} from "./SignedInApp";
import {useState} from "react";

function BottomTab(props) {
    const [deleteSelected, setDeleteSelected] = useState(null);

    function getConfirmationText(numTasks) {
        return numTasks > 1 ? numTasks + " tasks" : numTasks + " task"
    }

    const deleteContainer = (
        <div id="deleteButtonContainer">
            {deleteSelected === null ?
                <button
                    type="button"
                    id="deleteCompleted"
                    disabled={props.tasksShowing === TasksShowing.UNCOMPLETED
                    || props.data.filter(task => task.isChecked).length === 0}
                    onClick={() => setDeleteSelected('completed')}
                > Delete All Completed
                </button>
                :
                <button
                    type="button"
                    id="cancel"
                    onClick={() => setDeleteSelected(null)}
                > Cancel
                </button>
            }
            {deleteSelected === null ?
                <button
                    type="button"
                    id="deleteAll"
                    disabled={props.data.length === 0}
                    onClick={() => {
                        setDeleteSelected('all');
                    }
                    }
                > Delete All
                </button>
                :
                <button
                    type="button"
                    id="confirm"
                    onClick={() => {
                        props.onTasksDeleted(deleteSelected === 'all' ?
                            props.data.map(task => task.id)
                            : props.data.filter(task => task.isChecked).map(task => task.id)
                        );
                        setDeleteSelected(null);
                    }
                    }
                > Delete {deleteSelected === 'all' ?
                    getConfirmationText(props.data.length)
                    : getConfirmationText(props.data.filter(task => task.isChecked).length)}
                </button>
            }
        </div>
    )

    const switcherContainer = (
        <div aria-label="Select Shown Tasks" id="switcherContainer">
            <button
                aria-label="Show All Tasks"
                type="button"
                id="showAll"
                disabled={props.tasksShowing === TasksShowing.ALL}
                onClick={() => props.setTasksShowing(TasksShowing.ALL)}
            > All
            </button>
            <button
                aria-label="Show Uncompleted Tasks"
                type="button"
                id="showUncompleted"
                disabled={props.tasksShowing === TasksShowing.UNCOMPLETED}
                onClick={() => props.setTasksShowing(TasksShowing.UNCOMPLETED)}
            > Uncompleted
            </button>
        </div>
    )
    return (
        <div id="footer">
            {props.appMode === AppModes.EDIT_MODE ? deleteContainer : switcherContainer}
            <div id="signOutRow">
                <span>{props.user.email}</span>
                <button id='signOutButton' onClick={() => props.auth.signOut()}>Sign Out</button>
            </div>
        </div>
    )
}

export default BottomTab;