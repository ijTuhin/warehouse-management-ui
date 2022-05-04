import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Authentication/Login/Login';
import Home from './Pages/HomePage/Home';

function App() {
  return (
    <div className='relative'>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/login' element={<Login></Login>}/>
      </Routes>
    </div>
  );
}

export default App;
