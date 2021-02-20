import Theme from "../styles/Theme.js";

const SubmitImage = () => {
    return (
        <div style={{ backgroundColor: "beige" }}>
            <input type="button" value="X" class="closeButton" style={{ marginLeft: "680px", marginTop: "10px", marginBottom: "0px", backgroundColor: "transparent", borderRadius: "7px", borderColor: "black"}} ></input>
            <h1 style={{ marginTop: "0px", marginRight: "500px", fontWeight: "normal" }}>Upload an image</h1>
            <h3 style={{ marginTop: "40px", fontWeight: "lighter" }}>Pick a food of your choosing, upload and submit for a list of similar dishes.</h3>
            <div style={{ borderRadius: "15px", border: "7px solid gray", marginLeft: "60px" , marginRight: "340px"}}>
                <p>.</p>
                <p>.</p>
                <p>.</p>
                <p>.</p>
                <p style={{marginLeft: "45px"}}><b>Drop & Drag</b> a file here or click...</p>
                <input type="button" value="Upload" style={{marginBottom: "20px", border: "none", marginLeft: "110px", fontSize: 17, borderRadius: "15px", backgroundColor: "salmon", padding: "5px 20px"}}></input>
            </div>
            <input type="button" value="Submit" style={{marginBottom: "20px", border: "none", marginLeft: "605px", fontSize: 17, borderRadius: "15px", backgroundColor: "salmon", padding: "5px 20px"}}></input>

        </div>
    );
}

export default SubmitImage;