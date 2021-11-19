import './ListSelector.css'
import {AppModes} from "./App";
import {faListUl} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function ListSelector(props) {

    return <div id='listSelectorRow'>
        <div className="topTabThird">
            <select
                id='listSelector'
                value={props.currentListID}
                onChange={(e) => props.setCurrentListID(e.target.value)}
            >
                {props.lists.map(l => <option value={l.id}>{l.listName}</option>)}
            </select>
        </div>
        <div className="topTabThird"/>
        <div className="topTabThird">
            <button id='editLists' onClick={()=>props.setAppMode(AppModes.EDIT_LISTS_MODE)}>
                <FontAwesomeIcon icon={faListUl}/>
            </button>
        </div>
    </div>
}
export default ListSelector;