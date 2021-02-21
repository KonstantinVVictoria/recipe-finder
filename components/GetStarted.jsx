import Theme from "../styles/Theme";

const GetStarted = ({ show }) => {
  return (
    <div>
      <button
        style={{
          backgroundColor: Theme.salmon,
          borderRadius: "15px",
          padding: "3px 30px",
          fontFamily: "Raleway",
          border: "none",
          fontSize: "1.2em",
        }}
        onClick={() => show(true)}
      >
        Get Started
      </button>
    </div>
  );
};

export default GetStarted;
