import React, { useState } from "react";
import "./Profile.css";

function Profile() {
  const [profiles, setProfiles] = useState([]);
  const [profile, setProfile] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const addProfile = () => {
    if (!profile) return;

    setProfiles([...profiles, profile]);
    setProfile("");
  };

  const deleteProfile = (index) => {
    setProfiles(
      profiles.filter((_, i) => i !== index)
    );
  };

  const editProfile = (index) => {
    setProfile(profiles[index]);
    setEditIndex(index);
  };

  const updateProfile = () => {
    const updated = [...profiles];

    updated[editIndex] = profile;

    setProfiles(updated);
    setProfile("");
    setEditIndex(null);
  };

  return (
    <div className="profile-page">
      <h1>Profile Management</h1>

      <div className="profile-form">
        <input
          type="text"
          placeholder="Enter Profile Name"
          value={profile}
          onChange={(e) => setProfile(e.target.value)}
        />

        {editIndex === null ? (
          <button onClick={addProfile}>
            Add Profile
          </button>
        ) : (
          <button onClick={updateProfile}>
            Update Profile
          </button>
        )}
      </div>

      <div className="profile-list">
        {profiles.map((item, index) => (
          <div className="profile-card" key={index}>
            <h3>{item}</h3>

            <button onClick={() => editProfile(index)}>
              Edit
            </button>

            <button onClick={() => deleteProfile(index)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Profile;