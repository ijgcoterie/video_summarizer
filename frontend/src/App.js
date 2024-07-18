import React, { useState } from 'react';
import UploadForm from './components/UploadForm';
import Summary from './components/Summary';

const App = () => {
  const [summary, setSummary] = useState('');

  return (
    <div className="min-h-screen bg-gray-50 py-6 flex flex-col justify-center sm:py-12">
      <div className='py-6 px-4'>
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <UploadForm onSummary={setSummary} />
              {summary && <Summary summary={summary} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
