
import './App.css';
import  ClassComponent from './ClassComponent';
import ComponentLifeCycle from './ComponentLifeCycle';
import ComponentUnmounting from './ComponentUnmounting';

function App() {
  let name = "rijan";
  let lastName="tiwari"
  return (
    <div className="App">
      {/* <ClassComponent name1={name}/> */}
      <ComponentLifeCycle name1={name} lastName={lastName} />
      <ComponentUnmounting />
    </div>
  );
}

export default App;
