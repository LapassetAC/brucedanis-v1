import sanityClient from "../utils/sanityClient";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";
import GlobalStyle from "@/styles/globalStyle";
import Illustration from "@/components/home/Illustration";

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
  const data = await sanityClient.fetch(query);
  return {
    props: {
      data,
    },
  };
}

const StyledIllustrationsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 15px;
  @media ${(props) => props.theme.minWidth.lg} {
    grid-gap: 30px;
  }
`;

export default function Home({ data }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <main>
        <StyledIllustrationsContainer>
          {data.map((illustrationData) => {
            return <Illustration data={illustrationData} />;
          })}
        </StyledIllustrationsContainer>
      </main>
    </ThemeProvider>
  );
}
