import Header from "../components/Header.jsx";
import Description from "../components/Description.jsx";
import GetStarted from "../components/GetStarted.jsx";
import HomeImage from "../components/HomeImage.jsx";
import SubmitImage from "../components/SubmitImage.jsx";
import Theme from "../styles/Theme";
import { useState } from "react";
import ReactLoading from "react-loading";
export default function Home() {
  let [isShow, changeShow] = useState(false);

  return (
    <div
      style={{
        backgroundImage: "url(/Home_Gradient.svg)",
        backgroundColor: Theme.beige,
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "100% 20%",
        maxHeight: "100vh",
      }}
    >
      <Header />
      <div
        style={{ display: "flex", justifyContent: "center", height: "89vh" }}
      >
        <div
          id="loading"
          style={{
            position: "fixed",
            height: "30%",
            width: "30%",
            marginTop: "5%",
            visibility: "hidden",
            zIndex: "100",
          }}
        >
          <ReactLoading
            type={"spin"}
            color={Theme.salmon}
            height={"100%"}
            width={"100%"}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
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
}
