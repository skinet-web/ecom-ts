import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "uzohu11n",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-04-04",
  token:
    "skpwCPLXav1N1H6buvBSwLGcdNy24CBYboQ61A2DrZwg8ZU8UyoqlLMJ0HAKaH4wiR1PTH0JX37mGKXR6qWOmWN9DnXnqkOgVeBJGCEGagQDgs4Ys1fOwmM9HF9OTrnAsF7lpCuHkWLn8tNdPlWh1TH3mhDKxeGBSKuhu6qzPxNitM2maA5Y",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

// export const client = createClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//   dataset: "production",
//   useCdn: true,
//   apiVersion: "2022-01-12",
//   token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
// });
