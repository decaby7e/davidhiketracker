import * as React from "react";

import "../styles/global.css";
import TrackerBar from "../components/TrackerBar";
import CountdownTimer from "../components/CountdownTimer";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  textAlign: "center",
};

const IndexPage = () => {
  const percentComplete = 0; // TODO: implement
  const startDate = "2024-02-14";

  return (
    <main style={pageStyles}>
      <h1 className="text-[3rem] mb-[2rem]">
        Holy Fuck!{" "}
        <span className="hover:underline">
          <a
            className="text-transparent bg-clip-text bg-gradient-to-r from-pink-700 to-blue-700"
            href="https://www.instagram.com/david.dilmore/"
          >
            David Dilmore
          </a>
        </span>{" "}
        is Hiking the Appalachian Trail!
      </h1>
      <p className="italic">
        Come back later for more features! (gps tracking, links to david's trail
        vlogs, milestones, etc.)
      </p>

      <br />
      <br />
      <br />

      <h2 className="text-[2.5rem] mt-[2rem] mb-[1rem] font-bold">
        Time Remaining Till Start
      </h2>
      <CountdownTimer tillDate={new Date(Date.parse(startDate))} />

      <br />
      <br />
      <br />

      <h2 className="text-[2.5rem] mt-[2rem] mb-[1rem] font-bold">Map</h2>
      <iframe
        src="https://share.garmin.com/XTCCE"
        frameborder="0"
        marginwidth="0"
        marginheight="0"
        width="810"
        height="760"
      ></iframe>

      {/* TODO: Uncomment after start */}
      {/* <h2 className="text-[2.5rem] mt-[2rem] mb-[1rem] font-bold">Progress</h2>
      <TrackerBar percentComplete={percentComplete} /> */}
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>He's Doin It!</title>;
