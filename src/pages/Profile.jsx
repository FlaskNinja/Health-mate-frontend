// // import { useEffect, useState } from "react";
// // import "../profile.css"; // Create this CSS file for styling

// // const Profile = () => {
// //   const storedUser = sessionStorage.getItem("user");
// //   const user = storedUser ? JSON.parse(storedUser) : null;

// //   const [profile, setProfile] = useState(user || {});

// //   useEffect(() => {
// //     if (!user) {
// //       // Redirect to login if no user is stored
// //       window.location.href = "/login";
// //     }
// //   }, [user]);

// //   const handleLogout = () => {
// //     sessionStorage.clear();
// //     window.location.href = "/login";
// //   };

// //   const handleEdit = () => {
// //     alert("Edit Profile coming soon...");
// //   };

// //   return (
// //     <div className="profile-container">
// //       <h2>My Profile</h2>

// //       <div className="profile-card">
// //         <div className="avatar-circle">
// //           {profile?.firstName
// //             ? profile.firstName[0].toUpperCase()
// //             : "U"}
// //         </div>
// //         <h3>
// //           {profile?.firstName} {profile?.lastName}
// //         </h3>
// //         <p className="email">{profile?.email}</p>
// //       </div>

// //       <div className="profile-info">
// //         <p><strong>Age:</strong> {profile?.age || "Not set"}</p>
// //         <p><strong>Gender:</strong> {profile?.gender || "Not set"}</p>
// //         <p><strong>Phone:</strong> {profile?.phone || "Not set"}</p>
// //         <p><strong>Address:</strong> {profile?.address || "Not set"}</p>
// //       </div>

// //       <div className="profile-actions">
// //         <button className="btn-edit" onClick={handleEdit}>Edit Profile</button>
// //         <button className="btn-logout" onClick={handleLogout}>Logout</button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Profile;


// import { useEffect, useState } from "react";
// import { Menu, X } from "lucide-react";
// import "../profile.css"; // 👈 styling for profile

// const Profile = () => {
//   const storedUser = sessionStorage.getItem("user");
//   const user = storedUser ? JSON.parse(storedUser) : null;

//   const [profile, setProfile] = useState(user || {});
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   useEffect(() => {
//     if (!user) {
//       // Redirect to login if no user is stored
//       window.location.href = "/login";
//     }
//   }, [user]);

//   const handleLogout = () => {
//     sessionStorage.clear();
//     window.location.href = "/login"; // 👈 use logout page with loading
//   };

//   const handleEdit = () => {
//     alert("Edit Profile coming soon...");
//   };

//   return (
//     <div>
//       {/* ✅ Navbar */}
//       <nav className="navbar">
//         <div className="navbar-container">
//           {/* Left: Hamburger + greeting */}
//           <div className="navbar-left">
//             <button
//               aria-label="Open menu"
//               className="menu-button"
//               onClick={() => setIsSidebarOpen(true)}
//             >
//               <Menu className="menu-icon" />
//             </button>
//             <div className="greeting">
//               Hi, {profile?.firstName || "Guest"}
//             </div>
//           </div>

//           {/* Right: Avatar */}
//           <div className="navbar-right">
//             <div className="avatar">
//               {profile?.firstName ? profile.firstName[0].toUpperCase() : "U"}
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* ✅ Sidebar Navigation */}
//       {isSidebarOpen && (
//         <div className="sidebar">
//           <button
//             className="close-btn"
//             onClick={() => setIsSidebarOpen(false)}
//           >
//             <X />
//           </button>
//           <ul>
//             <li><a href="/dashboard">Dashboard</a></li>
//             <li><a href="/profile">Profile</a></li>
//             <li><a href="/doctors">Doctors / Care Team</a></li>
//             <li><a href="/reports">Reports</a></li>
//             <li><a href="/settings">Settings</a></li>
//             <li><button onClick={handleLogout}>Logout</button></li>
//           </ul>
//         </div>
//       )}

//       {/* ✅ Profile Content */}
//       <div className="profile-container">
//         <h2>My Profile</h2>

//         <div className="profile-card">
//           <div className="avatar-circle">
//             {profile?.firstName ? profile.firstName[0].toUpperCase() : "U"}
//           </div>
//           <h3>
//             {profile?.firstName} {profile?.lastName}
//           </h3>
//           <p className="email">{profile?.email}</p>
//         </div>

//         <div className="profile-info">
//           <p><strong>Age:</strong> {profile?.age || "Not set"}</p>
//           <p><strong>Gender:</strong> {profile?.gender || "Not set"}</p>
//           <p><strong>Phone:</strong> {profile?.phone || "Not set"}</p>
//           <p><strong>Address:</strong> {profile?.address || "Not set"}</p>
//         </div>

//         <div className="profile-actions">
//           <button className="btn-edit" onClick={handleEdit}>
//             Edit Profile
//           </button>
//           <button className="btn-logout" onClick={handleLogout}>
//             Logout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;


import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import "../profile.css";
import "../dashnav.css";

const Profile = () => {
  const storedUser = sessionStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;

  const [profile, setProfile] = useState(user || {});
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (!user) {
      window.location.href = "/login"; // Redirect if no user
    }
  }, [user]);

  const handleLogout = () => {
    sessionStorage.clear();
    window.location.href = "/login";
  };

  const handleEdit = () => {
    setShowPopup(true); // open popup
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const firstName =
    user?.firstName?.charAt(0).toUpperCase() + user?.firstName?.slice(1) || "Guest";

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-left">
            <button
              aria-label="Open menu"
              className="menu-button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="menu-icon" /> : <Menu className="menu-icon" />}
            </button>
            <div className="greeting">Hi, {firstName}</div>
          </div>

          <div className="navbar-right">
            <button className="dashboard-btn">Profile</button>
            <div className="avatar">
              {user?.firstName ? user.firstName[0].toUpperCase() : "G"}
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      {isMenuOpen && (
        <div className="sidebar">
          <button
            aria-label="Close menu"
            className="menu-button"
            onClick={() => setIsMenuOpen(false)}
          >
            <X className="menu-icon" />
          </button>
          <ul className="sidebar-list">
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li>Doctors / Care Team</li>
            <li>Reports</li>
            <li>Settings</li>
            <li onClick={handleLogout}>Log Out</li>
          </ul>
        </div>
      )}

      {/* Profile Page */}
      <div className="profile-container">
        <h2>My Profile</h2>

        <div className="profile-card">
          <div className="avatar-circle">
            {profile?.firstName ? profile.firstName[0].toUpperCase() : "U"}
          </div>
          <h3>
            {profile?.firstName} {profile?.lastName}
          </h3>
          <p className="email">{profile?.email}</p>
        </div>

        <div className="profile-info">
          <p><strong>Age:</strong> {profile?.age || "Not set"}</p>
          <p><strong>Gender:</strong> {profile?.gender || "Not set"}</p>
          <p><strong>Phone:</strong> {profile?.phone || "Not set"}</p>
          <p><strong>Address:</strong> {profile?.address || "Not set"}</p>
        </div>

        <div className="profile-actions">
          <button className="btn-edit" onClick={handleEdit}>Edit Profile</button>
          <button className="btn-logout" onClick={handleLogout}>Logout</button>
        </div>
      </div>

      {/* Custom Popup */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h3>Edit Profile</h3>
            <p>This feature is coming soon...</p>
            <button className="small-btn" onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
