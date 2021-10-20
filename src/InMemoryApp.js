import App from "./App";
import {useState} from "react";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
import firebase from "firebase/compat";
import {useCollection} from "react-firebase-hooks/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDbDnRMAuOjcmsEB2iwcbt2_w6SPX-EAQo",
    authDomain: "cs124lab3.firebaseapp.com",
    projectId: "cs124lab3",
    storageBucket: "cs124lab3.appspot.com",
    messagingSenderId: "191143519167",
    appId: "1:191143519167:web:f33464f0d0ede5b538370a",
    measurementId: "G-B8CQHTFNQE"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const collectionName = "tasks";

function InMemoryApp(props) {
    const [sortField, setSortField] = useState('created');
    const query = db.collection(collectionName).orderBy(sortField,'desc');    // Fill in query here
    const [value, loading, error] = useCollection(query);
    const data = value?.docs.map(doc => doc.data()) || [];

    function onTaskAdded(taskName, priorityLevel) {
        const id = generateUniqueID();
        db.collection(collectionName).doc(id).set({
            id: id,
            taskName: taskName,
            priorityLevel: priorityLevel,
            isChecked: false,
            created: firebase.database.ServerValue.TIMESTAMP,
        });
    }

    function onTaskChanged(taskID, field, newValue) {
        db.collection(collectionName).doc(taskID).update(
            {[field]:newValue}
        );
    }

    function onTasksDeleted(taskIDs) {
        for (let id of taskIDs) {
            db.collection(collectionName).doc(id).delete();
        }
    }

    return <App data={data} onTaskAdded={onTaskAdded} onTaskChanged={onTaskChanged} onTasksDeleted={onTasksDeleted}/>
}

export default InMemoryApp;