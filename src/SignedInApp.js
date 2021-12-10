import './SignedInApp.css';
import TopTab from "./TopTab";
import TaskList from "./TaskList";
import BottomTab from "./BottomTab";
import AddTaskPopUp from "./AddTaskPopUp";
import {useEffect, useState} from "react";
import ListSelector from "./ListSelector";
import ListPopUp from "./ListPopUp";
import SharePopUp from "./SharePopUp";

export const AppModes = {
    ADD_TASK_MODE: "add_task_mode",
    EDIT_LISTS_MODE: "edit_lists_mode",
    SHARE_LISTS_MODE: "share_lists_mode",
    DEFAULT_MODE: "default_mode",
    EDIT_MODE: "edit_mode"
}

export const TasksShowing = {
    ALL: "all",
    UNCOMPLETED: "uncompleted",
}

function SignedInApp(props) {
    const [appMode, setAppMode] = useState(AppModes.DEFAULT_MODE);
    const [tasksShowing, setTasksShowing] = useState(TasksShowing.ALL);
    const [dataChanges, setDataChanges] = useState({});

    function applyDataChanges() {
        let toDelete = [];
        Object.keys(dataChanges).forEach(function (id) {
            if ('delete' in dataChanges[id]) {
                toDelete.push(id)
            }
            Object.keys(dataChanges[id]).filter(k => k !== 'delete').forEach(function (field) {
                props.onTaskChanged(id, field, dataChanges[id][field])
            })
        });
        if (toDelete.length > 0) {
            props.onTasksDeleted(toDelete);
        }
    }

<<<<<<< HEAD
=======
    useEffect(() => {
        if (props.lists.length === 0 && appMode !== AppModes.EDIT_LISTS_MODE && !props.loading) {
            setAppMode(AppModes.EDIT_LISTS_MODE)
        }
    }, [props.loading, props.lists, appMode])

>>>>>>> 6fa5b392df9e4bd7de8288ba3931bef585624ffa
    return (
        <div className="App">
            {appMode === AppModes.SHARE_LISTS_MODE &&
            <SharePopUp
                appMode={appMode}
                setAppMode={setAppMode}
                user={props.user}
                lists={props.lists}
                onListChanged={props.onListChanged}
                currentListID={props.currentListID}
            />
            }
            {appMode === AppModes.EDIT_LISTS_MODE &&
            <ListPopUp
                appMode={appMode}
                setAppMode={setAppMode}
                lists={props.lists}
                user={props.user}
                onListAdded={props.onListAdded}
                onListChanged={props.onListChanged}
                onListDeleted={props.onListDeleted}
            />
            }
            {appMode === AppModes.ADD_TASK_MODE &&
            <AddTaskPopUp
                appMode={appMode}
                setAppMode={setAppMode}
                onItemAdded={props.onTaskAdded}
            />
            }
            <TopTab
                dataLength={props.data.length}
<<<<<<< HEAD
                lists={props.lists}
=======
>>>>>>> 6fa5b392df9e4bd7de8288ba3931bef585624ffa
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
                user={props.user}
            />
            <TaskList
                data={props.data}
<<<<<<< HEAD
                lists={props.lists}
=======
>>>>>>> 6fa5b392df9e4bd7de8288ba3931bef585624ffa
                onTaskChanged={props.onTaskChanged}
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
                user={props.user}
                auth={props.auth}
            />
        </div>
    );
}

export default SignedInApp;
