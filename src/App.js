import './App.css';
import TopTab from "./TopTab";
import TaskList from "./TaskList";
import BottomTab from "./BottomTab";
import AddPopUp from "./AddPopUp";
import {useState} from "react";
import firebase from "firebase/compat";

const firebaseConfig = {
    apiKey: "AIzaSyCcQ6XCOvMIA7pHME4bWBgy_7OVy_7XErA",
    authDomain: "cs124-fall2021.firebaseapp.com",
    projectId: "cs124-fall2021",
    storageBucket: "cs124-fall2021.appspot.com",
    messagingSenderId: "264318304667",
    appId: "1:264318304667:web:4be8d27a02811b1ccd613e"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const collectionName = "people-2-42";

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
