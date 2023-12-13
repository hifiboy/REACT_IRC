import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Register from './components/Register';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Register/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
