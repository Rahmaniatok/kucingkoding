import nextConnect from 'next-connect';
import { verify } from './verify.py'; // Adjust the path accordingly

const handler = nextConnect();

handler.post(async (req, res) => {
  const { image } = req.body;

  // Save the received image to a file or process it directly
  // For example, save to a file (make sure to install 'fs' package)
  const fs = require('fs');
  fs.writeFileSync('application_data/input_image/input_image.jpg', image, 'base64');

  // Run verification using the provided logic
  const verificationResult = await runVerification();

  res.json({ verified: verificationResult });
});

const runVerification = async () => {
  // Make a request to the Python script or module
  try {
    const response = await axios.post('http://localhost:3000/verify'); // Assuming the Python script is running on http://localhost:5000
    const verificationResult = response.data.verified;
    return verificationResult;
  } catch (error) {
    console.error('Error during verification:', error);
    return false;
  }
};

export default handler;
