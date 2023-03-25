import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Body from './Components/Body/Body';
import Footer from './Components/Footer/Footer';
import LoginBody from './Components/Login/LoginBody';
import AdminBody from './Components/Admin/AdminBody';
function App() {
  return (
    <div className="App">        
      <Header/>
      <Routes>
        <Route path="/" element={<Body/>}></Route>
        <Route path="/Home" element={<Body/>}></Route>
        <Route path="/Login" element={<LoginBody/>}></Route>
        <Route path="/Admin" element={<AdminBody/>}></Route>
      </Routes>
      <Footer/>  
    </div>


)
  }
export default App;
