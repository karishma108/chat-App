import GenderCheckbox from "./GenderCheckbox";

const SignUp = () => {
  return  <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
    <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg
    bg-opacity-0" >
      <h1 className="text-3xl font-semibold text-center text-gray-300">
        Sign Up <span className="text-blue-500"> ChatApp</span>
      </h1>
      <form >
      <div>
         <label className="label p-2">
        <span className="text-base label-text" style={{ color: 'white' }}>Full Name</span>
          </label>
        <input type="text" placeholder="Enter Fullname" className="w-full input file-input-bordered h-10" />
       </div>

       <div>
         <label className="label p-2">
        <span className="text-base label-text" style={{ color: 'white' }}>Usename</span>
          </label>
        <input type="text" placeholder="Enter username" className="w-full input file-input-bordered h-10" />
       </div>

       <div>
     <label className="label">
    <span className="text-base label-text" style={{ color: 'white' }}>password</span>
     </label>
    <input
    type="password"
    placeholder="Enter Password"
     className="w-full input file-input-bordered h-10" />
      </div>

      <div>
     <label className="label">
    <span className="text-base label-text" style={{ color: 'white' }}>confirm password</span>
     </label>
    <input
    type="password"
    placeholder="confirm password"
     className="w-full input file-input-bordered h-10" />
      </div>

     <GenderCheckbox />

     <a href='#' className="text-sm hover:underline hover:text-white-600 mt-2 inline-block"style={{ color: 'orange' }} >
         Already have a account?
      </a>

      <div>
      <button className="btn btn-block btn-sm mt-2">Sign Up</button>
      </div>


      </form>
    </div>

  </div>
  }
export default SignUp;


// starter code for the signup component
// import GenderCheckbox from "./GenderCheckbox";

// const SignUp = () => {
//   return  <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//     <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg
//     bg-opacity-0" >
//       <h1 className="text-3xl font-semibold text-center text-gray-300">
//         Sign Up <span className="text-blue-500"> ChatApp</span>
//       </h1>
//       <form >
//       <div>
//          <label className="label p-2">
//         <span className="text-base label-text" style={{ color: 'white' }}>Full Name</span>
//           </label>
//         <input type="text" placeholder="Enter Fullname" className="w-full input file-input-bordered h-10" />
//        </div>

//        <div>
//          <label className="label p-2">
//         <span className="text-base label-text" style={{ color: 'white' }}>Usename</span>
//           </label>
//         <input type="text" placeholder="Enter username" className="w-full input file-input-bordered h-10" />
//        </div>

//        <div>
//      <label className="label">
//     <span className="text-base label-text" style={{ color: 'white' }}>password</span>
//      </label>
//     <input
//     type="password"
//     placeholder="Enter Password"
//      className="w-full input file-input-bordered h-10" />
//       </div>

//       <div>
//      <label className="label">
//     <span className="text-base label-text" style={{ color: 'white' }}>confirm password</span>
//      </label>
//     <input
//     type="password"
//     placeholder="confirm password"
//      className="w-full input file-input-bordered h-10" />
//       </div>

//      <GenderCheckbox />

//      <a href='#' className="text-sm hover:underline hover:text-white-600 mt-2 inline-block"style={{ color: 'orange' }} >
//          Already have a account?
//       </a>

//       <div>
//       <button className="btn btn-block btn-sm mt-2">Sign Up</button>
//       </div>


//       </form>
//     </div>

//   </div>
//   }
// export default SignUp;