// pages/verification.js

import { useState, useRef } from 'react';
import axios from 'axios';

const VerificationPage = () => {
  const videoRef = useRef(null);
  const [verificationResult, setVerificationResult] = useState(null);

  const startCamera = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
      })
      .catch((error) => console.error('Error accessing camera:', error));
  };

  const captureImage = () => {
    const canvas = document.createElement('canvas');
    const video = videoRef.current;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    const capturedImage = canvas.toDataURL('image/jpeg', 0.8);

    // Send the captured image to the server for verification
    axios.post('/api/verify', { image: capturedImage })
      .then((response) => {
        setVerificationResult(response.data.verified);
      })
      .catch((error) => {
        console.error('Error during verification:', error);
      });
  };

  return (
    <div>
      <h1>Face Verification</h1>
      <video ref={videoRef} autoPlay playsInline />
      <button onClick={captureImage}>Capture and Verify</button>
      {verificationResult !== null && (
        <p>{verificationResult ? 'Verification successful' : 'Verification failed'}</p>
      )}
    </div>
  );
};

export default VerificationPage;
