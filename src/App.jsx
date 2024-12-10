import './index.css';
import download from './assets/download.jpeg';
import { useState } from 'react';

const App = () => {
  // State for counting
  const [count, setCount] = useState(0);

  // Array of styles (background colors)
  const styles = [
    "bg-red-500",    // Red
    "bg-blue-900",   // Blue
    "bg-green-700",  // Green
    "bg-black",      // Black
    "bg-pink-600"    // Pink
  ];

  // State for tracking the current style index for the background and images
  const [styleIndexes, setStyleIndexes] = useState([0, 1, 2]); // Initially, images and background have different styles
  const [backgroundStyleIndex, setBackgroundStyleIndex] = useState(0); // Background starts with the first style

  // Function to change the count and update styles
  const changeStyleandCount = () => {
    setCount((prevCount) => prevCount + 1); // Increment count

    // Cycle through styles for each image
    setStyleIndexes((prevIndexes) =>
      prevIndexes.map((index) => (index + 1) % styles.length)
    );

    // Change the background style
    setBackgroundStyleIndex((prevIndex) => (prevIndex + 1) % styles.length);
  };

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen ${styles[backgroundStyleIndex]}`}>
      {/* Title */}
      <h2 className="text-white text-xl text-center mb-4">Doraemon {count}</h2>

      {/* Image Boxes */}
      <div className="flex flex-row flex-wrap justify-center gap-4">
        {/* First Image Box */}
        <div
          className={`flex h-32 w-32 ${styles[styleIndexes[0]]} rounded items-center justify-center`}
        >
          <img className="h-20 w-20 rounded-full" src={download} alt="centered" />
        </div>

        {/* Second Image Box */}
        <div
          className={`flex h-32 w-32 ${styles[styleIndexes[1]]} rounded items-center justify-center`}
        >
          <img className="h-20 w-20 rounded-full" src={download} alt="centered" />
        </div>

        {/* Third Image Box */}
        <div
          className={`flex h-32 w-32 ${styles[styleIndexes[2]]} rounded items-center justify-center`}
        >
          <img className="h-20 w-20 rounded-full" src={download} alt="centered" />
        </div>
      </div>

      {/* Button to increase count and change all styles */}
      <button
        onClick={changeStyleandCount}
        className="h-10 w-40 text-center font-bold bg-white rounded text-blue-800 mt-6"
      >
        Click
      </button>
    </div>
  );
};

export default App;


