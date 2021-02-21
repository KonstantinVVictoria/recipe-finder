import { useRouter } from "next/router";

const BackButton = () => {
  const router = useRouter();

  return (
    <div>
      <button
        style={{
          display: "flex",
          marginLeft: "40px",
          border: "0px none",
          backgroundColor: "transparent",
        }}
        onClick={() => router.push("/")}
      >
        <p
          style={{
            padding: "2px 12px",
            border: "2px solid",
            borderRadius: "5px",
            marginRight: "10px",
            backgroundColor: "#FD8664",
            cursor: "pointer",
          }}
        >
          &#8249;
        </p>
        <p style={{ marginTop: "17px", fontFamily: "Raleway" }}>Back</p>
      </button>
    </div>
  );
};

export default BackButton;
