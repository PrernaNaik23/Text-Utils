
import { useState } from "react"
import Navbar from "./Components/Navbar"
import TextForm from "./Components/TextForm"
import About from "./Components/About";


const App = () => {
  const [mode,setMode] = useState('dark');
  const [btnText,setBtnText] = useState('Enable dark mode');
  const [showAbout,setShowAbout] = useState(false);

  const toggleMode = () => {
    if (mode === 'light') {
        setMode('dark');
        document.body.style.backgroundColor = '#1A1819';
        setBtnText('Enable light mode');
    } else {
        setMode('light');
        document.body.style.backgroundColor = 'white';
        setBtnText('Enable dark mode');
    }
}
  const toggleAbout =()=>{
    setShowAbout(!showAbout);
  }

  return (
  <>
  <Navbar title="TextUtils" home="Home" about="About TextUtils" mode={mode} toggleMode={toggleMode} toggleAbout={toggleAbout} btnText={btnText}/>
  {showAbout ? <About/> : <TextForm mode={mode} />}
  </>
  )
}

export default App
