import { createContext, useState, useEffect, useContext } from "react";
import { UseAuthContext } from "./AuthContext";
import io from 'socket.io-client';

const SocketContext = createContext();

export const UseSocketContext = () =>{
    return useContext(SocketContext);
}

export const SocketContextProvider = ({children}) => {
    const [socket, setSocket] = useState(null);
    const {auth} = UseAuthContext();

    useEffect(() => {
        console.log(auth);
        if(auth){ 
            const socket = io("http://3.82.158.190:8000",  {
                withCredentials: true,
              });
            setSocket(socket);

            return () => socket.close();
        }else{
            if(socket){
                socket.close();
                setSocket(null);
            }
        }
    },[auth]);

    return(
        <SocketContext.Provider value={{socket}}>
            {children}
        </SocketContext.Provider>
    )
}

