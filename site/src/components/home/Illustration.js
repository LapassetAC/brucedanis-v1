import Image from "next/image";
import styled from "styled-components";
import { useNextSanityImage } from "next-sanity-image";
import sanityClient from "@/utils/sanityClient";

const StyledContainer = styled.a`
  grid-column: ${({ position }) =>
    position.columnStart + "/" + position.columnEnd};
  grid-row: ${({ position }) => position.rowStart + "/" + position.rowEnd};
`;

export default function Illustration({ data }) {
  const { title, mainImage, slug, position } = data;
  const imageProps = useNextSanityImage(sanityClient, mainImage);

  return (
    <StyledContainer href={`product/${slug.current}`} position={position}>
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
