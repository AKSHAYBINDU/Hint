import { useState } from "react";
import { useUser } from "../context/UserContext";

import SwipeButton from "../components/SwipeButton";

import { Link, useNavigate } from "react-router-dom";

const PersonalInfoFour = () => {
  const [qualification, setQualification] = useState("");
  const [bio, setBio] = useState("");

  const navigate = useNavigate();
  const { updateUser } = useUser();

  const handleSave = () => {
    // Launch to the hint page.
    const userData = {
      qualification,
      bio,
    };

    updateUser(userData);
    console.log(userData)
    navigate("/hint-premium");
  };

  return (
    <div className=" bg-black overflow-auto h-screen relative">
      <section className="m-[32px] inset-x-0 flex flex-col gap-10">
        <div className=" flex justify-between">
          <h3 className="text-white text-[32px] font-normal font-['Lufga']">
            Tell us more!
          </h3>
          <Link to="/hint">
            <h3 className="w-12  text-center text-white text-sm font-normal font-['Lufga']">
              skip
            </h3>
          </Link>
        </div>

        <div className=" flex flex-col gap-5">
          <h4 className="text-white text-2xl font-bold font-['Lufga']">
            Work/Education
          </h4>
          <p className="text-white text-sm font-normal font-['Lufga']">
            You can change this later
          </p>
          <input
            type="text"
            value={qualification}
            onChange={(e) => setQualification(e.target.value)}
            placeholder="Enter the highest Qualification"
            className=" border-gradient-rounded  py-3 px-3 placeholder-gray-500 bg-black text-white text-base font-normal font-['Lufga'] w-full rounded-xl border outline-none bg-transparent"
          />
        </div>
        <div className=" flex flex-col gap-5">
          <h4 className="text-white text-2xl font-bold font-['Lufga']">
            My Bio
          </h4>
          <p className="text-white text-sm font-normal font-['Lufga']">
            One sentence that will best describe you.
          </p>
          <textarea
            rows={5}
            cols={40}
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            type="text"
            placeholder="Don't use an ChatGpt cause that won't get you anywhere ;)"
            className=" border-gradient-rounded  py-3 px-3 placeholder-gray-500 bg-black text-white text-base font-normal font-['Lufga'] w-full rounded-xl border outline-none bg-transparent"
          />
        </div>

        {/* Swipe Button (Not exactly Swipe.) */}
      </section>
      <div className=" absolute bottom-10 w-full ">
        <div className=" mx-8">
          <SwipeButton Steps="Launch ;)" handleSave={handleSave} />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoFour;
