import './BottomTab.css'
import {AppModes, TasksShowing} from "./App";

function BottomTab(props) {
    return <div id = "footer">
        {props.appMode === AppModes.EDIT_MODE ?
            <div>
                <button type="button" id="deleteCompleted"> Delete All Completed </button>
                <button type="button" id="deleteAll"> Delete All </button>
            </div>
            :
            <div id="switcherContainer">
                <button
                    type = "button"
                    id="showAll"
                    disabled={props.tasksShowing === TasksShowing.ALL}
                    onClick={() => props.setTasksShowing(TasksShowing.ALL)}
                > All </button>
                <button
                    type = "button"
                    id="showUncompleted"
                    disabled={props.tasksShowing === TasksShowing.UNCOMPLETED}
                    onClick={() => props.setTasksShowing(TasksShowing.UNCOMPLETED)}
                > Uncompleted </button>
            </div>
        }
    </div>;
}
export default BottomTab;