import Header from "../components/Header.jsx";
import Description from "../components/Description.jsx";
import SubmitImage from "../components/SubmitImage.jsx";
import Theme from "../styles/Theme";
import LoadCS from "../lib/LoadCS";

const Home = function () {
  const UploadFile = LoadCS("UploadFile");
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
        <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.0.1"></script>
        <script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/mobilenet@1.0.0"></script>
        <UploadFile />
        <Description />
        <SubmitImage />
      </div>
    </>
  );
};

export default Home;
