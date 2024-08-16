import React, { useState, useEffect } from "react";
import "./Loader.css"; // Import the styles as a separate CSS file

const Loader = () => {
  const [loading, setLoading] = useState(true); // State to control loader visibility

  useEffect(() => {
    // Simulate loading with a delay
    const loadTimer = setTimeout(() => {
      setLoading(false); // Trigger the fade-out effect after 2 seconds
    }, 2000);

    return () => clearTimeout(loadTimer); // Cleanup the timer on unmount
  }, []);

  return (
    <>
      {loading && (
        <div className={`loader-overlay ${!loading ? "fade-out" : ""}`}>
          <div className="loader"></div>
        </div>
      )}
      <div id="LoadFunc">{/* Your content here */}</div>
    </>
  );
};

export default Loader;
