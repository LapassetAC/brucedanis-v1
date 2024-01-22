import client from "../../client";

export default function Home({ data }) {
  return (
    <main>
      TOTOt
      {data.map((product) => {
        return product.title;
      })}
    </main>
  );
}

export async function getStaticProps() {
  const query = '*[_type == "product"]';
  const data = await client.fetch(query);

  return {
    props: {
      data,
    },
  };
}
