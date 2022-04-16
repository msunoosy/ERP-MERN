import React, {useState} from 'react'
import Dashboard from './components/Dashboard';
import LoginPage from './components/LoginPage';


function App() {

  const [loginLog, setLoginLog] = useState(0);

  const onLogin = (val) =>{
    setLoginLog(val)
    console.log('cccc',val)
  }

  return (
    <div>
      
      {loginLog===0?<LoginPage onLogin={onLogin}/>:<Dashboard></Dashboard>}
    </div>
  );
}

export default App;
