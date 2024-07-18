import React from 'react';

const Summary = ({ summary }: any) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-6">
      <div className="px-6 py-4">
        <h2 className="text-2xl font-bold text-gray-800">Summary</h2>
        <p className="mt-4 text-gray-700">{summary}</p>
      </div>
    </div>
  );
};

export default Summary;
