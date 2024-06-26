// src/pages/page.js
'use client';
import React, { useState } from 'react';

function Page() {
  const [themeColor, setThemeColor] = useState('gray');

  const handleThemeColorChange = (color) => {
    setThemeColor(color);
  };

  return (
    <div className="max-w-3xl mx-auto shadow-md rounded-xl overflow-hidden md:max-w-4xl lg:max-w-5xl xl:max-w-6xl">
      <div className="py-4 px-6 bg-white text-black">
        <h2 className="text-lg font-bold">Themes</h2>
      </div>
      <div id="maincontainer" className="flex flex-wrap justify-center md:flex-nowrap lg:flex-nowrap xl:flex-nowrap">
        <div className="left-side w-full md:w-1/2 lg:w-1/3 xl:w-1/4 pr-4 mb-4 md:mb-0">
          <div className="flex flex-wrap justify-center -mx-2">
            <div className="w-full sm:w-1/2 md:w-full lg:w-full xl:w-full px-2 mb-2">
              <button
                onClick={() => handleThemeColorChange('blue')}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
              >
                Blue
              </button>
            </div>
            <div className="w-full sm:w-1/2 md:w-full lg:w-full xl:w-full px-2 mb-2">
              <button
                onClick={() => handleThemeColorChange('green')}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full"
              >
                Green
              </button>
            </div>
            <div className="w-full sm:w-1/2 md:w-full lg:w-full xl:w-full px-2 mb-2">
              <button
                onClick={() => handleThemeColorChange('yellow')}
                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded w-full"
              >
                Yellow
              </button>
            </div>
            <div className="w-full sm:w-1/2 md:w-full lg:w-full xl:w-full px-2 mb-2">
              <button
                onClick={() => handleThemeColorChange('purple')}
                className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded w-full"
              >
                Purple
              </button>
            </div>
          </div>
        </div>
        <Right themeColor={themeColor} />
      </div>
    </div>
  );
}

export default Page;

function Right({ themeColor }) {
  const themeClass = getColorClass(themeColor);

  return (
    <div className={`right-side w-full md:w-1/2 lg:w-2/3 xl:w-3/4 pl-4 ${themeClass}`}>
      <div className="rounded-md p-4">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile Picture"
          className="w-full rounded-md object-cover object-center"
          style={{ height: '200px' }}
        />
        <h3 className="text-lg font-bold">Mason Parker</h3>
        <p>Graphics & UI/UX Designer</p>
        <p>Denver, United States</p>
      </div>
      <p>
        I am a visionary Graphics and UI/UX Designer, seamlessly blending artistic flair with technical expertise. With a degree in Graphic Design, I consistently deliver visually stunning and user-centric solutions, leaving an indelible mark on the digital landscape. As a trusted collaborator, I am dedicated to crafting pixel-perfect UIs and captivating graphics that elevate user experiences.
      </p>
    </div>
  );
}

function getColorClass(color) {
  switch (color) {
    case 'blue':
      return 'bg-blue-200 text-black';
    case 'green':
      return 'bg-green-200 text-black';
    case 'yellow':
      return 'bg-yellow-200 text-black';
    case 'purple':
      return 'bg-purple-200 text-black';
    default:
      return 'bg-gray-200 text-black';
  }
}
