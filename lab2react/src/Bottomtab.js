import './Bottomtab.css'

function BottomTab(props) {
    return <div id = "footer">
        {props.editMode ?
            <div>
                <button type="button" id="deleteCompleted"> Delete All Completed </button>
                <button type="button" id="deleteAll"> Delete All </button>
            </div>
            :
            <div id="switcherContainer">
                <button type = "button" id="showAll"> All </button>
                <button type = "button" id="showUncompleted"> Uncompleted </button>
            </div>
        }
    </div>;
}
export default BottomTab;