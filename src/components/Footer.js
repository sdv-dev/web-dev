import React from "react";


import Logo from "../../assets/data-cebo-logo.svg"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import { Link, StaticQuery, graphql } from "gatsby"

export default function Footer() {
  return (

    <StaticQuery 
      query={graphql`
        query FooterImages {
          logo: file(
              relativePath: { eq: "logo-home.png" }
          ) {
              childImageSharp {
                  fixed(width: 84, quality: 100) {
                    ...GatsbyImageSharpFixed_noBase64
                  }
              }
          }
        }
      `}
      render={data => {
        return (
          <section className=" z-10 relative pt-24">
          <div className="container mx-auto pb-20 md:pb-11">
            <div className="flex flex-col md:flex-row justify-center md:justify-start -mx-4">
              <div className="flex-shrink w-full md:w-3/12 px-4 mb-10 flex justify-center md:justify-start">
                <div className="w-auto flex-shrink flex flex-col items-center">
                  <Link to={`/`} className="inline-block mb-8">
                   <Logo />
                  </Link>
                  <div className="flex flex-row -mx-1 mb-8">
                    {/* <div className="px-1">
                      <Link target="_blank" rel="noopener" 
                        to="https://sdv-space.slack.com/join/shared_invite/zt-gdsfcb5w-0QQpFMVoyB2Yd6SRiMplcw#/" 
                        className="w-10 h-10 flex justify-center items-center bg-sdv-mute inline-block rounded-full hover:bg-sdv-graylight hover:opacity-80 bg-sdv-offwhite">
                        <FontAwesomeIcon width="16" icon={faSlack} />
                      </Link>
                    </div> */}
                    <div className="px-1">
                      <a target="_blank" rel="noopener" 
                        href="https://twitter.com/" 
                        className="w-10 h-10 flex justify-center items-center bg-sdv-mute inline-block rounded-full hover:bg-sdv-graylight hover:opacity-100 opacity-60 bg-sdv-offwhite">
                        <FontAwesomeIcon width="16" icon={faTwitter} />
                      </a>
                    </div>
                    <div className="px-1">
                      <a target="_blank" rel="noopener" 
                        href="https://www.linkedin.com/company/datacebo" 
                        className="w-10 h-10 flex justify-center items-center bg-sdv-mute inline-block rounded-full hover:bg-sdv-graylight hover:opacity-100 opacity-60 bg-sdv-offwhite">
                        <FontAwesomeIcon width="16" icon={faLinkedin} />
                      </a>
                    </div>
                  </div>
                </div>
              
                
              </div>
              <div className="flex-grow md:w-9/12 px-4">
                <div className="flex flex-wrap justify-center md:justify-start">
                  <div className="w-auto px-4 md:w-6/12 lg:w-3/12 text-white mb-4">
                    <p className="font-bold mb-6">Site</p>
                    <ul className="font-light">
                      <li className="mb-4">
                        <Link className="hover:underline opacity-60 hover:opacity-100" to="#">Contact Us</Link></li>
                      <li className="mb-4">
                        <Link className="hover:underline opacity-60 hover:opacity-100" to="#">About Us</Link></li>
                      {/* <li className="mb-4">
                        <Link className="hover:underline opacity-60 hover:opacity-100" to={`#`}>Careers</Link></li> */}
                      
                    </ul>
                  </div>
                  <div className="w-auto px-4 md:w-6/12 lg:w-3/12 text-white mb-4">
                    <p className="font-bold mb-6">SDV</p>
                    <ul className="font-light">
                      <li className="mb-4">
                        <a className="hover:underline opacity-60 hover:opacity-100" href="https://sdv.dev/blog/">Blog</a></li>
                      <li className="mb-4">
                        <a className="hover:underline opacity-60 hover:opacity-100" href="https://sdv.dev/SDV/">Docs</a></li>
                      <li className="mb-4">
                        <a className="hover:underline opacity-60 hover:opacity-100" href={`https://sdv.dev/resources/`}>Resources</a></li>
                      
                    </ul>
                  </div>
                  {/* <div className="w-full md:w-6/12 lg:w-3/12 text-white mb-4">
                    <p className="font-bold mb-6">Github</p>
                    <ul className="font-light">
                      <li className="mb-4">
                        <Link className="hover:underline opacity-60 hover:opacity-100" to="https://github.com/sdv-dev/SDV">SDV</Link></li>
                      <li className="mb-4">
                        <Link className="hover:underline opacity-60 hover:opacity-100" to="https://github.com/sdv-dev/CTGAN">CTGAN</Link></li>
                      <li className="mb-4">
                        <Link className="hover:underline opacity-60 hover:opacity-100" to="https://github.com/sdv-dev/Copulas">Copulas</Link></li>
                      <li className="mb-4">
                        <Link className="hover:underline opacity-60 hover:opacity-100" to="https://github.com/sdv-dev">All Libraries</Link></li>
                    </ul>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        )
      }}
    />
   
  );
}
