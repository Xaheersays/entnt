import React from 'react';

const TableSkeleton = ({ rows, cols }) => {
  return (
    <div className="border border-gray-200 rounded-md shadow-sm overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <tbody className="bg-white divide-y divide-gray-200">
          {[...Array(rows)].map((_, rowIndex) => (
            <tr key={rowIndex}>
              {[...Array(cols)].map((_, colIndex) => (
                <td
                  key={colIndex}
                  className="px-6 py-4 whitespace-nowrap"
                >
                  <div className="flex items-center">
                    <div className=" bg-gray-200 w-full h-8 animate-pulse rounded-md"></div>
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableSkeleton;
