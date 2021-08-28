import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { Link, StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import { Navigation } from ".";
import Footer from "../../components/Footer";
import Cta from "../../components/Cta";
// import config from "../../utils/siteConfig";

import Logo from "../../../assets/data-cebo-logo.svg";

import MoreArticles from "../MoreArticles";

import favicon from "../../../static/favicon.ico";

/**
 * Main layout component
 *
 * The Layout component wraps around each page and template.
 * It also provides the header, footer as well as the main
 * styles, and meta data for each page.
 *
 */
const PostDefaultLayout = ({ data, children, bodyClass, isPost }) => {
  return (
    <>
      <Helmet>
        <html lang={`en`} />
        <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
      </Helmet>

      <div className="">
        <div className="viewport-top">
          <Navigation navClass="block my-4 lg:my-0 px-4 py-2 leading-none rounded-md text-base hover:underline-none focus:outline-none transition duration-150 ease-in-out navbar-item">
            <Link to="/">
              <div className="w-auto max-w-xs">
                <Logo />
              </div>
            </Link>
          </Navigation>

          <main className="">
            {children}
            {isPost ? (
              <div className="container mx-auto">
                <MoreArticles />
              </div>
            ) : (
              ""
            )}
          </main>
        </div>
        
      </div>
    </>
  );
};

export default function PostDefaultLayoutSettingsQuery(props) {
  return (
    <StaticQuery
      query={graphql`
        query GhostSettingsArticle {
          file(relativePath: { eq: "ghost-icon.png" }) {
            childImageSharp {
              fixed(width: 30, height: 30) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          blogHero: file(relativePath: { eq: "Blog graphic people.png" }) {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
          logo: file(relativePath: { eq: "logo-home.png" }) {
            childImageSharp {
              fixed(width: 84, quality: 100) {
                ...GatsbyImageSharpFixed_noBase64
              }
            }
          }
        }
      `}
      render={(data) => <PostDefaultLayout data={data} {...props} />}
    />
  );
}