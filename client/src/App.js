import React, {useState} from 'react'
import Dashboard from './components/Dashboard';
import Loginpage from './components/Loginpage';

function App() {
 

  const [loginLog, setLoginLog] = useState(0);

  const onLogin = (val) =>{
    setLoginLog(val)
    
  }

  return (
   
    <div>
      {loginLog===0?<Loginpage onLogin={onLogin}/>:<Dashboard></Dashboard> }
    </div>
   

   
  );
}

export default App;
