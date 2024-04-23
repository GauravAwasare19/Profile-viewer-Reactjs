import React from "react";
import { useParams } from "react-router-dom";
import ProfileData from "../../../data/profiles.json";
import NavBar from "../../../Component/Navigation/NavBar";

function ProfileDetails() {
 const { id } = useParams();
 const profile = ProfileData.find((profile) => profile.id === parseInt(id));

 if (!profile) {
    return <div>Loading...</div>;
 }

 return (
    <div className="container mx-auto px-4 flex justify-center items-center h-screen bg-gray-800">
      <div className="w-full top-0 fixed shadow-xl">
        <NavBar />
      </div>
      <div className="max-w-lg bg-gray-900 shadow-lg rounded-lg overflow-hidden">
        <div className="px-8 py-6">
          <h2 className="text-3xl font-semibold mb-6 text-white">{profile.name}'s Details</h2>
          <div className="flex items-center mb-6">
            <img
              src={profile.profileImage}
              alt={profile.name}
              className="w-32 h-32 rounded-full mr-6"
            />
            <div>
              <p className="text-xl font-semibold mb-1 text-white">{profile.name}</p>
              <p className="text-gray-400 mb-2">{profile.email}</p>
            </div>
          </div>
          <div>
            <p className="mb-2 text-white"><strong className="text-white">Date of Birth:</strong> {profile.dob}</p>
            <p className="mb-2 text-white"><strong className="text-white">Phone Number:</strong> {profile.phoneNumber}</p>
            <p className="mb-2 text-white"><strong className="text-white">Address:</strong> {profile.address}</p>
            <p className="mb-2 text-white"><strong className="text-white">Latitude:</strong> {profile.latitude}</p>
            <p className="mb-2 text-white"><strong className="text-white">Longitude:</strong> {profile.longitude}</p>
          </div>
        </div>
      </div>
    </div>
 );
}

export default ProfileDetails;
