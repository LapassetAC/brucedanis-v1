import { useRouter } from "next/router";
import sanityClient from "../../utils/sanityClient";
import PaymentForm from "@/components/PaymentForm";

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(
    `*[_type == "product" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { slug = "" } = context.params;
  const product = await sanityClient.fetch(
    `
    *[_type == "product" && slug.current == $slug][0]{
      title
    }
  `,
    { slug }
  );

  return {
    props: {
      product,
    },
  };
}

const Product = ({ product }) => {
  return (
    <article>
      <h1>{product?.title}</h1>
      <PaymentForm></PaymentForm>
    </article>
  );
};

export default Product;
