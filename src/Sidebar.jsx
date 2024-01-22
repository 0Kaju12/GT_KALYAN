import React from "react";
import Home from './Images/home.png';
import Profile from './Images/profile.png';
import AddFund from './Images/add.png';
import Wallet from './Images/wallet.png';
import WinHistory from './Images/win_history.png';
import BidHistory from './Images/bid_history.png';
import Rating from './Images/rating.png';
import Share from './Images/share.png';
import ChangePass from './Images/reset_pass.png';
import "./Sidebar.css";
import sidebarBackground from './Images/bg.png';
import logoutImg from './Images/logout.png';
import logo from './Images/logo.png';
import call24 from './Images/call_24.png';


function Sidebar() {
  const sidebarStyle = {
    backgroundImage: `url(${sidebarBackground})`,
    
    /* Add other background properties as needed */
  };

  return (
    <div className="flex h-screen bg-gray-200">
      <div className="text-white p-4 overflow-y-auto scrollbar-hide relative" style={sidebarStyle}>
        <div className="p-4 sticky top-0 ">
          {/* User Info */}
          <div className="text-center mb-4">
            <div className="text-xl font-bold">Username</div>
            <div className="text-sm opacity-75">1234567890</div>
          </div>
          {/* Logout Button */}
          <div className="flex justify-center mt-8">
            <button className="flex items-center justify-center hover:bg-blue-700 text-white font-bold rounded-full w-10 h-10 mx-2">
              <img
                  src={call24} // Replace with the path to your Button 1 image
                  alt="Button 1"
                  className="w-full h-full object-cover"
                />
            </button>
            <div className="flex items-center mx-2">
              <img
                src={logo}
                alt="Center Image"
                className="w-20 h-20"
              />
            </div>
            <button className="flex items-center justify-center hover:bg-green-700 text-white font-bold rounded-full w-10 h-10 mx-2">
              <img
                    src={logoutImg} // Replace with the path to your Button 1 image
                    alt="Button 1"
                    className="w-full h-full object-cover"
                  />
            </button>
          </div>
          {/* Sidebar Menu */}
          <ul className="space-y-2">
            <li>
              <a href="#" className="block py-2 px-4 hover:bg-gray-700">
                <img src={Home} alt="Home" className="w-8 h-8 mr-2 inline-block" />
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 hover:bg-gray-700">
                <img src={Profile} alt="Profile" className="w-8 h-8 mr-2 inline-block" />
                Profile
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 hover:bg-gray-700">
                <img src={AddFund} alt="Add Funds" className="w-8 h-8 mr-2 inline-block" />
                Add Funds
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 hover:bg-gray-700">
                <img src={Wallet} alt="Wallet" className="w-8 h-8 mr-2 inline-block" />
                Wallet
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 hover:bg-gray-700">
                <img src={WinHistory} alt="Win History" className="w-8 h-8 mr-2 inline-block" />
                Win History
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 hover:bg-gray-700">
                <img src={BidHistory} alt="Bid History" className="w-8 h-8 mr-2 inline-block" />
                Bid History
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 hover:bg-gray-700">
                <img src={BidHistory} alt="How To Play" className="w-8 h-8 mr-2 inline-block" />
                How To Play
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 hover:bg-gray-700">
                <img src={Rating} alt="Game Rates" className="w-8 h-8 mr-2 inline-block" />
                Game Rates
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 hover:bg-gray-700">
                <img src={Rating} alt="Rating" className="w-8 h-8 mr-2 inline-block" />
                Rating
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 hover:bg-gray-700">
                <img src={Share} alt="Share" className="w-8 h-8 mr-2 inline-block" />
                Share
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 hover:bg-gray-700">
                <img src={ChangePass} alt="Change Password" className="w-8 h-8 mr-2 inline-block" />
                Change Password
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 hover:bg-gray-700">
                <img src={ChangePass} alt="Delete Account" className="w-8 h-8 mr-2 inline-block" />
                Delete Account
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Main Content */}
      <div className="w-3/4 p-4 overflow-y-auto scrollbar-hide">Main Content</div>
    </div>
  );
}

export default Sidebar;