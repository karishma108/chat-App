import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './pages/home/home';
import Login from './pages/login/login';
import SignUp from './pages/signup/signup';
import { Toaster } from 'react-hot-toast';
import { userAuthContext } from './context/AuthContext';

function App() {
   const { authUser } = userAuthContext();
   
   console.log('App is rendering'); // Add this for debugging
   console.log('authUser:', authUser); // Add this for debugging

   return (
     <div className='p-4 h-screen flex items-center justify-center'>
      <Routes>
        <Route path="/" element={authUser ? <Home /> : <Navigate to={'/login'} />} />
        <Route path="/login" element={authUser ? <Navigate to="/" /> : <Login />} />
        <Route path="/signup" element={authUser ? <Navigate to="/" /> : <SignUp />} />
      </Routes>
      <Toaster />
     </div>
  );
}

export default App;
