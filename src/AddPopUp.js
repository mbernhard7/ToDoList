import './AddPopUp.css'
import {AppModes} from "./App";
import {useState} from "react";

function AddPopUp(props) {
    const [value, setValue] = useState('');

    return (
        <div id="createPopupBackground" className={props.appMode===AppModes.ADD_MODE ? "" : "hidden"}>
            <div id="createPopup">
                <div id="createHeader">
                    <button
                        id="closeCreate"
                        onClick={() => {
                            setValue('');
                            props.setAppMode(AppModes.DEFAULT_MODE)
                        }}
                    >X</button>
                    <h2> New Task </h2>
                    <button>X</button>
                </div>
                <form id="createForm">
                    <input
                        id="taskName"
                        type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}/>
                    <button id="addTask"
                            disabled={value.length === 0}
                            onClick={(e) => {
                                e.preventDefault();
                                props.onItemAdded(value);
                                setValue('');
                                props.setAppMode(AppModes.DEFAULT_MODE);
                            }}
                    >Add Task</button>
                </form>
            </div>
        </div>
    )
}
export default AddPopUp;
