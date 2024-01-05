import React from "react";

const TrackerBar = ({ percentComplete }) => {
  return (
    <>
      <div className="flex">
        <div className="flex border-2 border-green-600 rounded-lg flex-grow h-[3rem]">
          <div
            className={`bg-green-600 border-2 border-green-600 rounded-lg`}
            style={{ width: `${percentComplete}%` }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default TrackerBar;
