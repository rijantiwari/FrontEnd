import logo from './logo.svg';
import './App.css';
import RegistrationForm from './RegistrationForm';
import EffectHook from './EffectHook';
import LoginForm from './LoginForm';
import { useState } from 'react';

function App() {
  const[isRegistered, setRegistered] = useState(true);
  return (
    <div className="App">
     
     {isRegistered?<LoginForm/>:<RegistrationForm/>}

     {/* <EffectHook /> */}
    </div>
  );
}

export default App;
