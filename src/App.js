import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Authentication/Login/Login';
import RequireAuth from './Pages/Authentication/RequireAuth/RequireAuth';
import Home from './Pages/HomePage/Home';
import About from './Pages/Others/About/About';
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
        <Route path='/' element={<Home></Home>} />
        <Route path='/login' element={<Login></Login>} />
        <Route path='/blogs' element={<Blogs></Blogs>} />
        <Route path='/about' element={<About></About>} />
        <Route path='/inventory' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        } />
        <Route path='/manage-inventories' element={
          <RequireAuth>
            <ManageInventories></ManageInventories>
          </RequireAuth>
        } />
        <Route path='/add-items' element={
          <RequireAuth>
            <AddItems></AddItems>
          </RequireAuth>
        } />
        <Route path='/my-items' element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>
        } />
        <Route path='*' element={<PageNotFound></PageNotFound>} />
      </Routes>
    </div>
  );
}

export default App;
