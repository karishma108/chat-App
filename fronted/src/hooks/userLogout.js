import { useState } from "react"
import {userAuthContext } from "../context/AuthContext"
import toast from "react-hot-toast"

const userLogout = () => {
  const [loading, setLoading] = useState(false)
  const {setAuthUser} = userAuthContext()

  const logout = async () => { 
    setLoading(true);
    try {
   const res = await fetch("/api/auth/logout",{
    method: "POST",
    headers: {"Context-Type": "application/json"}
   });
   const data = await res.json()
   if(data.error){
    throw new Error(data.error)
   }

   localStorage.removeItem("chat-user")
   setAuthUser(null)
    } catch (error) {
        toast.error(error.message)

    } finally{
        setLoading(false)
    }
  }

  return {loading, logout}

}

export default userLogout;