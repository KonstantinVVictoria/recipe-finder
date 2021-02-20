import Header from "../components/Header.jsx";
import Description from "../components/Description.jsx";
import GetStarted from "../components/GetStarted.jsx";
import HomeImage from "../components/HomeImage.jsx";
import SubmitImage from "../components/SubmitImage.jsx";

const Home = function () {
  return (
    <>
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
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Description />
            <GetStarted />
          </div>
          <HomeImage />
          <SubmitImage />
        </div>
      </div>
    </>
  );
};

export default Home;
