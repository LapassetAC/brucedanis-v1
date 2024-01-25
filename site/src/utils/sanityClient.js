import { createClient } from "@sanity/client";

const sanityClient = createClient({
  projectId: "tbvaol8n",
  dataset: "production",
  useCdn: true,
});

export default sanityClient;
