import {useState} from "react";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
import firebase from "firebase/compat";
import SignedInApp from "./SignedInApp";
import {useCollection} from "react-firebase-hooks/firestore";

function List(props) {
    const [sortParameter, setSortParameter] = useState('priorityLevel desc');
    const query = props.collection.orderBy(sortParameter.split(' ')[0], sortParameter.split(' ')[1]);
    const [value, loading, error] = useCollection(query);
    const data = value?.docs.map(doc => doc.data()) || [];

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

    return <SignedInApp lists={props.lists}
                        data={data}
                        loading={loading || props.loading}
                        error={error ? error : props.error}
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