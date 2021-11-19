import './App.css';
import TopTab from "./TopTab";
import TaskList from "./TaskList";
import BottomTab from "./BottomTab";
import AddTaskPopUp from "./AddTaskPopUp";
import {useEffect, useState} from "react";
import ErrorPopUp from "./ErrorPopUp";
import ListSelector from "./ListSelector";
import ListPopUp from "./ListPopUp";

export const AppModes = {
    ADD_TASK_MODE: "add_task_mode",
    EDIT_LISTS_MODE: "add_list_mode",
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
    const [dataChanges, setDataChanges] = useState({});

    function applyDataChanges(){
        let toDelete = [];
        Object.keys(dataChanges).forEach(function (id) {
            if ('delete' in dataChanges[id]) {
                toDelete.push(id)
            }
            Object.keys(dataChanges[id]).filter(k => k!=='delete').forEach(function (field) {
                props.onTaskChanged(id, field, dataChanges[id][field])
            })
        });
        if (toDelete.length > 0) {
            props.onTasksDeleted(toDelete);
        }
    }

    useEffect(() => {
        if (props.loading) {
            setAppMode(AppModes.LOADING_MODE);
        } else {
            if (props.lists.length === 0 || appMode === AppModes.EDIT_LISTS_MODE) {
                setAppMode(AppModes.EDIT_LISTS_MODE)
            } else {
                setAppMode(AppModes.DEFAULT_MODE);
            }
        }
    }, [props.loading, props.lists, appMode])

    return (
        <div className="App">
            <ErrorPopUp
                error={props.error}
            />
            <ListPopUp
                appMode={appMode}
                setAppMode={setAppMode}
                lists={props.lists}
                onListAdded={props.onListAdded}
                onListChanged={props.onListChanged}
                onListDeleted={props.onListDeleted}
            />
            <AddTaskPopUp
                appMode={appMode}
                setAppMode={setAppMode}
                onItemAdded={props.onTaskAdded}
            />
            <TopTab
                dataLength={props.data.length}
                appMode={appMode}
                setAppMode={setAppMode}
                applyDataChanges={applyDataChanges}
                setDataChanges={setDataChanges}
                sortParameter={props.sortParameter}
                setSortParameter={props.setSortParameter}
            />
            <ListSelector
                currentListID={props.currentListID}
                setCurrentListID={props.setCurrentListID}
                lists={props.lists}
                setAppMode={setAppMode}
            />
            <TaskList
                data={props.data}
                appMode={appMode}
                tasksShowing={tasksShowing}
                setDataChanges={setDataChanges}
                dataChanges={dataChanges}
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
