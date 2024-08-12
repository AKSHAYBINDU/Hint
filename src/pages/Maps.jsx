import React, { useState } from "react";
import hotelImg from "../assets/images/hotelImg.png";
import BottomNav from "../components/BottomNav";
import Draggable from "react-draggable";
import { useNavigate } from "react-router-dom";

const Maps = () => {
  const [selectedButton, setSelectedButton] = useState("upcoming");
  const [isMapFullscreen, setIsMapFullscreen] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = (button) => {
    // handle the upcoming and ongoing events here.

    setSelectedButton(button);
  };

  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };


  // handle the restaurant features.
  const handleClickRestaurant = () => {
    navigate("/restaurant-details");
  };

  const isOngoingSelected = selectedButton === "ongoing";

  // for toggling between map fullscreen.
  const toggleFullscreenMap = () => {
    setIsMapFullscreen((prev) => !prev);
  };

  return (
    <div className=" h-screen overflow-hidden">
      {/* Have to implement the Map here. */}
      <section
        className={`map-section ${
          isMapFullscreen ? "h-full" : "h-1/4"
        } bg-white transition-all duration-300 ease-in-out`}
        onClick={toggleFullscreenMap}
      >
        {/* Center the map in full screen */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-[#845CFC] text-4xl font-bold">Map</div>
        </div>
      </section>
      {/* The list of Events */}

      <section
        className={`bg-black sticky h-screen overflow-auto rounded-t-[40px] ${
          isMapFullscreen ? "transform-translate-down" : ""
        }`}
      >
        <div className=" mt-11 mx-6">
          <h3 className=" text-[#845CFC] text-2xl font-medium font-['Lufga']">
            The Listing
          </h3>
          <span className=" text-white text-base font-normal font-['Lufga'">
            Discover all the ongoing and upcoming events in your town.
          </span>
        </div>

        {/* Drop Down for Restaurant */}

        <div className=" flex flex-wrap justify-between items-center  m-6 gap-1">
          <div>
            <select
              id="dropdown"
              value={selectedOption}
              onChange={handleSelectChange}
              className="px-2 py-1 rounded-md  bg-black text-white text-xl outline-none text-opacity-95 border-none "
            >
              <option
                value=""
                className="  text-zinc-300 text-base font-normal font-['Lufga']"
              >
                Restaurant
              </option>
              <option
                value="option1"
                className="  text-zinc-300 text-base font-normal font-['Lufga']"
              >
                Bar
              </option>
              <option
                value="option2"
                className="  text-zinc-300 text-base font-normal font-['Lufga']"
              >
                Option 2
              </option>
              <option
                value="option3"
                className="  text-zinc-300 text-base font-normal font-['Lufga']"
              >
                Option 3
              </option>
            </select>

            {selectedOption && (
              <p className="mt-2">You selected: {selectedOption}</p>
            )}
          </div>
          <div className={`bg-white h-[38px]  flex rounded-[19px]  `}>
            <button
              className={`pl-5 button-transition-maps rounded-[19px] outline-none text-center text-xs font-medium overflow-hidden ${
                selectedButton === "upcoming"
                  ? "bg-[#845CFC] text-white   pr-5"
                  : "bg-transparent text-[#845CFC]  pr-5"
              }`}
              onClick={() => handleButtonClick("upcoming")}
            >
              Upcoming
            </button>
            <button
              className={`pr-5 button-transition-maps rounded-[19px]  outline-none text-center text-xs font-medium overflow-hidden ${
                selectedButton === "ongoing"
                  ? "bg-[#845CFC] text-white  pl-5"
                  : "bg-transparent text-[#845CFC] pl-5"
              }`}
              onClick={() => handleButtonClick("ongoing")}
            >
              Ongoing
            </button>
          </div>
        </div>

        {/* Upcoming Event List */}
        {isOngoingSelected ? (
          <section className=" grid gap-5 m-6 overflow-y-auto ">
            {/* Events should map through here */}
            <div
              onClick={handleClickRestaurant}
              className=" w-full h-32 maps-card-border-gradient overflow-hidden rounded-2xl flex "
            >
              <div className=" h-32 w-32 relative overflow-hidden rounded-2xl">
                <img
                  src={hotelImg}
                  alt="Event image"
                  className=" rounded-2xl  max-w-full max-h-fit"
                />
              </div>
              <div className=" mt-2 ml-6">
                <h3 className=" text-zinc-300 text-base font-normal font-['Lufga']">
                  Demon Slay Club
                </h3>
                <span className=" text-[#D9D9D9] text-xs leading-tight font-light font-['Lufga'] ">
                  FC ROAD, PUNE <br /> 179 ACTIVE USERS
                </span>
              </div>
            </div>

            <div className=" w-full h-32 maps-card-border-gradient overflow-hidden rounded-2xl flex ">
              <div className=" h-32 w-32 relative overflow-hidden rounded-2xl">
                <img
                  src={hotelImg}
                  alt="Event image"
                  className=" rounded-2xl  max-w-full max-h-fit"
                />
              </div>
              <div className=" mt-2 ml-6">
                <h3 className=" text-zinc-300 text-base font-normal font-['Lufga']">
                  Demon Slay Club
                </h3>
                <span className=" text-[#D9D9D9] text-xs leading-tight font-light font-['Lufga'] ">
                  FC ROAD, PUNE <br /> 179 ACTIVE USERS
                </span>
              </div>
            </div>

            <div className=" mt-28"></div>
          </section>
        ) : (
          <section className=" grid gap-5 m-6 overflow-y-auto ">
            {/* Events should map through here */}
            <div
              onClick={handleClickRestaurant}
              className=" w-full h-32 maps-card-border-gradient overflow-hidden rounded-2xl flex "
            >
              <div className=" h-32 w-32 relative overflow-hidden rounded-2xl">
                <img
                  src={hotelImg}
                  alt="Event image"
                  className=" rounded-2xl  max-w-full max-h-fit"
                />
              </div>
              <div className=" mt-2 ml-6">
                <h3 className=" text-zinc-300 text-base font-normal font-['Lufga']">
                  Demon Slay Club
                </h3>
                <span className=" text-[#D9D9D9] text-xs leading-tight font-light font-['Lufga'] ">
                  FC ROAD, PUNE <br /> 179 ACTIVE USERS
                </span>
              </div>
            </div>

            <div className=" w-full h-32 maps-card-border-gradient overflow-hidden rounded-2xl flex ">
              <div className=" h-32 w-32 relative overflow-hidden rounded-2xl">
                <img
                  src={hotelImg}
                  alt="Event image"
                  className=" rounded-2xl  max-w-full max-h-fit"
                />
              </div>
              <div className=" mt-2 ml-6">
                <h3 className=" text-zinc-300 text-base font-normal font-['Lufga']">
                  Demon Slay Club
                </h3>
                <span className=" text-[#D9D9D9] text-xs leading-tight font-light font-['Lufga'] ">
                  FC ROAD, PUNE <br /> 179 ACTIVE USERS
                </span>
              </div>
            </div>

            <div className=" w-full h-32 maps-card-border-gradient overflow-hidden rounded-2xl flex ">
              <div className=" h-32 w-32 relative overflow-hidden rounded-2xl">
                <img
                  src={hotelImg}
                  alt="Event image"
                  className=" rounded-2xl  max-w-full max-h-fit"
                />
              </div>
              <div className=" mt-2 ml-6">
                <h3 className=" text-zinc-300 text-base font-normal font-['Lufga']">
                  Demon Slay Club
                </h3>
                <span className=" text-[#D9D9D9] text-xs leading-tight font-light font-['Lufga'] ">
                  FC ROAD, PUNE <br /> 179 ACTIVE USERS
                </span>
              </div>
            </div>

            <div className=" w-full h-32 maps-card-border-gradient overflow-hidden rounded-2xl flex ">
              <div className=" h-32 w-32 relative overflow-hidden rounded-2xl">
                <img
                  src={hotelImg}
                  alt="Event image"
                  className=" rounded-2xl  max-w-full max-h-fit"
                />
              </div>
              <div className=" mt-2 ml-6">
                <h3 className=" text-zinc-300 text-base font-normal font-['Lufga']">
                  Demon Slay Club
                </h3>
                <span className=" text-[#D9D9D9] text-xs leading-tight font-light font-['Lufga'] ">
                  FC ROAD, PUNE <br /> 179 ACTIVE USERS
                </span>
              </div>
            </div>

            <div className=" w-full h-32 maps-card-border-gradient overflow-hidden rounded-2xl flex ">
              <div className=" h-32 w-32 relative overflow-hidden rounded-2xl">
                <img
                  src={hotelImg}
                  alt="Event image"
                  className=" rounded-2xl  max-w-full max-h-fit"
                />
              </div>
              <div className=" mt-2 ml-6">
                <h3 className=" text-zinc-300 text-base font-normal font-['Lufga']">
                  Demon Slay Club
                </h3>
                <span className=" text-[#D9D9D9] text-xs leading-tight font-light font-['Lufga'] ">
                  FC ROAD, PUNE <br /> 179 ACTIVE USERS
                </span>
              </div>
            </div>

            <div className=" w-full h-32 maps-card-border-gradient overflow-hidden rounded-2xl flex ">
              <div className=" h-32 w-32 relative overflow-hidden rounded-2xl">
                <img
                  src={hotelImg}
                  alt="Event image"
                  className=" rounded-2xl  max-w-full max-h-fit"
                />
              </div>
              <div className=" mt-2 ml-6">
                <h3 className=" text-zinc-300 text-base font-normal font-['Lufga']">
                  Demon Slay Club
                </h3>
                <span className=" text-[#D9D9D9] text-xs leading-tight font-light font-['Lufga'] ">
                  FC ROAD, PUNE <br /> 179 ACTIVE USERS
                </span>
              </div>
            </div>
            <div className=" mt-28"></div>
          </section>
        )}
      </section>

      {/* Bottom Navigation */}
      <div className="  w-full bg-black fixed bottom-0 backdrop-blur-6xl bg-transparent bg-gradient-to-t from-[#4B0E83] ">
        <div className=" mx-6 my-2">
          <BottomNav />
        </div>
      </div>
    </div>
  );
};

export default Maps;
