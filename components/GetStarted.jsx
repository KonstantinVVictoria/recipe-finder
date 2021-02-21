import Theme from "../styles/Theme";

const GetStarted = ({ show }) => {
  return (
    <div>
      <button
        style={{
          backgroundColor: Theme.salmon,
          borderRadius: "15px",
          padding: "3px 20px",
          fontFamily: "Raleway",
        }}
        onClick={() => show(true)}
      >
        Get Started
      </button>
    </div>
  );
};

export default GetStarted;
