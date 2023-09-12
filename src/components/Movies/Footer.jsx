import React from "react";
import SpaceContainer from "../utils/SpaceContainer";

const Footer = () => {
  return (
    <SpaceContainer>
      <footer className=" p-2 flex items-center justify-center">
        <div className="py-5 w-[492px] mx-auto">
          <div className="flex flex-col space-y-5">
            <div className="flex justify-around mx-16">
              <img
                src="/images/fb.png"
                className="w-5 h-5 object-contain fill-"
              />
              <img
                src="/images/ig.png"
                className="w-5 h-5 object-contain fill-"
              />
              <img
                src="/images/tw.png"
                className="w-5 h-5 object-contain fill-"
              />
              <img
                src="/images/yt.png"
                className="w-5 h-5 object-contain fill-"
              />
            </div>
            <div className="flex justify-around">
              <p className="font-bold text-gray-900">Conditions of Use</p>
              <p className="font-bold text-gray-900">Privacy & Policy</p>
              <p className="font-bold text-gray-900">Press Room</p>
            </div>
            <p className="text-center text-gray-500">
              © 2021 MovieBox by Adriana Eka Prayudha
            </p>
          </div>
        </div>
      </footer>
    </SpaceContainer>
  );
};

export default Footer;
