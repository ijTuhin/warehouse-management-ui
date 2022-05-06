import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Authentication/Login/Login';
import Home from './Pages/HomePage/Home';
import AddItems from './Pages/Others/AddItems/AddItems';
import Blogs from './Pages/Others/Blogs/Blogs';
import Inventory from './Pages/Others/Inventory/Inventory';
import ManageInventories from './Pages/Others/ManageInventories/ManageInventories';
import MyItems from './Pages/Others/MyItems/MyItems';
import PageNotFound from './Pages/Others/PageNotFound/PageNotFound';

function App() {
  return (
    <div className='relative max-h-full'>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/login' element={<Login></Login>}/>
        <Route path='/blogs' element={<Blogs></Blogs>}/>
        <Route path='/inventory' element={<Inventory></Inventory>}/>
        <Route path='/manage-inventories' element={<ManageInventories></ManageInventories>}/>
        <Route path='/add-items' element={<AddItems></AddItems>}/>
        <Route path='/my-items' element={<MyItems></MyItems>}/>
        <Route path='*' element={<PageNotFound></PageNotFound>}/>
      </Routes>
    </div>
  );
}

export default App;
