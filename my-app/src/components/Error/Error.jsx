import React, { useEffect, useState } from 'react';

const ErrorComponent = ({ message }) => {
  const [showError, setShowError] = useState(true);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.classList.contains('error-overlay')) {
        setShowError(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleClose = () => {
    setShowError(false);
  };

  return showError ? (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center error-overlay bg-black bg-opacity-50 z-50">
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded h-24 w-64 text-center">
        <strong className="font-bold">Error:</strong>
        <span className="block sm:inline">{message}</span>
      </div>
    </div>
  ) : null;
};

export default ErrorComponent;
