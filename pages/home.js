import Header from "../components/Header.jsx";
import Description from "../components/Description.jsx";
import GetStarted from "../components/GetStarted.jsx";
import HomeImage from "../components/HomeImage.jsx";
import SubmitImage from "../components/SubmitImage.jsx";
import Theme from "../styles/Theme";
import LoadCS from "../lib/LoadCS";
import { useState } from "react";

const Home = function () {
  const UploadFile = LoadCS("UploadFile");
  let [isShow, changeShow] = useState(false);

  return (
    <div
      style={{
        backgroundImage: "url(/Home_Gradient.svg)",
        backgroundColor: Theme.beige,
        height: "100vh",
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Header />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            display: "flex",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "Left",
            }}
          >
            <Description />
            <GetStarted show={changeShow} />
          </div>
          <HomeImage />
          {isShow ? <SubmitImage show={changeShow} /> : null}
        </div>
      </div>
    </div>
  );
};

export default Home;
