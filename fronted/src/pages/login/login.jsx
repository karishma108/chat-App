const Login = () => {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className="h-full w-full p-6 bg-purple-700 shadow-md rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50">
                <h1 className='text-3xl font-semibold text-center text-gray-300'>
                    Login
                    <span className="text-white-500"> ChatApp</span>
                </h1>

                <form>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text" style={{ color: 'white' }}>Username</span>
                        </label>
                        <input type="text" placeholder="Enter username" className="w-full input file-input-bordered h-10" />
                    </div>

                    <div>
                        <label className="label">
                            <span className="text-base label-text" style={{ color: 'white' }}>Password</span>
                        </label>
                        <input
                         type="password"
                        placeholder="Enter Password"
                        className="w-full input file-input-bordered h-10" />
                        </div>
                     
                     <a href='#' className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block" style={{ color: 'orange' }}>
                        {"Don't"} have an account?
                     </a>

                    <div>
                        <button className="btn btn-block btn-sm mt-2">Login </button>
                    </div>
                </form>

                {/* <form onSubmit={handleSubmit}>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Username</span>
                        </label>
                        <input 
                            type="text"
                            placeholder="enter username"
                            className="w-full input input-bordered h-10"
                            // value={username}
                            // onChange={(e) => setUsername(e.target.value)}
                        />
                    </div> */}

                    {/* <div>
                        <label className="label">
                            <span className="text-base label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="enter Password"
                            className="w=full input input-bordered h-10"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <link to='/signup' className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
                        {"Don't"} have an account?
                    </link>

                    <div>
                        <button className="btn btn-block btn-sm mt-2" disabled={loading}>
                            {loading ? <span className="loading loading-spinner " ></span> : "Login"}
                        </button>
                    </div>
                </form>          */}
            </div>
        </div>
    );
};
export default Login;







//STARTER CODE 
// const Login = () => {
//     return (
//         <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//             <div className="h-full w-full p-6 bg-purple-700 shadow-md rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50">
//                 <h1 className='text-3xl font-semibold text-center text-gray-300'>
//                     Login
//                     <span className="text-white-500"> ChatApp</span>
//                 </h1>

//                 <form>
//                     <div>
//                         <label className="label p-2">
//                             <span className="text-base label-text">Username</span>
//                         </label>
//                         <input type="text" placeholder="Enter username" className="w-full input file-input-bordered h-10" />
//                     </div>

//                     <div>
//                         <label className="label">
//                             <span className="text-base label-text">Password</span>
//                         </label>
//                         <input
//                          type="password"
//                         placeholder="Enter Password"
//                         className="w-full input file-input-bordered h-10" />
//                         </div>
                     
//                      <a href='#' className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
//                         {"Don't"} have an account?
//                      </a>

//                     <div>
//                         <button className="btn btn-block btn-sm mt-2">Login </button>
//                     </div>
//                 </form>
//                 </div>
//         </div>
//     );
// };
// export default Login;

