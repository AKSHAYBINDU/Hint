import React, { useState } from "react";
import homegradient from "../assets/Images/homegradient.png";
import BottomNav from "../components/BottomNav";
import ChatButton from "../assets/icons/Hint.svg";
import CardList from "../assets/icons/CardList.svg";
import Verify from "../assets/icons/Verify.svg";
import Like from "../assets/icons/Like.svg";
import { useUser } from "../context/UserContext";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import HotelImage from "../assets/images/hotelImg.png";
import Image from "../assets/images/Image.png";

const HintPremium = () => {
  const { userData } = useUser();

  const [like, setLike] = useState(5);

  console.log(userData);

  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);

  const handleLike = () => {
    setLike(like + 1);
  };

  const profiles = [
    {
      profileImageOne: HotelImage,
      name: "John Doe",
      age: 25,
    },
    {
      profileImageOne: Image,
      name: "Jane Smith",
      age: 28,
    },
    {
      profileImageOne: HotelImage,
      name: "Alex Johnson",
      age: 22,
    },
    {
      profileImageOne: HotelImage,
      name: "Emily Brown",
      age: 30,
    },
    {
      profileImageOne: HotelImage,
      name: "Michael Davis",
      age: 27,
    },
    {
      profileImageOne: HotelImage,
      name: "Sophia Lee",
      age: 26,
    },
    {
      profileImageOne: HotelImage,
      name: "William White",
      age: 29,
    },
    {
      profileImageOne: HotelImage,
      name: "Olivia Taylor",
      age: 24,
    },
    {
      profileImageOne: HotelImage,
      name: "Daniel Miller",
      age: 31,
    },
    {
      profileImageOne: HotelImage,
      name: "Ella Moore",
      age: 23,
    },
  ];

  const handleSlideChange = (swiper) => {
    setCurrentProfileIndex(swiper.activeIndex);
  };

  // handle the send hint here.
  const handleSendHint = () => {
    
  }

  return (
    <div className=" bg-black overflow-hidden h-screen fixed  ">
      {/* View persons who liked your profile */}
      <div className=" m-6 fixed p-3 h-fit py-[13px] bg-[#634880] bg-opacity-60 rounded-full  justify-center items-center bg inset-y-0 z-20 ">
        <Link to="/card-list">
          <img
            src={CardList}
            alt="Love button for card list"
            className=" translate-y-[2px]"
          />
        </Link>
      </div>

      {/* Slider Component. */}
      <Swiper
        className=" h-full w-full"
        direction={"vertical"}
        loop={true}
        onSlideChange={handleSlideChange}
      >
        {profiles.map((profile, index) => (
          <SwiperSlide
            className=" w-full h-full items-center flex justify-center object-center"
            key={index}
          >
            <img
              src={profile.profileImageOne}
              alt="homestyle"
              className=" w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Bottom Navigation */}
      <div className=" fixed inset-x-0 bottom-0 z-20 bg-gradient-to-t from-[#4B0E83]">
        <section className=" relative z-20 bottom-[95px] pl-2 inline-flex inset-x-0  mx-6 py-2 pointer-events-auto ">
          <div className=" fixed z-10">
            <div className=" flex gap-3">
              <div className=" w-fit  h-[27px] px-5 bg-violet-500 rounded-[34px]">
                <span className="  text-white text-xs font-normal drop-shadow-lg ">
                  {userData.statuses[0]}
                </span>
              </div>
              <div className=" flex gap-1">
                <img src={Like} alt="Like button" className=" drop-shadow-lg" />
                <span className=" text-white text-lg font-bold font-['Lufga'] drop-shadow-lg translate-y-1">
                  {like}
                </span>
              </div>
            </div>
            <div className="  mt-1 mx-2 flex gap-2 ">
              <Link to="/hintUSerDetails/:userId">
                <span className="text-white text-2xl font-bold drop-shadow-lg">
                  {profiles[currentProfileIndex].name[0]},{" "}
                  {profiles[currentProfileIndex].age}
                </span>
              </Link>

              <img src={Verify} alt="Verfiy button" />
            </div>
            <div className=" mx-2 mt-1   ">
              <span className=" text-stone-300 text-lg font-normal drop-shadow-lg ">
                {userData.qualification}Mca
                {", "}
              </span>
              <span className=" text-stone-300 text-lg font-normal drop-shadow-lg">
                {userData.gender === "Women" ? "Female" : ""}
                {userData.gender === "Men" ? "Male" : ""}
                {userData.gender === "Others" ? "Others" : ""}Female
              </span>
            </div>
          </div>
        </section>
        <div className=" mb-2 mx-6 ">
          <div className=" flex gap-2 mb-4 mx-1 ">
            <button onClick={handleSendHint} className=" w-full bg-violet-500 rounded-[34px] backdrop-blur-[10px] text-white text-lg font-medium font-['Lufga']">
              Send a hint!
            </button>
            <button
              onClick={handleLike}
              className=" custom-send-a-hint-height bg-[#5B3E79] rounded-full  justify-center items-center"
            >
              <img src={ChatButton} alt="Hint svg" className=" w-12" />
            </button>
          </div>
          <BottomNav />
        </div>
      </div>
    </div>
  );
};

export default HintPremium;
