import React, { useState, useEffect, useRef } from "react";

const Loader = () => {

    const [loading, setLoading] = useState(true);
    const [completed, setcompleted] = useState(undefined);
    const [visible, setVisible] = useState(true);

    const loaderRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setcompleted(true);
      loaderRef.current.classList.add("done");
      setVisible(false)
    }, 2000);
  }, []);

    return (
        <div>
        {visible &&
        <div className="loader-container" ref={loaderRef}> 
          {!completed ? (
        <>
          {!loading ? (
            <div className="completed">&#x2713;</div>
          ) : (
            <div className="spinner">
              <span>Loading...</span>
              <div className="half-spinner"></div>
            </div>
          )}
        </>
      ) : (
        <>
          
        </>
      )}
          </div>
      }
      </div>
    );
}
 
export default Loader;