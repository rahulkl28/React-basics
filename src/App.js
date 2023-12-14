import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //Whether the dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert =(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 2000);
  }
  const toggleMode = () => {
    if (mode === 'light') {
        setMode('dark');
        document.body.style.backgroundColor = '#042743';
        showAlert("dark mode has been enabled", "success")
    }
    else {
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("light mode has been enabled", "success")
    }
  };

  return (
    <>
    <BrowserRouter>
    <Navbar title="TextUtils" mode={mode} aboutText="About TextUtils" toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
    {/* /users --> Component 1
        /users/home --> Component 2 */}
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}>     
          </Route>
          <Route exact path="/about" element={<About/>}>
            {/* <About /> */}
          </Route>
    </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
