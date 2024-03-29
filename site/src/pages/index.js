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
      position,
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
  @media ${(props) => props.theme.minWidth.sm} {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
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
            return (
              <Illustration
                key={illustrationData.title}
                data={illustrationData}
              />
            );
          })}
        </StyledIllustrationsContainer>
      </main>
    </ThemeProvider>
  );
}
