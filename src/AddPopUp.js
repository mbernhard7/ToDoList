import './AddPopUp.css'
import {AppModes} from "./App";
import {useState} from "react";

function AddPopUp(props) {
    const [taskName, setTaskName] = useState('');

    return (
        <div id="createPopupBackground" className={props.appMode === AppModes.ADD_MODE ? "" : "hidden"}>
            <div id="createPopup">
                <div id="createHeader">
                    <button
                        id="closeCreate"
                        onClick={() => {
                            setTaskName('');
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
                    <button id="addTask"
                            type="button"
                            disabled={taskName.length === 0}
                            onClick={() => {
                                props.onItemAdded(taskName);
                                setTaskName('');
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
