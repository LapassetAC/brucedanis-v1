import sanityClient from "../utils/sanityClient";
import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";

export async function getStaticProps() {
  const query = `
   *[_type == "product"] {
      title,
      slug,
      mainImage {
        asset->{
          ...,
          metadata
        }
      }
    }
  `;
  // const query = `*[_type == "product"]`;
  const data = await sanityClient.fetch(query);
  return {
    props: {
      data,
    },
  };
}

export default function Home({ data }) {
  return (
    <main>
      Bruce d'Anis
      {data.map((product) => {
        const imageProps = useNextSanityImage(sanityClient, product.mainImage);
        return (
          <a key={product?.title} href={"product/" + product?.slug.current}>
            <Image
              {...imageProps}
              style={{ maxWidth: "100%", height: "auto" }}
              placeholder="blur"
              blurDataURL={product.mainImage.asset.metadata.lqip}
            />
          </a>
        );
      })}
    </main>
  );
}
