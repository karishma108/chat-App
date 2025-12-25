import { createContext, useState, useEffect, useContext } from "react";
import { userAuthContext } from "./AuthContext";
import io from "socket.io-client";

const SocketContext = createContext();
 
export const useSocketContext = () => {
    return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const { authUser } = userAuthContext();

    useEffect(() => {
        if(authUser) {
            const activeSocket = io("http://localhost:5000", {
                query: {
                    userId: authUser._id,
                },
                withCredentials: true,
            });

            setSocket(activeSocket);

            activeSocket.on("getOnlineUsers", (users) => {
                setOnlineUsers(users);
                console.log("Online users:", users);
            });

            return () => {
                activeSocket.off("getOnlineUsers");
                activeSocket.close();
            };
        } else {
            if(socket) {
                socket.close();
                setSocket(null);
            }
        }
    }, [authUser]);

    return (
        <SocketContext.Provider value={{ socket, onlineUsers }}>
            {children}
        </SocketContext.Provider>
    );
};


