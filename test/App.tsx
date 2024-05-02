import React from 'react';
import SplashScreen from '../src/SplashScreen';

const App: React.FC = () => {
  // Pre-configured values for a unique and visually appealing effect
  const name = "Splash Screen Sample";
  const duration = 500000;
  const backgroundColor = "rgb(82, 82, 82)";
  const fontColor = "rgb(255, 255, 255)";
  const blobColor = "rgb(222, 98, 82)"; // A vibrant teal color for the blob
  const fontUrl = "https://fonts.gstatic.com/s/montserrat/v14/JTURjIg1_i6t8kCHKm45_dJE3gnD-w.ttf";
  const distortionScale =2; // Enhanced distortion effect
  const waveSpeed = 50; // Faster wave animation

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <SplashScreen
        name={name}
        duration={duration}
        backgroundColor={backgroundColor}
        fontColor={fontColor}
        blobColor={blobColor}
        fontUrl={fontUrl}
        distortionScale={distortionScale}
        waveSpeed={waveSpeed}
      />
      {/* Content to display after the SplashScreen. This could be more dynamic or just a static display like a welcome message. */}
      { duration &&
        <div style={{ color: 'white', padding: '20px', textAlign: 'center' }}>
          <h1>Welcome to our application!</h1>
          <p>Explore and experience the power of WebGL with Three.js.</p>
        </div>
      }
    </div>
  );
};

export default App;
