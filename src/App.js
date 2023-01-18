import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Back2Top from './components/Back2Top';
import Login from './pages/Login';
import Home from './pages/Home';
import Produce from './pages/Combined';
import About from './pages/About';
import Help from './pages/Help';
import FarmerPartner from './pages/FarmerPartner';
import SellerCenter from './pages/SellerCenter';
import Veggies from './components/Veggies';
import Fruits from './components/Fruits';
import SHerbs from './components/Sherbs';
import BestSellers from './components/BestSellers';
import Registration from './pages/Registration';
import Cart from './pages/Cart';
import SellerLogin from './pages/SellerLogin';


function App (){
  
return (
    <div className="App">
    <BrowserRouter>
    
    <Navbar/>
    <div>
      <Routes> 
          <Route path="/" element={ <Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/produce" element={<Produce/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/help" element={<Help/>} />
          <Route path="/farmerPartner" element={<FarmerPartner/>} />
          <Route path="/veggies" element={<Veggies/>} />
          <Route path="/fruits" element={<Fruits/>} />
          <Route path="/sherbs" element={<SHerbs/>} />
          <Route path="/best" element={<BestSellers/>} />
          <Route path="/registration" element={<Registration/>} /> 
          <Route path="/sellerCenter" element={<SellerCenter/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/sellerLogin" element={<SellerLogin/>} />
          
      </Routes>
    </div>
    <Back2Top />
    <Footer />
    
    </BrowserRouter>
    
    </div>
  );
}


export default App;