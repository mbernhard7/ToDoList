import './ListSelector.css'
import {AppModes} from "./SignedInApp";
import {faListUl, faUsers} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function ListSelector(props) {

    return <div id='listSelectorRow'>
        <div className="topTabThird first">
            <select
                id='listSelector'
                value={props.currentListID || undefined}
                onChange={(e) => props.setCurrentListID(e.target.value)}
            >
                {props.lists.map(l => <option key={l.id} value={l.id}>{l.listName}</option>)}
            </select>
        </div>
        <div className="topTabThird"/>
        <div className="topTabThird last">
            {props.lists.find(l => l.id === props.currentListID)?.owner === props.user.email &&
            <button id='shareLists' onClick={() => props.setAppMode(AppModes.SHARE_LISTS_MODE)}>
                <FontAwesomeIcon icon={faUsers}/>
            </button>
            }
            <button id='editLists' onClick={() => props.setAppMode(AppModes.EDIT_LISTS_MODE)}>
                <FontAwesomeIcon icon={faListUl}/>
            </button>
        </div>
    </div>
}

export default ListSelector;