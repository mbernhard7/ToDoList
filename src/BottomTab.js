import './BottomTab.css'
import {AppModes, TasksShowing} from "./App";
import {useState} from "react";

function BottomTab(props) {
    const [idsToBeDeleted, setIDsToBeDeleted] = useState(null);

    return <div id = "footer">
            {props.appMode === AppModes.EDIT_MODE ?
                    <div id="deleteButtonContainer">
                        {idsToBeDeleted === null ?
                            <button
                                type="button"
                                id="deleteCompleted"
                                disabled={props.data.filter(task=>task.isChecked).length === 0}
                                onClick={() => {
                                    setIDsToBeDeleted(props.data.filter(task => task.isChecked).map(task => task.id));
                                }
                                }
                            > Delete All Completed
                            </button>
                            :
                            <button
                                type="button"
                                id="cancel"
                                onClick={() => {
                                    setIDsToBeDeleted(null);
                                }
                                }
                            > Cancel
                            </button>
                        }
                        {idsToBeDeleted === null ?
                            <button
                                type="button"
                                id="deleteAll"
                                disabled={props.data.length === 0}
                                onClick={() => {
                                    setIDsToBeDeleted(props.data.map(task => task.id));
                                }
                                }
                            > Delete All
                            </button>
                            :
                            <button
                                type="button"
                                id="confirm"
                                onClick={() => {
                                    props.onTasksDeleted(idsToBeDeleted);
                                    setIDsToBeDeleted(null);
                                }
                                }
                            > Permanently delete {idsToBeDeleted.length} task{idsToBeDeleted.length>1?'s':''}
                            </button>
                        }
                    </div>
                    :
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
            }
            </div>
}
export default BottomTab;