import * as React from "react";

import "../styles/global.css";
import TrackerBar from "../components/TrackerBar";
import CountdownTimer from "../components/CountdownTimer";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const IndexPage = () => {
  const percentComplete = 0; // TODO: implement
  const startDate = "2024-02-14"; // TODO: get real value

  return (
    <main style={pageStyles}>
      <h1 className="text-[3rem] mb-[4rem]">
        Holy Fuck! David Dilmore is Hiking the Appalachian Trail!
      </h1>
      {/* TODO: add a little description here */}
      <h2 className="text-[2.5rem] mt-[2rem] mb-[1rem] font-bold">
        Time Remaining Till Start
      </h2>
      <CountdownTimer tillDate={new Date(Date.parse(startDate))} />
      <h2 className="text-[2.5rem] mt-[2rem] mb-[1rem] font-bold">Progress</h2>
      <TrackerBar percentComplete={percentComplete} />
      <br />
      <br />
      <br />
      <p className="italic">
        Come back later for more features! (gps tracking, links to david's trail
        vlogs, milestones, etc.)
      </p>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>He's Doin It!</title>;
