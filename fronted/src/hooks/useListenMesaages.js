import { useEffect } from 'react'
import { useSocketContext } from '../context/socketContext';
import useConversation from '../zustand/useConversation';

const useListenMesaages = () => {
    const { socket } = useSocketContext();
    const { selectedConversation, setMessages } = useConversation();

    useEffect(() => {
        if(!socket) return;

        const handleNewMessage = (newMessage) => {
            if(
                !selectedConversation ||
                (newMessage.senderId !== selectedConversation._id &&
                 newMessage.receiverId !== selectedConversation._id)
            ) {
                return;
            }

            setMessages((prevMessages) => {
                const alreadyExists = prevMessages.some((msg) => msg._id === newMessage._id);
                if(alreadyExists) return prevMessages;
                return [...prevMessages, { ...newMessage, shouldShake: true }];
            });
        };

        socket.on("newMessage", handleNewMessage);

        return () => {
            socket.off("newMessage", handleNewMessage);
        }
    }, [socket, setMessages, selectedConversation]);
}

export default useListenMesaages;