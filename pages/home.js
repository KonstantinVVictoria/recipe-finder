import Header from "../components/Header.jsx";
import Description from "../components/Description.jsx";
import SubmitImage from "../components/SubmitImage.jsx";


const Home = function () {
  return (
    <>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Description />
        <SubmitImage /> 

      </div>
    </>
  );
};

export default Home;
