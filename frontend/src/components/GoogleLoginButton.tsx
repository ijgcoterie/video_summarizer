import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const clientId = 'YOUR_GOOGLE_CLIENT_ID';

const GoogleLoginButton: React.FC<{
  onSuccess: (response: any) => void;
  onFailure: () => void;
}> = ({ onSuccess, onFailure }) => {
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin onSuccess={onSuccess} onError={onFailure} />
    </GoogleOAuthProvider>
  );
};

export default GoogleLoginButton;
