
import { useEffect, useRef } from 'react';
import useGetmessages from '../../hooks/useGetmessages';
import MessageSkeleton from '../skeletons/MessageSkeleton';
import Message from './Message'
import useListenMesaages from '../../hooks/useListenMesaages';

const Messages = () => {
  const {messages, loading} = useGetmessages();
  useListenMesaages();
  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth"});
   }, 100);
  }, [messages] );
   
  return (
    <div className='px-4 flex-1 overflow-auto'>
       {!loading && 
       messages.length > 0 &&
       messages.map((message) => (
        <div key={message._id}
        ref={lastMessageRef} >
        <Message message={message} />
        </div>
       ))}
       
       {loading && [...Array(3)].map((_, idx) =>  <MessageSkeleton key={idx} /> )}
       {!loading && messages.length === 0 && (
        <p className="text-center text-white">Send a message to start the conversation</p>
       )};
    </div>
  );
};

export default Messages;


//starter code
// import Message from './Message'

// const Messages = () => {
//   return (
//     <div className='px-4 flex-1 overflow-auto'>
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />

//     </div>
//   )
// }

// export default Messages
