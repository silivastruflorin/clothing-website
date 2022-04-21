import React, { useEffect, useRef, useState } from "react";

// Hook
 export function useComponentSize(ref) {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [componentSize, setComponentSize] = useState({
      width: undefined,
      height: undefined,
    });

      // Handler to call on window resize
    function handleResize() {
        console.log('event fired')
      // Set window width/height to state
      setComponentSize({
        width: ref.current.offsetWidth,   // to get window size modify this line
        height: ref.current.offsetHeight, // to get window size modify this line
      });
    }

    useEffect(() => {
      // Add event listener
      window.addEventListener("resize", handleResize);  // fires every time window is resized
      // Call handler right away so state gets updated with initial window size
      handleResize();
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return componentSize;
  }

  export function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      // Add event listener
      window.addEventListener("resize", handleResize);
      // Call handler right away so state gets updated with initial window size
      handleResize();
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }