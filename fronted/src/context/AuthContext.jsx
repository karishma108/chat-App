import { createContext, useContext, useState } from 'react';


export const AuthContext  = createContext();

export const userAuthContext = () => {
    return useContext(AuthContext);
};
export const AuthContextProvider = ({ children }) => {
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("chat-user")) || null);
    
    // return <AuthContext.Provider value={{authUser, setAuthUser}}>  {children} </AuthContext.Provider>;
    useEffect(() => {
        if (authUser) {
          localStorage.setItem("chat-user", JSON.stringify(authUser));
        } else {
          localStorage.removeItem("chat-user");
        }
      }, [authUser]);
    
      const login = (user) => {
        setAuthUser(user);
        localStorage.setItem("chat-user", JSON.stringify(user));
      };
    
      const logout = () => {
        setAuthUser(null);
        localStorage.removeItem("chat-user");
      };
     
      return (
        <AuthContext.Provider value={{ authUser, setAuthUser,login,logout }}>
          {children}
        </AuthContext.Provider>
      );
    };
