import Theme from "../styles/Theme";

const GetStarted = () => {
  return (
    <div>
      <button
        style={{
          backgroundColor: Theme.salmon,
          borderRadius: "15px",
          padding: "3px 20px",
          fontFamily: "Raleway",
        }}
      >
        Get Started
      </button>
    </div>
  );
};

export default GetStarted;
