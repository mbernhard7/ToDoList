import {useEffect, useState} from "react";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
import firebase from "firebase/compat";
import {useCollection} from "react-firebase-hooks/firestore";
import List from "./List";
import ErrorPopUp from "./ErrorPopUp";
import LoadingPopUp from "./LoadingPopUp";

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

function Lists(props) {
    const [currentListID, setCurrentListID] = useState(null);
    const query = db.collection(listCollectionName).where('sharedWith', 'array-contains', props.user.email);
    const [value, loading, error] = useCollection(query);
    const [lists, setLists] = useState([]);

    useEffect(() => {
        setLists(value?.docs.map(doc => doc.data()) || [])
    }, [value])

    useEffect(() => {
        if (currentListID === null || !(currentListID in lists.map(l => l.id))) {
            setCurrentListID(null);
            if (lists.length > 0) {
                setCurrentListID(lists[0].id);
            }
        }
    }, [currentListID, lists])

    function onListAdded(listName) {
        const id = generateUniqueID();
        db.collection(listCollectionName).doc(id).set({
            id: id,
            listName: listName,
            owner: props.user.email,
            sharedWith: [props.user.email],
        });
    }

    async function onListDeleted(id) {
        if (id === currentListID) {
            setCurrentListID(null);
        }
        const tasks = await db.collection(listCollectionName).doc(id).collection('tasks').get();
        await tasks.docs.forEach(doc => doc.ref.delete());
        await db.collection(listCollectionName).doc(id).delete();
    }

    function onListChanged(id, field, newValue) {
        db.collection(listCollectionName).doc(id).update(
            {[field]: newValue}
        );
    }

    return <>
        <ErrorPopUp
            error={error}
        />
        {loading ?
            <LoadingPopUp/>
            :
            <List
                lists={lists}
                user={props.user}
                auth={props.auth}
                db={db.collection(listCollectionName)}
                currentListID={currentListID}
                setCurrentListID={setCurrentListID}
                onListAdded={onListAdded}
                onListDeleted={onListDeleted}
                onListChanged={onListChanged}
            />
        }
    </>
}

export default Lists