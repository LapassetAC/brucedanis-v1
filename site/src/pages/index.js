import sanityClient from "../utils/sanityClient";

export async function getStaticProps() {
  const query = '*[_type == "product"]';
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
      TOTO
      {data.map((product) => {
        return (
          <a href={"product/" + product?.slug.current}>{product?.title}</a>
        );
      })}
    </main>
  );
}
