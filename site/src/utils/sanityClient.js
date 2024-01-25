import { createClient } from "@sanity/client";

const sanityClient = createClient({
  projectId: "tbvaol8n",
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-01-25",
});

export default sanityClient;
