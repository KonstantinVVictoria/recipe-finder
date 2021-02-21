const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "11vh",
        maxHeight: "11vh",
        alignItems: "flex-end",
      }}
    >
      <img
        style={{
          height: "90%",
          padding: "1%",
          marginLeft: "50px",
        }}
        src="/Logo.svg"
      ></img>
      <h2
        style={{
          color: "black",
          margin: "0% 1px",
          fontFamily: "Quicksand",
          display: "flex",
          height: "90%",
          alignItems: "center",
          fontWeight: "900",
        }}
      >
        FoodRex
      </h2>
    </div>
  );
};
export default Header;
