import './Popup.css'

function Popup(props) {
    console.log(props);
    return <div id="createPopupBackground" className={props.addMode ? "" : "hidden"}>
        <div id="createPopup">
            <div id="createHeader">
                <button id="closeCreate">X</button>
                <h2> New Task </h2>
                <button>X</button>
            </div>
            <form id="createForm">
                <input id="taskName" type="text" value = ""/>
                <button id="addTask">Add Task</button>
            </form>
        </div>
    </div>
}
export default Popup;