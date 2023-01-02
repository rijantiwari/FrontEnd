import logo from './logo.svg';
import './App.css';
import RegistrationForm from './RegistrationForm';
import EffectHook from './EffectHook';
import LoginForm from './LoginForm';
import { useState } from 'react';

function App() {
  const[isRegistered, setRegistered] = useState(false);
  return (
    <div className="App">
     {/* If user is not registered, registration form is shown  */}
     {isRegistered?<LoginForm/>:<RegistrationForm setRegistered={setRegistered}/>}

     {/* <EffectHook /> */}
    </div>
  );
}

export default App;
