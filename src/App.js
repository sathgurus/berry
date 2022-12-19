import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './components/login';
import { Dashboard } from './components/dashboard';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/superdash' element={<Dashboard/>}/>
      </Routes>

    </BrowserRouter>
    
    
    </>
  );
}

export default App;
