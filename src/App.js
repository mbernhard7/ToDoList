import './App.css';
import TopTab from "./TopTab";
import TaskList from "./TaskList";
import BottomTab from "./BottomTab";
import AddPopUp from "./AddPopUp";
import {useState} from "react";

/* Effectively an enum to store the three possible modes of the app */
export const AppModes = {
    ADD_MODE: "add_mode",
    DEFAULT_MODE: "default_mode",
    EDIT_MODE: "edit_mode",
}

export const TasksShowing = {
    ALL: "all",
    UNCOMPLETED: "uncompleted",
}

function App(props) {
    const [appMode, setAppMode] = useState(AppModes.DEFAULT_MODE);
    const [tasksShowing, setTasksShowing] = useState(TasksShowing.ALL);

    return (
        <div className="App">
            <AddPopUp
                appMode={appMode}
                setAppMode={setAppMode}
                onItemAdded={props.onTaskAdded}
            />
            <TopTab
                appMode={appMode}
                setAppMode={setAppMode}
                existsTasks={props.data.length > 0}
                sortParameter={props.sortParameter}
                setSortParameter={props.setSortParameter}
            />
            <TaskList
                data={props.data}
                appMode={appMode}
                tasksShowing={tasksShowing}
                onTaskChanged={props.onTaskChanged}
                onTasksDeleted={props.onTasksDeleted}
            />
            <BottomTab
                data={props.data}
                appMode={appMode}
                tasksShowing={tasksShowing}
                setTasksShowing={setTasksShowing}
                onTasksDeleted={props.onTasksDeleted}
            />
        </div>
    );
}

export default App;
