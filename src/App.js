import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './components/login';
import { SignUp } from './components/register';
import { DashboardContent } from './components/dashboard';
import { Appheader } from './components/appheader';

function App() {
  return (
    
    
      <Routes>
        <Route path='/' element={<Login/>}/>
        {/* <Route path='/superdash' element={<DashboardContent/>}/> */}
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/superdash' element={<Appheader/>}/>
      </Routes>

    
    
    
    
  );
}

export default App;
