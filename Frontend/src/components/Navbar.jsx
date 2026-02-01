import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { LayoutGrid, LogIn, UserPlus, LogOut } from 'lucide-react';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const isAuthenticated = !!localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.clear(); 
    navigate('/login');
    window.location.reload(); 
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200 px-6 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* LOGO / HOME LINK */}
        <Link to="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="bg-indigo-600 p-1.5 rounded-lg group-hover:bg-indigo-700 transition-colors">
            <LayoutGrid size={20} className="text-white cursor-pointer" />
          </div>
          <span className="text-xl cursor-pointer font-bold text-slate-900 tracking-tight">TaskManager</span>
        </Link>

        {/* NAVIGATION BUTTONS */}
        <div className="flex items-center gap-3">
          {isAuthenticated ? (
            /*LOGGED IN  */
            <>
             
              {location.pathname !== '/dashboard' && (
                <Link
                  to="/dashboard"
                  className="px-4 py-2 cursor-pointer rounded-xl text-sm font-bold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 transition-all"
                >
                  Dashboard
                </Link>
              )}

              <button
                onClick={handleLogout}
                className="flex cursor-pointer items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold text-slate-500 hover:text-red-600 transition-all"
              >
                <LogOut size={18} />
                Logout
              </button>
            </>
          ) : (
            /* LOGGED OUT  */
            <>
              <Link
                to="/login"
                className="flex cursor-pointer items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all"
              >
                <LogIn size={18} />
                SignIn
              </Link>
              
              <Link
                to="/signup"
                className="flex cursor-pointer items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-100 transition-all"
              >
                <UserPlus size={18} />
                SignUp
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { LayoutGrid, LogIn, UserCircle } from 'lucide-react';

// function Navbar() {
//   const navigate = useNavigate();
  
//   // Check if token exists to determine if user is logged in
//   const isAuthenticated = !!localStorage.getItem('token');

//   const handleLogout = () => {
//     localStorage.clear(); // Clears token and user data
//     navigate('/login');
//     window.location.reload(); // Refresh to update the Navbar state
//   };

//   return (
//     <nav className="bg-white border-b border-slate-200 px-6 py-3 sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto flex justify-between items-center">
        
//         {/* LOGO / HOME */}
//         <Link to="/" className="flex items-center gap-2">
//           <div className="bg-indigo-600 p-1.5 rounded-lg">
//             <LayoutGrid size={20} className="text-white" />
//           </div>
//           <span className="text-xl font-bold text-slate-900 tracking-tight">TaskFlow</span>
//         </Link>

//         {/* CONDITIONAL BUTTONS */}
//         <div className="flex items-center gap-3">
//           {isAuthenticated ? (
//             /* IF LOGGED IN: Show Dashboard and Logout */
//             <>
//               <Link
//                 to="/dashboard"
//                 className="px-4 py-2 rounded-xl text-sm font-bold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 transition-all"
//               >
//                 Dashboard
//               </Link>
//               <button
//                 onClick={handleLogout}
//                 className="px-4 py-2 rounded-xl text-sm font-bold text-slate-500 hover:text-red-600 transition-all"
//               >
//                 Logout
//               </button>
//             </>
//           ) : (
//             /* IF NOT LOGGED IN: Show SignIn and SignUp */
//             <>
//               <Link
//                 to="/login"
//                 className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all"
//               >
//                 <LogIn size={18} />
//                 SignIn
//               </Link>
//               <Link
//                 to="/signup"
//                 className="px-4 py-2 rounded-xl text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-100 transition-all"
//               >
//                 SignUp
//               </Link>
//             </>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;









// import React from 'react';
// import { Link, useNavigate, useLocation } from 'react-router-dom';
// import { LayoutGrid, LogIn, UserPlus } from 'lucide-react';

// function Navbar() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const isAuthenticated = !!localStorage.getItem('token');

//   // Helper to highlight active links
//   const isActive = (path) => location.pathname === path;

//   return (
//     <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200 px-6 py-3">
//       <div className="max-w-7xl mx-auto flex justify-between items-center">
        
//         {/* HOME / LOGO */}
//         <Link to="/" className="flex items-center gap-2 group">
//           <div className="bg-indigo-600 p-1.5 rounded-lg group-hover:bg-indigo-700 transition-colors">
//             <LayoutGrid size={20} className="text-white" />
//           </div>
//           <span className="text-xl font-bold text-slate-900 tracking-tight">TaskFlow</span>
//         </Link>

//         {/* NAVIGATION LINKS */}
//         <div className="flex items-center gap-4">
//           {!isAuthenticated ? (
//             <>
//               <Link
//                 to="/login"
//                 className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all ${
//                   isActive('/login') 
//                     ? 'bg-indigo-50 text-indigo-600' 
//                     : 'text-slate-600 hover:text-indigo-600 hover:bg-slate-50'
//                 }`}
//               >
//                 <LogIn size={18} />
//                 SignIn
//               </Link>

//               <Link
//                 to="/signup"
//                 className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all ${
//                   isActive('/signup')
//                     ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200'
//                     : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
//                 }`}
//               >
//                 <UserPlus size={18} />
//                 SignUp
//               </Link>
//             </>
//           ) : (
//             <Link
//               to="/dashboard"
//               className="text-sm font-bold text-indigo-600 bg-indigo-50 px-4 py-2 rounded-xl"
//             >
//               Go to Dashboard
//             </Link>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;