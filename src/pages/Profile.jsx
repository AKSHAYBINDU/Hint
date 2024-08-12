import React, { useState } from "react";
import profilebasicgradient from "../assets/images/profile-basic-gradient.png";
import settings from "../assets/icons/settings.svg";
import AddButton2 from "../assets/icons/AddButton2.svg";
import rightarrow from "../assets/icons/rightarrow.svg";

import { Link,useNavigate } from "react-router-dom";
import GenderSelection from "../components/GenderButton";
import Interest from "../components/Interest";

const Profile = () => {
  const [selectedGender, setSelectedGender] = useState("");
  const [bio, setBio] = useState("");
  const navigate = useNavigate();

  const handleAddPhoto = () => {
    // For adding more images.
    navigate("/retake")
  };

  const handleSendInvites = () => {
    //For Sending Invites.
  };

  const handleToggleInstagram = () => {
    //For Handling Instagram.
  };

  const handleToggleSpotify = () => {
    //For Handling Spotify.
  };

  const handleWork = () => {
    // Handle Work.
  };
  const handleEducation = () => {
    // Handle Education.
  };
  const handleGender = () => {
    // Handle Gender.
  };
  const handleHeight = () => {
    // Handle Height.
  };
  const handleStarSign = () => {
    // Handle Start sign.
  };
  const handlePersonalityType = () => {
    // Handle Personality.
  };
  return (
    <div className=" relative bg-black h-screen overflow-auto">
      {/* Gradient Images for background. */}
      <div className=" absolute z-0">
        <img
          src={profilebasicgradient}
          alt="profilebasicgradient"
          className="w-full h-full object-cover"
        />
      </div>
      <section className=" m-8 absolute inset-x-0">
        {/* Settings Button */}
        <div className=" flex justify-end">
          <Link to="/settings">
            <img src={settings} alt="settings" className=" w-[22px] h-[22px]" />
          </Link>
        </div>

        {/* For Profile Images */}
        <div className=" justify-center items-center flex flex-col">
          <div className=" flex gap-4 justify-center items-center">
            <div className=" w-[83px] h-[83px] rounded-full bg-stone-900 flex justify-center items-center profile-border-gradient">
              <img src="#" alt="profile image one" />
            </div>
            <div className=" w-[83px] h-[83px] rounded-full bg-stone-900 flex justify-center items-center profile-border-gradient">
              <img src="#" alt="profile image two" />
            </div>
          </div>
          <span className=" text-white text-sm font-normal font-['Lufga'] mt-3 mb-1">
            Edit live picture
          </span>
          <span className="  text-white text-2xl font-bold font-['Lufga']">
            Name{" "}
            <span className=" text-white text-sm font-normal font-['Lufga']">
              Age
            </span>
          </span>
        </div>

        {/*Invite and send Invites. */}
        <div className=" mt-8">
          <div>
            <h3 className=" text-white text-2xl font-medium font-['Lufga']">
              Invites
            </h3>
            <span className=" text-white text-sm font-normal font-['Lufga'] mt-3 mb-1">
              Edit live picture
            </span>
          </div>
          <div className=" my-12 text-center">
            <button
              onClick={handleSendInvites}
              className=" mb-[6px] bg-gradient-to-r from-[#845CFCBA] to-[#845CFC2B] w-full rounded-full py-3.5 text-white text-base font-medium font-['Lufga'] "
            >
              Send Invites
            </button>
            <h6 className=" text-[#D8D8D8] text-base font-normal font-['Lufga'] leading-relaxed tracking-tight ">
              Want to become a VIP?{" "}
              <Link to="/premium">
                <span className=" text-[#845CFC]  text-base font-bold font-['Lufga'] leading-relaxed tracking-tight">
                  Apply here.
                </span>
              </Link>
            </h6>
          </div>
        </div>

        {/*  For Add more Picutes */}
        <div>
          <h3 className=" text-white text-2xl font-medium font-['Lufga']">
            Add pictures
          </h3>
          <span className="  text-white text-sm font-normal font-['Lufga']">
            Add pictures from your gallery
          </span>
          <div className=" flex justify-between items-center gap-2 my-8">
            <button
              onClick={handleAddPhoto}
              className="w-[99px] h-[93px] bg-[#202020] rounded-[10px] flex justify-center items-center"
            >
              <img src={AddButton2} alt="Add button" />
            </button>
            <button
              onClick={handleAddPhoto}
              className="w-[99px] h-[93px] bg-[#202020] rounded-[10px] flex justify-center items-center"
            >
              <img src={AddButton2} alt="Add button" />
            </button>
            <button
              onClick={handleAddPhoto}
              className="w-[99px] h-[93px] bg-[#202020] rounded-[10px] flex justify-center items-center"
            >
              <img src={AddButton2} alt="Add button" />
            </button>
          </div>
        </div>

        {/* Gender */}
        <div>
          <div className=" mb-4">
            <span className=" text-white text-2xl font-medium font-['Lufga']">
              Gender
            </span>
          </div>
          <GenderSelection
            setSelectedGender={setSelectedGender}
            selectedGender={selectedGender}
          />
        </div>

        {/* For Edit Interest. */}
        <div className=" mt-11">
          <div className=" mb-4">
            <span className=" text-white text-2xl font-medium font-['Lufga']">
              Edit Interest
            </span>
          </div>
          <Interest />
        </div>

        {/* For Bio */}
        <div className=" mt-11 ">
          <h3 className=" text-white text-2xl font-medium font-['Lufga']">
            My Bio
          </h3>
          <span className="  text-white text-sm font-normal font-['Lufga']">
            Write a one liner fun into{" "}
          </span>
          <div className=" mt-6">
            <textarea
              rows={3}
              cols={40}
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              type="text"
              className=" py-3 px-3 bg-[#202022] text-white text-base font-normal font-['Lufga'] w-full rounded-[10px] outline-none "
            />
          </div>
        </div>

        {/* For My Basics */}
        <div className=" mt-11">
          <h3 className=" text-white text-2xl font-medium font-['Lufga']">
            My Basics
          </h3>
          <div className=" mt-7 flex flex-col gap-3">
            <div className=" flex justify-between items-center ">
              <div className=" flex gap-2">
                <div className="w-5 h-5 bg-zinc-300 rounded-[7px]"></div>
                <span className=" text-white text-sm font-medium">Work</span>
              </div>
              <div className=" flex gap-2">
                <button
                  onClick={handleWork}
                  className=" flex gap-2 text-center items-center justify-center"
                >
                  <span className=" text-white text-sm font-medium">Add</span>
                  <img src={rightarrow} alt=" right arrow" />
                </button>
              </div>
            </div>
            <div className=" flex justify-between items-center ">
              <div className=" flex gap-2">
                <div className="w-5 h-5 bg-zinc-300 rounded-[7px]"></div>
                <span className=" text-white text-sm font-medium">
                  Education
                </span>
              </div>
              <div className=" flex gap-2">
                <button
                  onClick={handleEducation}
                  className=" flex gap-2 text-center items-center justify-center"
                >
                  <span className=" text-white text-sm font-medium">Add</span>
                  <img src={rightarrow} alt=" right arrow" />
                </button>
              </div>
            </div>
            <div className=" flex justify-between items-center ">
              <div className=" flex gap-2">
                <div className="w-5 h-5 bg-zinc-300 rounded-[7px]"></div>
                <span className=" text-white text-sm font-medium">Gender</span>
              </div>
              <div className=" flex gap-2">
                <button
                  onClick={handleGender}
                  className=" flex gap-2 text-center items-center justify-center"
                >
                  <span className=" text-white text-sm font-medium">Add</span>
                  <img src={rightarrow} alt=" right arrow" />
                </button>
              </div>
            </div>
            <div className=" flex justify-between items-center ">
              <div className=" flex gap-2">
                <div className="w-5 h-5 bg-zinc-300 rounded-[7px]"></div>
                <span className=" text-white text-sm font-medium">Height</span>
              </div>
              <div className=" flex gap-2">
                <button
                  onClick={handleHeight}
                  className=" flex gap-2 text-center items-center justify-center"
                >
                  <span className=" text-white text-sm font-medium">Add</span>
                  <img src={rightarrow} alt=" right arrow" />
                </button>
              </div>
            </div>
            <div className=" flex justify-between items-center ">
              <div className=" flex gap-2">
                <div className="w-5 h-5 bg-zinc-300 rounded-[7px]"></div>
                <span className=" text-white text-sm font-medium">
                  Star sign
                </span>
              </div>
              <div className=" flex gap-2">
                <button
                  onClick={handleStarSign}
                  className=" flex gap-2 text-center items-center justify-center"
                >
                  <span className=" text-white text-sm font-medium">Add</span>
                  <img src={rightarrow} alt=" right arrow" />
                </button>
              </div>
            </div>
            <div className=" flex justify-between items-center ">
              <div className=" flex gap-2">
                <div className="w-5 h-5 bg-zinc-300 rounded-[7px]"></div>
                <span className=" text-white text-sm font-medium">
                  Personality type
                </span>
              </div>
              <div className=" flex gap-2">
                <button
                  onClick={handlePersonalityType}
                  className=" flex gap-2 text-center items-center justify-center"
                >
                  <span className=" text-white text-sm font-medium">Add</span>
                  <img src={rightarrow} alt=" right arrow" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Connect Accounts */}
        <div className=" mt-11">
          <h3 className=" text-white text-2xl font-medium font-['Lufga']">
            Connect accounts
          </h3>
          <div className=" mt-7">
            <div className=" flex justify-between mb-2">
              <div className=" flex gap-2">
                <div className="w-5 h-5 bg-zinc-300 rounded-[7px]"></div>
                <span className=" text-white text-sm font-medium">
                  Connect your Instagram
                </span>
              </div>
              <label className=" relative w-[48px] h-[27px]">
                <input
                  type="checkbox"
                  onClick={handleToggleInstagram}
                  className=" hidden"
                />
                <span
                  className={`slider-toggle border-gradient-rounded `}
                ></span>
              </label>
            </div>
            <div className=" flex justify-between">
              <div className=" flex gap-2">
                <div className="w-5 h-5 bg-zinc-300 rounded-[7px]"></div>
                <span className=" text-white text-sm font-medium">
                  Connect your Instagram
                </span>
              </div>
              <label className=" relative w-[48px] h-[27px]">
                <input
                  type="checkbox"
                  onClick={handleToggleSpotify}
                  className=" hidden"
                />
                <span
                  className={`slider-toggle border-gradient-rounded `}
                ></span>
              </label>
            </div>
          </div>
        </div>

        {/* Premium */}
        <div className=" my-9 text-center">
          <Link to="/premium">
            <button className=" mb-[6px] bg-gradient-to-r from-[#845CFCBA] to-[#845CFC2B] w-full rounded-full py-3.5 text-white text-base font-medium font-['Lufga'] ">
              Join Premium
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Profile;
