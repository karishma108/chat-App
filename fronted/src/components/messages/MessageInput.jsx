
import { useState } from 'react';
import { BsSend } from 'react-icons/bs'
import useSendmessage from '../../hooks/useSendmessage';

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const {loading, sendMessage} = useSendmessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!message) return;
    await sendMessage(message);
    setMessage("");
  };

  return (
    <form className='flex px-4 my-3' onSubmit={handleSubmit}>
        <div className='w-full relative'>
            <input type='text'
               className='border text-sm rounded-lg block w-full p-2.5 bg-purple-600 border-orange-500 text-white'
               placeholder='Send a message' 
               value={message}
               onChange={(e) => setMessage(e.target.value)}
            />
            <button type='submit' className='absolute inset-y-0 end-0 text-white flex items-center pe-3'>
              {loading ? <div className='loading loading-spinner'></div> : <BsSend size={24} /> } 
            </button>
    </div>
    </form>
  );
};

export default MessageInput;


//starter code

// import { BiSend } from 'react-icons/bi'

// const MessageInput = () => {
//   return (
//     <form className='px-4 my-3'>
//         <div className='w-full relative'>
//             <input type='text'
//                className='border text-sm rounded-lg block w-full p-2.5 bg-purple-600 border-orange-200 text-white'
//                placeholder='Sned a message' 
//             />
//             <button type='submit' className='absolute inset-y-0 end-0 text-white flex items-center pe-3'>
//                 <BiSend size={24} />
//             </button>
//     </div>
//     </form>
//   )
// }

// export default MessageInput


