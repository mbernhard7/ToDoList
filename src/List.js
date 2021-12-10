import {useEffect, useState} from "react";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
import firebase from "firebase/compat";
import SignedInApp from "./SignedInApp";
import {useCollection} from "react-firebase-hooks/firestore";
import ErrorPopUp from "./ErrorPopUp";
import LoadingPopUp from "./LoadingPopUp";

function List(props) {
    const [sortParameter, setSortParameter] = useState('priorityLevel desc');
    const [query, setQuery] = useState(null);

    useEffect(() => {
        if (props.currentListID) {
            props.db.doc(props.currentListID).get().then(doc => {
                if (doc.exists) {
                    setQuery(props.db.doc(props.currentListID).collection('tasks').orderBy(sortParameter.split(' ')[0], sortParameter.split(' ')[1]));
                } else {
                    setQuery(null);
                }
            }).catch((e) => e);
        } else {
            setQuery(null);
        }
    }, [props.currentListID, props.db, sortParameter])

    const [value, loading, error] = useCollection(query);
    const data = value?.docs.map(doc => doc.data()) || [];
    function onTaskAdded(taskName, priorityLevel) {
        const id = generateUniqueID();
        props.db.doc(props.currentListID).collection('tasks').doc(id).set({
            id: id,
            taskName: taskName,
            priorityLevel: priorityLevel,
            isChecked: false,
            created: firebase.firestore.FieldValue.serverTimestamp(),
        });
    }

    function onTaskChanged(taskID, field, newValue) {
        props.db.doc(props.currentListID).collection('tasks').doc(taskID).update(
            {[field]: newValue}
        );
    }

    function onTasksDeleted(taskIDs) {
        for (let id of taskIDs) {
            props.db.doc(props.currentListID).collection('tasks').doc(id).delete();
        }
    }

    return <>
        <ErrorPopUp
            error={error}
        />
<<<<<<< HEAD
        {loading && <LoadingPopUp/>}
        <SignedInApp
            lists={props.lists}
            data={data}
            user={props.user}
            auth={props.auth}
            currentListID={props.currentListID}
            setCurrentListID={props.setCurrentListID}
            onListAdded={props.onListAdded}
            onListDeleted={props.onListDeleted}
            onListChanged={props.onListChanged}
            sortParameter={sortParameter}
            setSortParameter={setSortParameter}
            onTaskAdded={onTaskAdded}
            onTaskChanged={onTaskChanged}
            onTasksDeleted={onTasksDeleted}
        />
=======
        {loading ?
            <LoadingPopUp/>
            :
            <SignedInApp
                lists={props.lists}
                data={data}
                user={props.user}
                auth={props.auth}
                currentListID={props.currentListID}
                setCurrentListID={props.setCurrentListID}
                onListAdded={props.onListAdded}
                onListDeleted={props.onListDeleted}
                onListChanged={props.onListChanged}
                sortParameter={sortParameter}
                setSortParameter={setSortParameter}
                onTaskAdded={onTaskAdded}
                onTaskChanged={onTaskChanged}
                onTasksDeleted={onTasksDeleted}
            />
        }
>>>>>>> 6fa5b392df9e4bd7de8288ba3931bef585624ffa
    </>
}

export default List;