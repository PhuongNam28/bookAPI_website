import React, { useState, useEffect } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import useCurrentUser from "../../Hooks/useCurrentUser";
import upload from "../../lib/upload";
import { db } from "../../lib/firebase";
import "./myprofile.css";

const MyProfile = () => {
  const currentUser = useCurrentUser();
  const [userName, setUserName] = useState("");
  const [image, setImage] = useState(null);
  const [profileUrl, setProfileUrl] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (currentUser) {
        const userDoc = doc(db, "users", currentUser.uid);
        const userSnap = await getDoc(userDoc);

        if (userSnap.exists()) {
          const userData = userSnap.data();
          setUserName(userData.userName || "");
          setProfileUrl(userData.profileUrl || "");
        }
      }
    };

    fetchUserProfile();
  }, [currentUser]);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userDoc = doc(db, "users", currentUser.uid);

      let updatedProfileUrl = profileUrl;
      if (image) {
        updatedProfileUrl = await upload(image, `profileImages/${currentUser.uid}`);
      }

      await updateDoc(userDoc, {
        userName,
        profileUrl: updatedProfileUrl,
      });

      setProfileUrl(updatedProfileUrl);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile: ", error);
      alert("Error updating profile");
    } finally {
      setLoading(false);
    }
  };

  if (!currentUser) {
    return <p>Please log in to edit your profile.</p>;
  }

  return (
    <div className="profile-container">
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Profile Image:</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
          {profileUrl && <img src={profileUrl} alt="Profile" width="100" />}
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Updating..." : "Update Profile"}
        </button>
      </form>
    </div>
  );
};

export default MyProfile;
