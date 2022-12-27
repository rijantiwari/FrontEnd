
import './App.css';
import  ClassComponent from './ClassComponent';
import ComponentLifeCycle from './ComponentLifeCycle';

function App() {
  let name = "rijan";
  let lastName="tiwari"
  return (
    <div className="App">
      {/* <ClassComponent name1={name}/> */}
      <ComponentLifeCycle name1={name} lastName={lastName} />
    </div>
  );
}

export default App;
