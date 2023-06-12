"use client";
import { useState } from "react";

const Gradientbg = ({ className }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState({
    color1: "rgb(253, 223, 70)",
    color2: "rgb(23, 213, 209)",
  });

  const colorOptions = [
    { id: 1, color1: "rgb(253, 223, 70)", color2: "rgb(23, 213, 209)" },
    { id: 2, color1: "rgb(28, 181, 224)", color2: "rgb(0, 8, 81)" },
    { id: 3, color1: "rgb(0, 201, 255)", color2: "rgb(146, 254, 157)" },
    { id: 4, color1: "rgb(252, 70, 107)", color2: "rgb(63, 94, 251)" },
    { id: 5, color1: "rgb(227, 255, 231)", color2: "rgb(217, 231, 255)" },
    { id: 6, color1: "rgb(253, 187, 45)", color2: "rgb(58, 28, 113)" },
    { id: 7, color1: "rgb(75, 108, 183)", color2: "rgb(24, 40, 72)" },
    { id: 8, color1: "rgb(7, 0, 184)", color2: "rgb(0, 255, 136)" },
    { id: 9, color1: "rgb(213, 51, 105)", color2: "rgb(218, 174, 81)" },
    { id: 10, color1: "rgb(0, 210, 255)", color2: "rgb(58, 71, 213)" },
  ];

  const handleColorOptionClick = (color1, color2) => {
    setSelectedOption({
      color1: color1,
      color2: color2,
    });
  };

  const styles = {
    background: {
      background: `linear-gradient(to right ,${selectedOption.color1}, ${selectedOption.color2})`,
    },
  };
  return (
    <div className={className}>
      <div className="h-screen">
        <h2 className="text-5xl p-2">Css gradients</h2>
        <div
          className="relative  w-full h-5/6 rounded-xl shadow-xl hover:shadow-2xl border-8"
          style={styles.background}
        >
          {showOptions && (
            <div className="absolute top-10 right-[120px] w-52 h-96 bg-white rounded shadow-lg ">
              <div className="h-80  px-9 py-5 flex flex-col   gap-4 overflow-auto ">
                {colorOptions.map(({ id, color1, color2 }) => (
                  <button
                    key={id}
                    className="flex flex-col gap-3 "
                    onClick={() => handleColorOptionClick(color1, color2)}
                  >
                    <label>gradient {id}</label>
                    <div className="flex gap-3">
                      <div
                        className="w-10 h-10 rounded"
                        style={{ backgroundColor: color1 }}
                      ></div>
                      <div
                        className="w-10 h-10 rounded"
                        style={{ backgroundColor: color2 }}
                      ></div>
                      {color1 === selectedOption.color1 &&
                        color2 === selectedOption.color2 && (
                          <div className="w-7 h-7 rounded-full bg-red-500 flex justify-center items-center">
                            <svg
                              className="w-6 h-6 text-white font-bold"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="currentColor"
                                stroke="currentColor"
                                strokeWidth="2"
                                d="M9 16.17L5.53 12.7a.996.996 0 1 1 1.41-1.41L9 13.17l7.3-7.3a.996.996 0 1 1 1.41 1.41l-8 8a.996.996 0 0 1-1.41 0z"
                              ></path>
                            </svg>
                          </div>
                        )}
                    </div>
                  </button>
                ))}
              </div>
              <div className="text-center py-2 border-t-2 border-gray-800">
                <a href="/genrate-gradent">Genrate gradent</a>
              </div>
            </div>
          )}

          <div className="absolute bottom-2 right-3 flex gap-3">
            <div className="w-52 h-20 bg-white rounded  shadow-lg px-6 py-5 flex gap-4 items-center">
              <div
                className="w-10 h-10 rounded"
                style={{ backgroundColor: selectedOption.color1 }}
              ></div>
              <div
                className="w-10 h-10 rounded"
                style={{ backgroundColor: selectedOption.color2 }}
              ></div>
              <button
                className=""
                onClick={() => setShowOptions((option) => !option)}
              >
                <svg width="18" height="16" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2.423 15.5h12.883a2 2 0 0 0 1.742-2.982L10.607 1.09a2 2 0 0 0-3.485 0L.681 12.518A2 2 0 0 0 2.423 15.5z"
                    fill="#04286E"
                    fillRule="evenodd"
                    fillOpacity=".5"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="w-24 h-20 bg-white rounded  shadow-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gradientbg;
