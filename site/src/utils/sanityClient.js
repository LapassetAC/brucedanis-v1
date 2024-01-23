import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "tbvaol8n",
  dataset: "production",
  useCdn: true,
});
