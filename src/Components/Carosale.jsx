import React from "react";

const Carosale = ({ data }) => {
  const { image, para, name, work } = data;

  return (
    <>
      <div className=" text-white flex items-center justify-center min-h-[60vh] p-6">
        <div className="max-w-4xl  flex items-center shadow-lg overflow-hidden p-2">
          <img
            src={image} // Update with the actual path to the image
            alt="Katie Kearsey"
            className="w-[18vw] h-[18vw] rounded-2xl  mx-auto"
          />
          <div className="px-8">
            <p className="text-[1.2vw] leading-relaxed">
              {para}
            </p>
            <p className="mt-4 text-[1vw] font-semibold py-1">{name}</p>
            <p className="text-gray-400 text-[0.9vw] py-1">{work}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carosale;
