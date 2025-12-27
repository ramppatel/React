import React, { useContext } from 'react';
import UserContext from '../context/UserContext';
import './Profile.css';

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) {
    return (
      <div className="profile-container">
        <div className="profile-card warning">
          <p>Please login to view your profile</p>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h2>Welcome</h2>
        <p className="username">{user.username}</p>
      </div>
    </div>
  );
}

export default Profile;
