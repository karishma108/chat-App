

const Message = () => {
  return (
    <div className='chat chat-end'>
    <div className='chat-image avatar'>
        <div className='  w-10 rounded-full'>
            <img 
            alt='Tailwind CSS chat bubble components'
            src='https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png'
            />
        </div>
    </div>
    <div className={'chat-bubble text-white bg-orange-500'}>Hii What's upp</div>
    <div className={'chat-footer text-white opacity-50 text-xs flex gap-1 items-center'}>12:42</div>
    </div>
  )
}

export default Message


//starter code
// const Message = () => {
//     return (
//       <div className='chat chat-end'>
//       <div className='chat-image avatar'>
//           <div className='  w-10 rounded-full'>
//               <img 
//               alt='Tailwind CSS chat bubble components'
//               src='https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png'
//               />
//           </div>
//       </div>
//       <div className={'chat-bubble text-white bg-orange-500'}>Hii What's upp</div>
//       <div className={'chat-footer text-white opacity-50 text-xs flex gap-1 items-center'}>12:42</div>
//       </div>
//     )
//   }
  
//   export default Message