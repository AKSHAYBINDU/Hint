import React from "react";
import Like from "../assets/icons/Like.svg";
import hotelImage from "../assets/images/hotelImg.png";

const BuffetMember = () => {
  const isPremium = false;
  return (
    <div className=" relative">
      <div className=" h-fit bg-neutral-800 rounded-[10px] relative overflow-hidden">
        {/* If the user is premium view the full image else view only the image inside the below circle */}

        {isPremium ? (
          <div>
            <img
              src={hotelImage}
              alt=" hotel image"
              className="  object-cover w-full h-full"
            />
          </div>
        ) : (
          <div className=" h-52 w-full">
            <div className=" absolute inset-0 flex justify-center items-center ">
              <div className="w-[62px] h-[62px] bg-slate-900 mt-14 mb-5 rounded-full overflow-hidden items-center -translate-y-3">
                <img src={hotelImage} alt="User profile photo" />
              </div>
            </div>
          </div>
        )}

        <div className=" absolute flex top-0 left-0  pl-3 pt-3 items-center">
          <img src={Like} alt="like icon" className=" w-3 h-3" />
          <span className=" text-white text-xs font-bold font-['Lufga']">
            5
          </span>
        </div>
      </div>
      <div className=" mx-4 mt-2">
        <h3>
          <span className=" text-zinc-300 text-xl font-semibold">N,</span>{" "}
          <span className=" text-zinc-300 text-xl font-semibold">25</span>
        </h3>
        <h3 className=" pb-2" style={{ lineHeight: "1" }}>
          <span className="text-center text-white text-sm font-normal font-['Lufga']">
            Lawyer,
          </span>{" "}
          <span className="text-center text-white text-sm font-normal font-['Lufga']">
            Female
          </span>
        </h3>
      </div>
    </div>
  );
};

export default BuffetMember;
