const RecDescription = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", textAlign: "center" }}
    >
      <h1
        style={{
          marginTop: "0px",
          fontFamily: "Quicksand",
          marginBottom: "10px",
        }}
      >
        Recommendations
      </h1>
      <p style={{ fontFamily: "Raleway", marginBottom: "40px" }}>
        According to what you uplodaded, here are some foods that we think you
        would also enjoy!
      </p>
    </div>
  );
};
export default RecDescription;
