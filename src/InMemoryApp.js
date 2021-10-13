import App from "./App";
import {useState} from "react";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";

function InMemoryApp(props) {
    const [data, setData] = useState(props.initialData);

    function onTaskAdded(taskName) {
        setData(data.concat([{
            taskName: taskName,
            id: generateUniqueID(),
            isChecked: false,
        }]));
    }

    function onTaskChanged(taskID, field, newValue) {
        setData(data.map(task => task.id === taskID ? {...task, [field]: newValue} : task))
    }

    function onTasksDeleted(taskIDs) {
        setData(data.filter(task => !taskIDs.includes(task.id)));
    }

    return <App data={data} onTaskAdded={onTaskAdded} onTaskChanged={onTaskChanged} onTasksDeleted={onTasksDeleted}/>
}

export default InMemoryApp;