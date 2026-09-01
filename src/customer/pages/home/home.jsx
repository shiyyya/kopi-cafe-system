// import { useState } from 'react';
// import { useNavigate } from 'react-router';
// import './home.css';
// import HomeHeader from '/src/components/layout/home-header/home-header.jsx';
// import SidebarLoggedIn from '/src/components/blocks/sidebar/sidebar-logged-in.jsx';
// import SidebarLoggedOut from '/src/components/blocks/sidebar/sidebar-logged-out.jsx';

// export default function Home() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const currentUser = null; 

//   const handleNavigate = (key) => {
//     setSidebarOpen(false);

//     console.log('Navigate to:', key);
//   };

//   const handleLogin = () => {
//     setSidebarOpen(false);
//     console.log('Go to login');
//   };

//   const handleLogout = () => {
//     setSidebarOpen(false);

//     console.log('Logging out');
//   };

//   const goToCart = () => {
//     console.log('Go to cart');
//   };

//   const goToProfile = () => {
//     console.log('Go to profile');
//   };
  
//   const navigate = useNavigate();

//   return (
//     <div className="homePage">
//       <HomeHeader
//         currentUser={currentUser}
//        onLogin={() => navigate('/login')}
//         onCartClick={goToCart}
//         onProfileClick={goToProfile}
//         onMenuClick={() => setSidebarOpen(true)}
//       />

//       {/* {lagay dito ibang home content} */}

      
//       {currentUser ? (
//         <SidebarLoggedIn
//           isOpen={sidebarOpen}
//           user={currentUser}
//           onClose={() => setSidebarOpen(false)}
//           onNavigate={handleNavigate}
//           onLogout={handleLogout}
//         />
//       ) : (
//         <SidebarLoggedOut
//           isOpen={sidebarOpen}
//           onClose={() => setSidebarOpen(false)}
//           onNavigate={handleNavigate}
//           onLogin={handleLogin}
//         />
//       )}
     
//     </div>
//   );
// }

import { useState } from 'react';
import { useNavigate } from 'react-router';
import './home.css';
import HomeHeader from '/src/components/layout/home-header/home-header.jsx';
import SidebarLoggedIn from '/src/components/blocks/sidebar/sidebar-logged-in.jsx';
import SidebarLoggedOut from '/src/components/blocks/sidebar/sidebar-logged-out.jsx';
// import Footer from '/src/components/blocks/footer/footer.jsx';

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const currentUser = null; 
  const navigate = useNavigate();

  const handleNavigate = (key) => {
    setSidebarOpen(false);
    console.log('Navigate to:', key);
  };

  const handleLogin = () => {
    setSidebarOpen(false);
    console.log('Go to login');
  };

  const handleLogout = () => {
    setSidebarOpen(false);
    console.log('Logging out');
  };

  const goToCart = () => {
    console.log('Go to cart');
  };

  const goToProfile = () => {
    console.log('Go to profile');
  };

  return (
    <div className="homePage">
      <HomeHeader
        currentUser={currentUser}
        onLogin={() => navigate('/login')}
        onCartClick={goToCart}
        onProfileClick={goToProfile}
        onMenuClick={() => setSidebarOpen(true)}
      />

      <main className="homeContent">
        {/* lagay dito ibang home content */}
      </main>

      {currentUser ? (
        <SidebarLoggedIn
          isOpen={sidebarOpen}
          user={currentUser}
          onClose={() => setSidebarOpen(false)}
          onNavigate={handleNavigate}
          onLogout={handleLogout}
        />
      ) : (
        <SidebarLoggedOut
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          onNavigate={handleNavigate}
          onLogin={handleLogin}
        />
      )}

      <Footer />
    </div>
  );
}
