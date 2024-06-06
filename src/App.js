import { Provider } from 'react-redux';
import Router from './router';
import './styles/App.css'
import { useState } from 'react';
function App() {
  let [OpenNavbar,setOpenNavbar] = useState(0);
  return (
    <main>
        <Router state={[OpenNavbar,setOpenNavbar]}/>
    </main>
  );
}

export default App;
