const Navbar = () => {
  return (
    <div style={{ display: "flex" }}>
      <a
        style={{
          padding: "2px 15px",
          border: "1px solid",
          borderRadius: "10px",
          backgroundColor: "#FD8664",
          marginRight: " 30px",
          marginLeft: "190px",
        }}
      >
        &#8249;
      </a>
      <p style={{ width: "117px", marginRight: "0px" }}>
        Click to navigate between dishes
      </p>
      <a
        style={{
          padding: "2px 15px",
          border: "1px solid",
          borderRadius: "10px",
          backgroundColor: "#FD8664",
          marginLeft: "30px",
        }}
      >
        &#8250;
      </a>
    </div>
  );
};

export default Navbar;
