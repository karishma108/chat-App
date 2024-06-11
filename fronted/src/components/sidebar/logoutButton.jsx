
import { BiLogOut } from 'react-icons/bi';
import userLogout from '../../hooks/userLogout';

const LogoutButton = () => {

  const {loading, logout} = userLogout();

  return (
    <div className='mt-auto py-4 '>
      {!loading ? (
        < BiLogOut className='w-6 h-10 text-white cursor-pointer' 
        onClick={logout}
        />
      ) : (
        <span className='loading loading-spinner'></span>
      )}
       

    </div>
  );
};

export default LogoutButton;

//starter code
// import { BiLogOut } from 'react-icons/bi';
// const LogoutButton = () => {
//   return (
//     <div className='mt-auto'>
//         < BiLogOut className='w-6 h-10 text-white cursor-pointer' />
//     </div>
//   )
// }

// export default LogoutButton;