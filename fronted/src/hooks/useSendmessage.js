import  { useState } from 'react'
import useConversation from '../zustand/useConversation'
import toast from 'react-hot-toast';

const useSendmessage = () => {
 const [loading ,setLoading] = useState(false)
 const { setMessages, selectedConversation} = useConversation();

 const sendMessage = async ({ message, file }) => {
    if (!selectedConversation?._id) {
      toast.error("Select a conversation first");
      return false;
    }

    if (!message && !file) {
      toast.error("Add a message or file to send");
      return false;
    }

    setLoading(true);
    try {
      const formData = new FormData();
      if (message) {
        formData.append("message", message);
      }
      if (file) {
        formData.append("file", file);
      }

      const res = await fetch(`/api/messages/send/${selectedConversation._id}`,{
        method: "POST",
        credentials: "include",
        body : formData,
     });
     const data = await res.json()
      if(!res.ok) throw new Error(data.error || "Failed to send message")

      setMessages((prevMessages) => [...prevMessages, data]);
      return true;
    } catch (error) {
        toast.error(error.message);
        return false;
    } finally {
        setLoading(false);
    }
 };

 return {sendMessage, loading};
}

export default useSendmessage;