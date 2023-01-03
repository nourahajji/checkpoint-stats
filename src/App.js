import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Me from './components/Me';
import { Profiler } from 'react';
import Nou from './components/Nou';
import Pub from './components/Pub';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
   <Navbar/>
   <Me/>
<Nou/>
<Pub/>
    </div>
  );
}

export default App;
