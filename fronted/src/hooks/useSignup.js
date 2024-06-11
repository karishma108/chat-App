import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { userAuthContext } from '../context/AuthContext';

const useSignup = () => {
const [loading,setLoading] = useState(false);
const { setAuthUser} = userAuthContext()

const signup = async({fullName, username, password, confirmPassword, gender}) => {
   const success = handleInputErrors({fullName, username, password, confirmPassword, gender})
   if(!success) return;

   setLoading(true);
   try {
     const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify({fullName, username, password, confirmPassword, gender})
     });

     const data = await res.json();
     if(data.error){
        throw new Error(data.error)
     }
     //localstro
     localStorage.setItem("chat-user", JSON.stringify(data))
     //context
     setAuthUser(data)
     
   } catch (error){
    toast.error(error.message)
   } finally {
    setLoading(false);
   }
};

return {loading, signup}

};

export default useSignup;

function handleInputErrors({fullName, username, password, confirmPassword, gender}){
    if(!fullName || !username || !password || !confirmPassword || !gender){
        toast.error("Please fill in all fields")
        return false
    }

    if(password !== confirmPassword){
        toast.error("password do not match")
        return false
    }

    if(password.length < 6){
        toast.error("password must contain at least 6 characters")
        return false
    }

    return true
}

