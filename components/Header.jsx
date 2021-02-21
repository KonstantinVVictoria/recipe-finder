const Header = () => {
  return (
    <div style={{ display: "flex" }}>
      <img
        style={{ marginTop: "30px", marginLeft: "50px", width: "45px" }}
        src="/Logo.svg"
      ></img>
      <h2
        style={{
          marginTop: "30px",
          color: "black",
          marginLeft: "5px",
          fontFamily: "Quicksand",
        }}
      >
        FoodRex
      </h2>
    </div>
  );
};
export default Header;
