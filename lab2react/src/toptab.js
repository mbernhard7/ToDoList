import './toptab.css'

function TopTab(props) {
    return <div id="topTab">
        {
            props.editMode ?
            <button id="saveEdits">Done</button>
            : <button id="editButton" disabled={!props.existsTasks}>Edit</button>
        }
        <h1 id ="title">To-Do</h1>
        <button id="addItem" disabled={props.editMode}>+</button>
    </div>
}
export default TopTab;