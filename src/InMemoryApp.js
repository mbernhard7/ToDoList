import App from "./App";
import {useState} from "react";

function InMemoryApp(props) {
    const [data, setData] = useState(props.initialData);
    return <App data={data} setData={setData}/>
}

export default InMemoryApp;