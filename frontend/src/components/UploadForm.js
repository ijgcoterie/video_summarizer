import React, { useState } from 'react';
import axios from 'axios';

const UploadForm = ({ onSummary }) => {
  const [file, setFile] = useState(null);
  const [context, setContext] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('context', context);

    try {
      const response = await axios.post('http://127.0.0.1:6000/summarize', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      onSummary(response.data.summary);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="px-6 py-4">
        <h2 className="text-2xl font-bold text-gray-800">Upload Video</h2>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <label className="block text-gray-700">Select Video File</label>
            <input
              type="file"
              accept="video/*"
              onChange={handleFileChange}
              className="mt-2 px-3 py-2 border rounded-md w-full"
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-700">Context (Optional)</label>
            <textarea
              value={context}
              onChange={(e) => setContext(e.target.value)}
              className="mt-2 px-3 py-2 border rounded-md w-full"
              rows="4"
              placeholder="Provide any context here..."
            ></textarea>
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md"
            >
              Summarize
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadForm;
