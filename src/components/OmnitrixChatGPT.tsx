import React, { useState } from 'react';

interface OmnitrixProps {}

const OmnitrixChatGPT: React.FC<OmnitrixProps> = () => {
  const [currentAlien, setCurrentAlien] = useState<string | null>(null);

  const aliens = [
    'Heatblast',
    'Four Arms',
    'XLR8',
    'Diamondhead',
    'Upgrade',
    'Ripjaws',
  ];

  const getRandomAlien = () => {
    const randomIndex = Math.floor(Math.random() * aliens.length);
    setCurrentAlien(aliens[randomIndex]);
  };

  return (
    <div className="w-72 p-4 bg-gray-800 text-white rounded-lg shadow-lg">
      <h1 className="text-2xl mb-4">Omnitrix</h1>
      <div className="relative">
        <div
          className={`w-48 h-48 rounded-full mx-auto bg-green-500 flex items-center justify-center text-3xl font-semibold`}
        >
          {currentAlien || '??'}
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <button
            onClick={getRandomAlien}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300"
          >
            Transform!
          </button>
        </div>
      </div>
      {currentAlien && (
        <div className="mt-4">
          <p className="text-lg font-semibold">You are {currentAlien}!</p>
        </div>
      )}
    </div>
  );
};

export default OmnitrixChatGPT;