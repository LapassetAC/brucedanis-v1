import Image from "next/image";
import styled from "styled-components";
import { useNextSanityImage } from "next-sanity-image";
import sanityClient from "@/utils/sanityClient";

const StyledContainer = styled.a`
  grid-column: 1 / 4;
  grid-row: 1 / 3;
`;

export default function Illustration({ data }) {
  const { title, mainImage, slug } = data;
  const imageProps = useNextSanityImage(sanityClient, mainImage);

  return (
    <StyledContainer
      href={`product/${slug.current}`}
      // gridColumn={}
    >
      <Image
        {...imageProps}
        style={{ maxWidth: "100%", height: "auto" }}
        placeholder="blur"
        blurDataURL={mainImage.asset.metadata.lqip}
        alt={title}
      />
    </StyledContainer>
  );
}
