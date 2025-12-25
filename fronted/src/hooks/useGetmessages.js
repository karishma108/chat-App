import  { useEffect, useState } from 'react'
import useConversation from '../zustand/useConversation';
import toast from 'react-hot-toast';


const useGetmessages = () => {
   
        const [loading ,setLoading] = useState(false);
        const {messages, setMessages, selectedConversation} = useConversation();
      
        useEffect(() => {
            const getMessages = async () => {
                setLoading(true);
                try {
                 const res = await fetch(`/api/messages/${selectedConversation._id}` , {
                    credentials: "include",
                 });
                 const data = await res.json();
                 if(!res.ok) throw new Error(data.error || "Failed to load messages");
                 setMessages(data);
                } catch (error) {
                    toast.error(error.message);
                } finally {
                    setLoading(false);
                }
             }; 

             if(selectedConversation?._id) getMessages();
        }, [selectedConversation?._id, setMessages]);

        return { messages, loading};
 };
 
export default useGetmessages;