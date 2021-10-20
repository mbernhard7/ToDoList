import './AddPopUp.css'
import {AppModes, TasksShowing} from "./App";
import {useState} from "react";

function AddPopUp(props) {
    const [taskName, setTaskName] = useState('');
    const [priorityLevel, setPriorityLevel] = useState(1);

    return (
        <div id="createPopupBackground" className={props.appMode === AppModes.ADD_MODE ? "" : "hidden"}>
            <div id="createPopup">
                <div id="createHeader">
                    <button
                        id="closeCreate"
                        onClick={() => {
                            setTaskName('');
                            setPriorityLevel(1);
                            props.setAppMode(AppModes.DEFAULT_MODE)
                        }}
                    >X
                    </button>
                    <h2> New Task </h2>
                    <button>X</button>
                </div>
                <form id="createForm">
                    <input
                        id="taskName"
                        type="text"
                        value={taskName}
                        onChange={(e) => setTaskName(e.target.value)}/>
                    <div id="prioritySelector">
                        <button
                            className="priorityButton"
                            type="button"
                            id="low"
                            disabled={priorityLevel === 1}
                            onClick={() => setPriorityLevel(1)}
                        >Low</button>
                        <button
                            className="priorityButton"
                            type="button"
                            id="medium"
                            disabled={priorityLevel === 2}
                            onClick={() => setPriorityLevel(2)}
                        >Medium</button>
                        <button
                            className="priorityButton"
                            type="button"
                            id="high"
                            disabled={priorityLevel === 3}
                            onClick={() => setPriorityLevel(3)}
                        >High</button>
                    </div>
                    <button id="addTask"
                            type="button"
                            disabled={taskName.length === 0}
                            onClick={() => {
                                props.onItemAdded(taskName, priorityLevel);
                                setTaskName('');
                                setPriorityLevel(1);
                                props.setAppMode(AppModes.DEFAULT_MODE);
                            }}
                    >Add Task
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AddPopUp;
