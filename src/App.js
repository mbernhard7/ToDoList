import './App.css';
import TopTab from "./TopTab";
import TaskList from "./TaskList";
import BottomTab from "./BottomTab";
import AddPopUp from "./AddPopUp";
import {useEffect, useState} from "react";
import ErrorPopUp from "./ErrorPopUp";

export const AppModes = {
    ADD_MODE: "add_mode",
    DEFAULT_MODE: "default_mode",
    EDIT_MODE: "edit_mode",
    LOADING_MODE: "loading_mode"
}

export const TasksShowing = {
    ALL: "all",
    UNCOMPLETED: "uncompleted",
}

function App(props) {
    const [appMode, setAppMode] = useState(AppModes.LOADING_MODE);
    const [tasksShowing, setTasksShowing] = useState(TasksShowing.ALL);

    useEffect(() => {
        if (props.loading) {
            setAppMode(AppModes.LOADING_MODE);
        } else {
            setAppMode(AppModes.DEFAULT_MODE);
        }
    }, [props.loading])

    return (
        <div className="App">
            <ErrorPopUp
                error={props.error}
            />
            <AddPopUp
                appMode={appMode}
                setAppMode={setAppMode}
                onItemAdded={props.onTaskAdded}
            />
            <TopTab
                appMode={appMode}
                setAppMode={setAppMode}
                data={props.data}
                onCancelEdits={props.onCancelEdits}
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
