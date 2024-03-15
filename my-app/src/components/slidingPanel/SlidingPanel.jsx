import React, { useEffect, useRef ,useState} from 'react';
import { useRecoilState } from 'recoil';
import { sliderAtom } from '../../store/slider.atom';

const SlidingPanel = ({children }) => {
//   const [isOpen, setIsOpen] = useState(true);
//   const ref = useRef(null);

//   const handleClose = () => {
//     setIsOpen(false);
//   };

//   const handleToggle = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className={`fixed top-0 right-0 h-full w-full bg-black bg-opacity-50 z-50 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
//       <div ref={ref} className={`fixed top-0 right-0 h-full w-1/2 bg-white shadow-lg transform transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} rounded-lg`} style={{ overflowY: 'auto' }}>
//         <button onClick={handleClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none">
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M6 18L18 6M6 6l12 12" />
//           </svg>
//         </button>
//         {children}
//       </div>
//       <button onClick={handleToggle}>Toggle Slider</button>
//     </div>
//   );
// };
  const [isOpen, setIsOpen] = useRecoilState(sliderAtom);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className={`fixed top-0 right-0 h-full w-full bg-black bg-opacity-50 z-50 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} `}>
      <div ref={ref} className={`fixed top-0 right-0 h-full w-1/2 bg-white shadow-lg transform transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} rounded-lg`} style={{ overflowY: 'auto' }}>
        <button onClick={handleClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};

export default SlidingPanel;

