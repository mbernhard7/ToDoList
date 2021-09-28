import './App.css';
import TopTab from "./toptab";
import TaskList from "./tasklist";
import BottomTab from "./bottomtab";
import PopUp from "./popup";

function App(props) {
  return (
    <div className="App">
      <PopUp addMode={false}/>
      <TopTab editMode={false} existsTasks={props.data.length > 0} />
      <TaskList data={props.data}/>
      <BottomTab/>
    </div>
  );
}

export default App;
