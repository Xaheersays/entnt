import React from 'react';

const Stocks = ({ available, total }) => {
  // Calculate the percentage of available stocks
  const percentage = (available / total) * 100;

  // Determine the color based on the percentage
  let colorClass = '';
  if (percentage <= 30) {
    colorClass = 'bg-red-600'; // Red color for less than or equal to 30%
  } else {
    colorClass = 'bg-green-600'; // Green color for more than 30%
  }

  return (
    <div className="flex flex-col items-center">
      <div className="w-full h-4 bg-gray-400 rounded-lg overflow-hidden" title={`${available}/${total} Available`}>
        <div className={`h-full ${colorClass}`} style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};

export default Stocks;
