import './PopUp.css'
import {AppModes} from "./App";
import {useState} from "react";

function PopUp(props) {
    const [value, setValue] = useState('');

    return (
        <div id="createPopupBackground" className={props.appMode===AppModes.ADD_MODE ? "" : "hidden"}>
            <div id="createPopup">
                <div id="createHeader">
                    <button
                        id="closeCreate"
                        onClick={() => props.setAppMode(AppModes.DEFAULT_MODE)}
                    >X</button>
                    <h2> New Task </h2>
                    <button>X</button>
                </div>
                <form id="createForm">
                    <input
                        id="taskName"
                        type="text"
                        value = {value}
                        onChange = {(e) => setValue(e.target.value)}/>
                    <button id="addTask"
                            onClick={(e) => {
                                e.preventDefault();
                                props.onItemAdded(value);
                                setValue('');
                                props.setAppMode(AppModes.DEFAULT_MODE)
                            }}
                    >Add Task</button>
                </form>
            </div>
        </div>
    )
}
export default PopUp;