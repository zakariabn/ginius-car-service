import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './components/Pages/About/About';
import Home from './components/Pages/Home/Home';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';
import ServiceDetails from './components/Pages/Home/Services/ServiceDetails/ServiceDetails';
import NotFound from './components/Shared/NotFound/NotFound';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Checkout from './components/Checkout/Checkout';
import RequireAuth from './components/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}>Home</Route>
        <Route path='/home' element={<Home></Home>}>Home</Route>
        <Route path='/service/:serviceId' element={<ServiceDetails></ServiceDetails>}></Route>
        <Route path='/sign-in' element={<Register></Register>}></Route>
        <Route path ='/login' element={<Login></Login>}></Route>
        <Route path='/checkout' element={<RequireAuth><Checkout></Checkout></RequireAuth>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
