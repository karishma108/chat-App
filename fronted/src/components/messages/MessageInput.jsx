import { useRef, useState } from 'react';
import { BsSend } from 'react-icons/bs'
import { HiOutlinePaperClip } from 'react-icons/hi'
import { MdClose } from 'react-icons/md'
import useSendmessage from '../../hooks/useSendmessage';

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);
  const {loading, sendMessage} = useSendmessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmedMessage = message.trim();
    if(!trimmedMessage && !selectedFile) return;
    const success = await sendMessage({ message: trimmedMessage, file: selectedFile });
    if (success) {
      setMessage("");
      setSelectedFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handlePickFile = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleClearFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <form className='flex flex-col gap-2 px-4 my-3' onSubmit={handleSubmit}>
        <div className='flex items-center gap-2'>
          <button
            type='button'
            onClick={handlePickFile}
            className='flex items-center justify-center w-10 h-10 rounded-full bg-purple-600 text-white hover:bg-purple-500 transition disabled:opacity-60'
            disabled={loading}
            aria-label='Attach file'
          >
            <HiOutlinePaperClip size={20} />
          </button>
          <div className='w-full relative'>
            <input type='text'
               className='border text-sm rounded-lg block w-full p-2.5 bg-purple-600 border-orange-500 text-white placeholder:text-gray-200'
               placeholder='Send a message' 
               value={message}
               onChange={(e) => setMessage(e.target.value)}
               disabled={loading}
            />
            <button type='submit' className='absolute inset-y-0 end-0 text-white flex items-center pe-3 disabled:opacity-60'
              disabled={loading}
            >
              {loading ? <div className='loading loading-spinner'></div> : <BsSend size={24} /> } 
            </button>
          </div>
        </div>
        {selectedFile && (
          <div className='flex items-center justify-between bg-purple-700/40 border border-purple-500 rounded-md px-3 py-2 text-sm text-white'>
            <span className='truncate pr-2'>{selectedFile.name}</span>
            <button
              type='button'
              onClick={handleClearFile}
              className='text-white hover:text-orange-300 transition'
              aria-label='Remove attached file'
            >
              <MdClose size={18} />
            </button>
          </div>
        )}
        <input
          ref={fileInputRef}
          type='file'
          className='hidden'
          onChange={handleFileChange}
          accept='image/*,.pdf,.doc,.docx,.txt,.zip,.rar'
        />
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


