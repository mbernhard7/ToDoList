import './BottomTab.css'
import {AppModes, TasksShowing} from "./App";
import {useState} from "react";

function BottomTab(props) {
    const [deleteSelected, setDeleteSelected] = useState(null);
    const deleteContainer = (
        <div id="deleteButtonContainer">
            {deleteSelected === null ?
                <button
                    type="button"
                    id="deleteCompleted"
                    disabled={props.data.filter(task => task.isChecked).length === 0}
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
                > Permanently delete {deleteSelected} tasks
                </button>
            }
        </div>
    )

    const switcherContainer = (
        <div id="switcherContainer">
            <button
                type="button"
                id="showAll"
                disabled={props.tasksShowing === TasksShowing.ALL}
                onClick={() => props.setTasksShowing(TasksShowing.ALL)}
            > All
            </button>
            <button
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
        </div>
    )
}

export default BottomTab;