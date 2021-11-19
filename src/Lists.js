import {useState} from "react";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
import firebase from "firebase/compat";
import {useCollection} from "react-firebase-hooks/firestore";
import List from "./List";

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
const listCollectionName = "lists";

function Lists() {
    const [currentListID, setCurrentListID] = useState("1");
    const query = db.collection(listCollectionName);
    const [value, loading, error] = useCollection(query);
    let lists = value?.docs.map(doc => doc.data()) || [];

    function onListAdded(listName, isDefault) {
        const id = generateUniqueID();
        db.collection(listCollectionName).doc(id).set({
            id: id,
            listName: listName,
            isDefault: isDefault,
        });
        setCurrentListID(id);
    }

    async function onListDeleted(id) {
        const tasks = await db.collection(listCollectionName).doc(id).collection('tasks').get();
        await tasks.docs.forEach(doc => doc.ref.delete());
        await db.collection(listCollectionName).doc(id).delete();
        if (currentListID === id) {
            setCurrentListID("1")
        }
    }

    function onListChanged(id, field, newValue) {
        if (field === 'isDefault' && newValue) {
            lists.filter(l => l.id !== id).forEach(l => onListChanged(l.id, 'isDefault',false))
        }
        db.collection(listCollectionName).doc(id).update(
            {[field]: newValue}
        );
    }

    return (
        <List
            collection={db.collection(listCollectionName).doc(currentListID).collection('tasks')}
            lists={lists}
            loading={loading}
            error={error}
            currentListID={currentListID}
            setCurrentListID={setCurrentListID}
            onListAdded={onListAdded}
            onListDeleted={onListDeleted}
            onListChanged={onListChanged}
        />
    )
}

export default Lists