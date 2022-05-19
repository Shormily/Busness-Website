import './App.css';
// import { Route, Router, Routes } from 'react-router-dom';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import AboutUS from './Component/AboutUS/About';
import Contact from './Component/Contact/Contact';
import Services from './Component/Services/Services';
import Login from './Component/Login/Login';
import SignUp from './Component/SignUp/SignUp';
import Footer from './Component/Footer/Footer';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import { Route, Routes } from 'react-router-dom';
import AuthProvider from './Component/Context/AuthProvider';
function App() {
  return (
    <div>
    <AuthProvider>
    <Header/>
   <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/aboutus" element={<PrivateRoute><AboutUS/></PrivateRoute>}/>
   <Route path="/contact" element={<PrivateRoute><Contact/></PrivateRoute>}/>
   <Route path="/services" element={<PrivateRoute><Services/></PrivateRoute>}/>
   <Route path="/login" element={<Login/>}/>
   <Route path="/signup" element={  <SignUp/>}/>
   </Routes>
   <Footer/>
    </AuthProvider>
     
    </div>
  );
}

export default App;
