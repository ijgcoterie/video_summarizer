import React, { useState } from 'react';
import GoogleLoginButton from './components/GoogleLoginButton';
import { UploadCard } from './components/UploadCard';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  const handleLoginSuccess = (response: any) => {
    const tokenId = response.credential;
    fetch('http://localhost:5000/auth/google/verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token: tokenId }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.email.endsWith('@coterie.com')) {
          setIsAuthenticated(true);
          setUserEmail(data.email);
        } else {
          alert('Access denied. Please use a @coterie.com email.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Login failed. Please try again.');
      });
  };

  const handleLoginFailure = () => {
    console.error('Login failed');
    alert('Login failed. Please try again.');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-4 overflow-y-auto bg-gray-50">
          {isAuthenticated ? (
            <div className="py-6 px-4">
              <UploadCard />
            </div>
          ) : (
            <div className="flex justify-center items-center h-full">
              <GoogleLoginButton
                onSuccess={handleLoginSuccess}
                onFailure={handleLoginFailure}
              />
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default App;
