import Header from "../components/Header.jsx";
import Description from "../components/Description.jsx";

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
      </div>
    </>
  );
};

export default Home;
