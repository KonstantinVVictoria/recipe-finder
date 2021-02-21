import Header from "../components/Header.jsx";
import BackButton from "../components/BackButton.jsx";
import RecDescription from "../components/RecDescription.jsx";
import ItemCarousel from "../components/ItemCarousel";

const Recommendations = function () {
  return (
    <div
      style={{
        backgroundColor: "#FFF4DF",
        height: "753px",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        backgroundSize: "100%",
      }}
    >
      <Header />

      <div>
        <BackButton />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <RecDescription />
          </div>
        </div>
        <ItemCarousel />
      </div>
    </div>
  );
};
export default Recommendations;
