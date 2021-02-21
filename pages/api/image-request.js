import { createApi } from "unsplash-js";
export default async (req, res) => {
  const data = await requestImage(req.body.queries);
  res.status(200).json({ data: data });
};

const requestImage = async (imageSet) => {
  let images = [];

  const unsplash = createApi({
    accessKey: "xxPLc0whuHDoYjYg3U3PCecAEoeRr0f4fhAnbjs8L80",
  });

  for (const query of imageSet) {
    const url = await unsplash.search
      .getPhotos({
        query: query,
        page: 1,
        perPage: 1,
      })
      .then((result) => {
        if (result.errors) {
          console.log("error occurred: ", result.errors[0]);
          return "";
        } else {
          const photo = result.response;
          return photo.results[0].urls.raw;
        }
      });
    console.log(url);
    images.push([query, url]);
  }
  return images;
};
