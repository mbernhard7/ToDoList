import './AddTaskPopUp.css'
import {AppModes} from "./SignedInApp";
import {useState} from "react";

function AddTaskPopUp(props) {
    const [taskName, setTaskName] = useState('');
    const [priorityLevel, setPriorityLevel] = useState(1);

    return <>
        {props.appMode === AppModes.ADD_TASK_MODE &&
        <div id="createPopUpBackground">
            <div id="createPopUp">
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
                <form id="createForm" onSubmit={(e) => {
                    e.preventDefault();
                    props.onItemAdded(taskName, priorityLevel);
                    setTaskName('');
                    setPriorityLevel(1);
                    props.setAppMode(AppModes.DEFAULT_MODE);
                }}>
                    <input
                        id="taskName"
                        type="text"
                        value={taskName}
                        onChange={(e) => setTaskName(e.target.value)}
                        autoFocus
                    />
                    <div id="prioritySelector">
                        <button
                            aria-label="Low priority"
                            className="priorityButton"
                            type="button"
                            id="low"
                            disabled={priorityLevel === 1}
                            onClick={() => setPriorityLevel(1)}
                        >Low!
                        </button>
                        <button
                            aria-label="Medium priority"
                            className="priorityButton"
                            type="button"
                            id="medium"
                            disabled={priorityLevel === 2}
                            onClick={() => setPriorityLevel(2)}
                        >Medium!!
                        </button>
                        <button
                            aria-label="High priority"
                            className="priorityButton"
                            type="button"
                            id="high"
                            disabled={priorityLevel === 3}
                            onClick={() => setPriorityLevel(3)}
                        >High!!!
                        </button>
                    </div>
                    <button id="addTask"
                            type="submit"
                            disabled={taskName.length === 0}
                    >Add Task
                    </button>
                </form>
            </div>
        </div>
        }
    </>
}

export default AddTaskPopUp;
