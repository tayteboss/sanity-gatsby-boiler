import React from 'react';
import { graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../shared/baseCSS';
import Theme from '../shared/theme';
import Layout from '../layouts';
import Header from '../components/header';
import Components from '../components/components';
import Footer from '../components/footer';

const App = ({ data }) => {
    const {
        title,
        metaDescription,
        components,
    } = data.allSanityPage.edges[0].node

    return (
        <>
          <ThemeProvider theme={Theme}>
            <GlobalStyle />
            <Layout title={title} metaDescription={metaDescription} />
            <Header />
            <Components components={components}/>
            <Footer />
          </ThemeProvider>
        </>
    )
};

export default App;

export const query = graphql`
  query($pageId: String) {
    allSanityPage(
      filter: { pageId: { eq: $pageId }}
    ) {
      edges {
        node {
          pageId
          metaDescription
          title
          slug {
              current
          }
          ...ComponentsFragment
        }
      }
    }
  }
`;