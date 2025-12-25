import { userAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";
import { resolveAssetUrl } from "../../utils/resolveAssetUrl";


const Message = ({message}) => {
  const {authUser} = userAuthContext();
  const {selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const fromattedTime = extractTime(message.createdAt);
  const chatClassName = fromMe ? 'chat-end' : 'chat-start';
  const profilePic = fromMe ? authUser.profilePic: selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? 'bg-orange-500' : "";
  const shakeClass = message.shouldShake ? "shake" : "";
  const hasText = Boolean(message.message);
  const isImage = message.messageType === "image";
  const hasFile = Boolean(message.fileUrl);
  const fileLabel = message.fileName || "Download file";
  const resolvedProfilePic = resolveAssetUrl(profilePic);
  const resolvedFileUrl = resolveAssetUrl(message.fileUrl);

  return (
    <div className={`chat ${chatClassName} `}>
    <div className='chat-image avatar'>
        <div className='  w-10 rounded-full'>
            <img 
            alt='Tailwind CSS chat bubble components'
            src={resolvedProfilePic}
            />
        </div>
    </div>
    <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pd-2 flex flex-col gap-2 max-w-xs sm:max-w-sm break-words`}>
      {hasText && <span>{message.message}</span>}
      {hasFile && (
        isImage ? (
          <img
            src={resolvedFileUrl}
            alt={fileLabel}
            className='rounded-md max-h-60 object-cover'
            loading='lazy'
          />
        ) : (
          <a
            href={resolvedFileUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='underline underline-offset-4 text-white hover:text-orange-200'
          >
            {fileLabel}
          </a>
        )
      )}
    </div>
    <div className={'chat-footer text-white opacity-50 text-xs flex gap-1 items-center'}>{fromattedTime}</div>
    </div>
  );
};

export default Message;


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