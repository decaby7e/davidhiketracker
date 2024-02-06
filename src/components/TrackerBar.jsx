import React from "react";

// NOTE: idea: have the bar run from the top to the bottom of the page and set
//             the timer to show how long until the next milestone in the bar is
//             reached. add silly GIFs as markers?
const TrackerBar = ({ percentComplete }) => {
  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="flex border-2 border-green-600 rounded-lg flex-grow w-[3rem]">
          <div
            className={`bg-green-600 border-2 border-green-600 rounded-lg`}
            style={{ width: "100%", height: `${percentComplete}%` }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default TrackerBar;
