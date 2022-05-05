import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Authentication/Login/Login';
import Home from './Pages/HomePage/Home';
import Blogs from './Pages/Others/Blogs/Blogs';
import Inventory from './Pages/Others/Inventory/Inventory';
import PageNotFound from './Pages/Others/PageNotFound/PageNotFound';

function App() {
  return (
    <div className='relative max-h-full'>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/login' element={<Login></Login>}/>
        <Route path='/blogs' element={<Blogs></Blogs>}/>
        <Route path='/inventory' element={<Inventory></Inventory>}/>
        <Route path='*' element={<PageNotFound></PageNotFound>}/>
      </Routes>
    </div>
  );
}

export default App;
