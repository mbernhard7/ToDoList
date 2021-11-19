import {useState} from "react";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
import firebase from "firebase/compat";
import App from "./App";

function List(props) {
    const [sortParameter, setSortParameter] = useState('priorityLevel desc');

    function onTaskAdded(taskName, priorityLevel) {
        const id = generateUniqueID();
        props.collection.doc(id).set({
            id: id,
            taskName: taskName,
            priorityLevel: priorityLevel,
            isChecked: false,
            created: firebase.firestore.FieldValue.serverTimestamp(),
        });
    }

    function onTaskChanged(taskID, field, newValue) {
        props.collection.doc(taskID).update(
            {[field]: newValue}
        );
    }

    function onTasksDeleted(taskIDs) {
        for (let id of taskIDs) {
            props.collection.doc(id).delete();
        }
    }

    return <App lists={props.lists}
                data={[]}
                loading={props.loading}
                error={props.error}
                currentListID={props.currentListID}
                setCurrentListID={props.setCurrentListID}
                onListAdded={props.onListAdded}
                onListDeleted={props.onListDeleted}
                onListChanged={props.onListChanged}
                sortParameter={sortParameter}
                setSortParameter={setSortParameter}
                onTaskAdded={onTaskAdded}
                onTaskChanged={onTaskChanged}
                onTasksDeleted={onTasksDeleted}/>
}

export default List;