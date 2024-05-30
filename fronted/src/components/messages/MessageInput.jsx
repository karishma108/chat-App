
import { BiSend } from 'react-icons/bi'

const MessageInput = () => {
  return (
    <form className='px-4 my-3'>
        <div className='w-full relative'>
            <input type='text'
               className='border text-sm rounded-lg block w-full p-2.5 bg-purple-600 border-orange-200 text-white'
               placeholder='Sned a message' 
            />
            <button type='submit' className='absolute inset-y-0 end-0 text-white flex items-center pe-3'>
                <BiSend size={24} />
            </button>
    </div>
    </form>
  )
}

export default MessageInput


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


