import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Authentication/Login/Login';
import Footer from './Pages/Common/Footer/Footer';
import Header from './Pages/Common/Header/Header';
import Home from './Pages/HomePage/Home';

function App() {
  return (
    <div className='relative'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/login' element={<Login></Login>}/>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
