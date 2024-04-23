import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdCall } from "react-icons/md";
import defaultProfileImageMale from "../../../Asset/Image/default-male-avatar.png"; // Import default profile image for male
import defaultProfileImageFemale from "../../../Asset/Image/default-female-avatar.png"; // Import default profile image for female
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineViewInAr } from "react-icons/md";
// eslint-disable-next-line
import { BsSearch } from "react-icons/bs";
import NavBar from "../../../Component/Navigation/NavBar";
function AddUserForm({ onAddUser }) {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    latitude: "",
    longitude: "",
    address: "",
    profileImage: "",
    dob: "",
    email: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddUser(formData);
    // Reset form fields after submission
    setFormData({
      id: "",
      name: "",
      latitude: "",
      longitude: "",
      address: "",
      profileImage: "",
      dob: "",
      email: "",
      phoneNumber: "",
    });
  };

  return (
    <div className="w-full max-w-md mx-auto mt-20 bg-white shadow-lg rounded-lg overflow-hidden p-6">
      <h2 className="text-xl font-semibold mb-4">Add User</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            ID:
          </label>
          <input
            type="number"
            name="id"
            value={formData.id}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name:
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Latitude:
          </label>
          <input
            type="number"
            name="latitude"
            value={formData.latitude}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Longitude:
          </label>
          <input
            type="number"
            name="longitude"
            value={formData.longitude}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Address:
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Profile Image:
          </label>
          <input
            type="text"
            name="profileImage"
            value={formData.profileImage}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Date of Birth:
          </label>
          <input
            type="text"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email:
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Phone Number:
          </label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300"
        >
          Add User
        </button>
      </form>
    </div>
  );
}

function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Tom Holland",
      latitude: 51.41233,
      longitude: 0.300689,
      address: "Kingston upon Thames, United Kingdom",
      profileImage:
        "https://static.vecteezy.com/system/resources/previews/007/662/604/large_2x/focused-young-german-male-office-worker-sits-at-desk-at-home-workplace-distracted-from-laptop-screen-free-photo.jpg",
      dob: "1996-06-01",
      email: "tom.holland@example.com",
      phoneNumber: "+44 123456789",
    },
    {
      id: 2,
      name: "John Wick",
      latitude: 53.893009,
      longitude: 27.567444,
      address: "Jardani Jovonovich in Belarus",
      profileImage:
        "https://www.small-screen.co.uk/wp-content/uploads/2023/03/john-wick-5-happening-keanu-reeves-1050x591.jpg",
      dob: "1964-09-20",
      email: "john.wick@example.com",
      phoneNumber: "+1 1234567890",
    },
  ]);

  const handleAddUser = (userData) => {
    setUsers((prevUsers) => [...prevUsers, userData]);
  };

  const [showForm, setShowForm] = useState(false);
  return (
    <div>
       <div className="w-full top-0 fixed shadow-xl">
        <NavBar />
      </div>
      {showForm && <AddUserForm onAddUser={handleAddUser} />}
      <div className="mx-6 px-10 mt-12">
      <button
        onClick={() => setShowForm(!showForm)}
        className=" m-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        {showForm ? "Cancel" : "+ Add"}
      </button></div>

      <div className="flex w-screen justify-center">
        <div className="justify-center align-middle items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto">
          {users.map((user) => (
            <Link
              to={`/details/${user.id}`}
              className="  rounded-xl cursor-pointer hover:p-2 overflow-hidden   hover:scale-105"
              key={user.id}
            >
              <div className="flex flex-col items-center p-2 bg-white   rounded-xl  overflow-hidden  hover:shadow-xl hover:scale-105">
                <div className="relative justify-center">
                  <img
                    src={
                      user.profileImage ||
                      (user.gender === "female"
                        ? defaultProfileImageFemale
                        : defaultProfileImageMale)
                    }
                    alt={user.name}
                    className="w-40 h-40 bg-cover rounded-full mb-4"
                  />
                  <div className="w-full m-2 flex gap-4 justify-between my-2">
                    <Link
                      to={`/map/${user.id}/${user.latitude}/${user.longitude}`}
                      className="  rounded-xl  overflow-hidden  hover:shadow-lg hover:scale-105"
                      key={user.id}
                    >
                      {" "}
                      <div className=" bottom-0 left-0 right-0 flex items-center  group-hover:opacity-100 rounded-xl  overflow-hidden  hover:shadow-lg hover:scale-105">
                        <button className="group rounded-full bg-blue-500 w-10 h-10  flex justify-center align-middle items-center duration-75 text-white hover:scale-110">
                          <IoLocationSharp className="w-6 h-6" />
                        </button>
                      </div>
                    </Link>
                    <div className="  flex justify-center items-center align-middle gap-4 hover:scale-110 duration-75  rounded-xl  overflow-hidden  hover:shadow-lg ">
                      <a href={`tel:${user.phoneNumber}`}>
                        <div className="group rounded-full bg-blue-500 w-10 h-10  flex justify-center align-middle items-center duration-75">
                          <MdCall className="w-6 h-6 text-white hover:scale-110 hover:duration-75" />
                        </div>
                      </a>
                    </div>
                    <Link
                      to={`/details/${user.id}`}
                      className="  rounded-xl  overflow-hidden  hover:shadow-lg hover:scale-105"
                      key={user.id}
                    >
                      {" "}
                      <div className=" bottom-0 left-0 right-0 flex items-center  group-hover:opacity-100">
                        <button className="group rounded-full bg-blue-500 w-10 h-10  flex justify-center align-middle items-center duration-75 text-white hover:scale-110">
                          <MdOutlineViewInAr className="w-6 h-6" />
                        </button>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2">{user.name}</h3>
                  {/* <p className="text-gray-600 mb-2">{profile.email}</p> */}
                </div>
                <div className="flex w-full justify-end translate-y-4 pl-6">
                  <div className="text-gray-400 mb-2 w-[80%] flex justify-end">
                    {user.address}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
