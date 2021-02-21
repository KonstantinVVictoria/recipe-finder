import Header from "../components/Header.jsx";
import Description from "../components/Description.jsx";
import GetStarted from "../components/GetStarted.jsx";
import HomeImage from "../components/HomeImage.jsx";
import SubmitImage from "../components/SubmitImage.jsx";
import Theme from "../styles/Theme";
import LoadCS from "../lib/LoadCS";

const Home = function () {
  const UploadFile = LoadCS("UploadFile");
  return (
    <div
      style={{
        backgroundImage: "url(/Home_Gradient.svg)",
        backgroundColor: "#FFF4DF",
        height: "753px",
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
            <GetStarted />
          </div>
          <HomeImage />
          <SubmitImage />
        </div>
      </div>
    </div>
  );
};

export default Home;
