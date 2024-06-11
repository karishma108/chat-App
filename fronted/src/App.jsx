import { Routes,Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './pages/home/home';
import Login from './pages/login/login';
import SignUp from './pages/signup/signup';
import { Toaster } from 'react-hot-toast';
import { userAuthContext } from './context/AuthContext';



function App() {
   const {authUser} = userAuthContext();
 return (

     <div className='p-4 h-screen flex items-center justify-center'>
      
      <Routes>
        <Route path="/" element={ authUser ? <Home /> :  <Navigate to={'/Login'} /> } />
        <Route path="/login" element={authUser ? <Navigate to="/" /> : <Login /> } />
        <Route path="/signup" element={authUser ? <Navigate to="/" /> : <SignUp /> } />
      </Routes>
      <Toaster/>
     </div>
  );
}

export default App;
