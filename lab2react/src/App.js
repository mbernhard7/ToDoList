import './App.css';
import TopTab from "./Toptab";
import Tasklist from "./Tasklist";
import BottomTab from "./Bottomtab";
import Popup from "./Popup";

function App(props) {
  return (
    <div className="App">
      <Popup addMode={false}/>
      <TopTab editMode={false} existsTasks={props.data.length > 0} />
      <Tasklist data={props.data}/>
      <BottomTab/>
    </div>
  );
}

export default App;
