import { useEffect } from "react";
const tf = require("@tensorflow/tfjs");
const func = () => {
  useEffect(() => {
    var image = document.getElementById("test-image");
    var canvas = document.getElementById("canvas");
    //const image = fs.readFileSync("/ramen-noodles.jpg");
    image.onload = () => {
      const imageTensor = tf.browser.fromPixels(image).asType("float32");
      //tf.image.cropAndResize(imageTensor);
      //tf.browser.toPixels(imageTensor, canvas);

      loadModel(imageTensor.reshape([-1, 224, 224, 3]));
    };
  });

  return (
    <div>
      <canvas
        id="canvas"
        height="224px"
        width="224px"
        style={{ backgroundColor: "black" }}
      ></canvas>
      <img
        id="test-image"
        style={{ height: "224px", width: "224px", objectFit: "cover" }}
        src={"/ramen-noodles.jpg"}
      ></img>
    </div>
  );
};

const loadModel = async (tensor) => {
  // const modelUrl =
  //   "https://tfhub.dev/google/imagenet/mobilenet_v2_140_224/classification/2";
  // const model = await tf.loadGraphModel(modelUrl, { fromTFHub: true });
  const model = await tf.loadGraphModel("/AIModel/model.json");
  const label = await fetch("/AIModel/label.json").then((response) =>
    response.json()
  );
  let predictionRaw = model.predict(tensor, { batchSize: 1 }).arraySync();
  let predictionLabeled = [];
  predictionRaw[0].forEach((element, i) => {
    predictionLabeled.push([element, label[i].name]);
  });
  let sortedPrediction = predictionLabeled.sort(function (a, b) {
    return b[0] - a[0];
  });
  console.log(sortedPrediction);
  const topFive = sortedPrediction.slice(0, 5);
  const queries = topFive.map(([probability, name]) => {
    return name;
  });
  getImages(queries);
};

const getImages = async (queries) => {
  console.log(queries);
  const data = await fetch("/api/image-request", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ queries: queries }),
  }).then((response) => response.json());
  sessionStorage.setItem("data", JSON.stringify({ data: data }));
};

export default func;
