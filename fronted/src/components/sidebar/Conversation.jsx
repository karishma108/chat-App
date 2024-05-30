import React from 'react'

export const Conversation = () => {
  return (
    <>
    <div className='flex gap-2 items-center hover:bg-orange-400 rounded p-2 py-2 cursor-pointer'>
    <div className='avatar online'>
        <div className='w-12 rounded-full'>
            <img src='https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png' alt="user avatar" />
        </div>
    </div>

    <div className='flex flex-col flex-1'>
        <div className='flex gap-3 justify-between'>
            <p className='font-bold text-gray-200'>John Dose</p>
            <span className='text-x1'>🎃</span>
        </div>
    </div>
    </div>

    <div className='divider my-0 py-0 h-1'></div>

    </>
  )
}
export default Conversation;




//starter code
// export const Conversation = () => {
//   return (
//     <>
//     <div className='flex gap-2 items-center hover:bg-orange-400 rounded p-2 py-2 cursor-pointer'>
//     <div className='avatar online'>
//         <div className='w-12 rounded-full'>
//             <img src='https://img.freepik.com/premium-photo/face-boy-cartoon-style-ai-generated_690082-7672.jpg' alt="user avatar" />
//         </div>
//     </div>

//     <div className='flex flex-col flex-1'>
//         <div className='flex gap-3 justify-between'>
//             <p className='font-bold text-gray-200'>John Dose</p>
//             <span className='text-x1'>🎃</span>
//         </div>
//     </div>
//     </div>

//     <div className='divider my-0 py-0 h-1'></div>

//     </>
//   )
// }
// export default Conversation;

