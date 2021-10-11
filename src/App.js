import './App.css';
import TopTab from "./TopTab";
import TaskList from "./TaskList";
import BottomTab from "./BottomTab";
import PopUp from "./PopUp";
import {useState} from "react";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";

/* Effectively an enum to store the three possible modes of the app */
export const AppModes = {
    DEFAULT_MODE: "default_mode",
    ADD_MODE: "add_mode",
    EDIT_MODE: "edit_mode",
}

export const TasksShowing = {
    ALL: "all",
    UNCOMPLETED: "uncompleted",
}

function App(props) {
    const [appMode, setAppMode] = useState(AppModes.DEFAULT_MODE);
    const [tasksShowing, setTasksShowing] = useState(TasksShowing.ALL);

    function onTaskChanged(taskID, field, newValue) {
        props.setData(props.data.map(task => task.id === taskID ? {...task, [field]: newValue} : task))
    }

    function onTasksDeleted(taskIDs) {
        props.setData(props.data.filter(task => !taskIDs.includes(task.id)));
    }

    function onTaskAdded(taskName) {
        props.setData(props.data.concat([{
            taskName: taskName,
            id: generateUniqueID(),
            isChecked: false,
        }]));
    }

    return (
        <div className="App">
          <PopUp
              appMode={appMode}
              setAppMode={setAppMode}
              onItemAdded={onTaskAdded}
          />
          <TopTab
              appMode={appMode}
              setAppMode={setAppMode}
              existsTasks={props.data.length > 0}
          />
          <TaskList
              data={props.data}
              tasksShowing={tasksShowing}
              onTaskChanged={onTaskChanged}
              onTasksDeleted={onTasksDeleted}
          />
          <BottomTab
              appMode={appMode}
              tasksShowing={tasksShowing}
              setTasksShowing={setTasksShowing}
              onTasksDeleted={onTasksDeleted}
          />
        </div>
  );
}


export default App;
