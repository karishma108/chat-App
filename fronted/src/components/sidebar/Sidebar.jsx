import Conversations from "./Conversations";
import SearchInput from "./SearchInput";
import LogoutButton from "./logoutButton";

const Sidebar = () => {
    return (
    <div className="border-r border-slate-500 p-4 flex-col">
        <SearchInput />
        <div className="'divider px-3"></div>
        < Conversations />
        <LogoutButton /> 
    </div>
    )
};
export default Sidebar;

//starter code
// import Conversations from "./Conversations";
// import SearchInput from "./SearchInput";
// import LogoutButton from "./logoutButton";

// const Sidebar = () => {
//     return (
//     <div className="border-r border-slate-500 p-4 flex-col">
//         <SearchInput />
//         <div className="'divider px-3"></div>
//         < Conversations />
//         <LogoutButton /> 
//     </div>
//     )
// };
// export default Sidebar;