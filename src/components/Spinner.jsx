import React from "react";

const Spinner = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="animate-spin rounded-full border-t-4 border-[#BE123C] h-12 w-12"></div>
    </div>
  );
};

export default Spinner;
