import './App.css';

import Navbar from './components/Navbar';
import { Home } from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import { Alert } from './components/Alert';
import Signup from './components/Signup';
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <NoteState>
      <Navbar />
      <Alert message="This is amazing React course" />
        <div className="container">
        <Routes>         
              <Route path="/" element={ <Home />}></Route>
              <Route path="/about" element={ <About />}></Route>
              <Route path="/login" element={ <Login />}></Route>
              <Route path="/signup" element={ <Signup />}></Route> 
        </Routes>
        </div>
      </NoteState>
    </>
  );
}

export default App;
