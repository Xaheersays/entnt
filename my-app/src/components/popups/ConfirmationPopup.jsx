import React from 'react';

const ConfirmationPopup = ({ message, onConfirm, onCancel }) => {
  console.log('times')
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-lg">{message}</p>
        <div className="mt-4 flex justify-end">
          <button className="mr-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600" onClick={onConfirm}>Confirm</button>
          <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400" onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ConfirmationPopup);
