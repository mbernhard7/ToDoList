import './Tasklist.css'
import Task from "./Task";

function Tasklist(props) {
    console.log(props.data)
    return <ul id="itemList">
        {props.data?.length > 0 ?
            props.data?.map(task => {
                return <Task key={task.id} task={task}/>
            })
            : <li key='1' id="noItems">
                <h3>You have completed all your tasks, woohoo!</h3>
            </li>}
    </ul>
}
export default Tasklist;