import React, { useEffect, useState } from "react";
import { Article } from "../components/common";
import Hero from "../components/home/hero";
import config from "../utils/siteConfig";
import Seo from "../components/Seo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";

import Footer from "../components/Footer";

import HeroLogo from "../../assets/data-cebo-hero-logo.svg";
import HeroText from "../../assets/data-cebo-hero-name.svg";

import BottomWave from "../components/home/wave-top-white";
import TopWave from "../components/home/wave-bottom-white";

export default function HomePage() {


 const team = [
   {
     name: "Kalyan Veeramachaneni",
     title: 'Co-Founder',
     text: 'Previously at Feature Labs (acq. Alteryx), PatternEx (acq. Corelight)',
     mit: 'MIT',
     image: '/team/kalyan.png',
     linkedin: "https://www.linkedin.com/in/kalyan-veeramachaneni-9861b821/",
     twitter: "https://twitter.com/kveeramac",
   },
   {
     name: "Carles Sala",
     title: 'VP of Architecture & Engineering, Co-Founder',
     text: '',
     mit: 'Previously at MIT',
     image: '/team/carles.png',
     linkedin: "https://www.linkedin.com/in/carlessalacladellas/",
     twitter: "https://twitter.com/csalacat",
   },
   {
     name: "Neha Patki",
     title: "Director of Product, Co-Founder",
     text: "Previously at Youtube, Google",
     mit: 'MIT 2016',
     image: "/team/neha.png",
     linkedin: "https://www.linkedin.com/in/nehapatki/",
     twitter: "https://twitter.com/n4atki",
   },
   {
     name: "Saman Amarsinghe",
     title: 'Co-Founder',
     text: 'Previously at Determina (acq. VMWare)',
     mit: 'MIT',
     image: '/team/saman.png',
     linkedin: "https://www.linkedin.com/in/saman/ ",
     twitter: "https://twitter.com/samanprabhath",
   },
   {
     name: "Andrew Montanez",
     title: 'Senior Software Engineer',
     text: 'Previously at Rev',
     mit: 'MIT 2018',
     image: '/team/Andrew.png',
     linkedin: "https://www.linkedin.com/in/andrew-montanez-593247b2/",
     twitter: "",
   },
   {
     name: "Plamen Valentinov",
     title: 'Developer Advocate & Software Engineer',
     text: '',
     mit: 'Previously at MIT',
     image: '/team/PlamonValentinovKolev.png',
     linkedin: "https://www.linkedin.com/in/plamen-valentinov-kolev/",
     twitter: "https://twitter.com/pvkdeveloper",
   },
   {
     name: "Katharine Xiao",
     title: 'Senior Software Engineer',
     text: 'Previously at Facebook, Rubrik',
     mit: 'MIT 2017',
     image: '/team/Katharine.png',
     linkedin: "https://www.linkedin.com/in/katharine-x-5238365a/",
     twitter: "",
   },
   {
     name: "Felipe Hofmann",
     title: 'Software Engineer',
     text: '',
     mit: 'MIT 2020',
     image: '/team/felipe-hoffman.png',
     linkedin: "https://www.linkedin.com/in/felipe-hofmann-347231a8/",
     twitter: "",
   },
 ];
  


  const data = useStaticQuery(graphql`
    query {
      bgImage: file(relativePath: { eq: "data-cebo-bg.png" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            src
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      bgImageSm: file(relativePath: { eq: "data-cebo-bg-sm.png" }) {
        childImageSharp {
          fluid(maxWidth: 480) {
            src
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      midBg: file(relativePath: { eq: "mid-bg.png" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      footerBg: file(relativePath: { eq: "footer-bg.png" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `);

  return (
    <Article>
      <Seo
        title={config.siteTitleMeta}
        description={config.siteDescriptionMeta}
        type="website"
        image={`/datacebo.jpg`}
        canonical={`https://sdv.dev/`}
      />

      <div className="mx-auto" style={{ maxWidth: "1680px"}}>
        <div className="w-full relative pt-40 lg:pt-48 lg:pb-28 pb-28 bg-nav">
          <div className="absolute inset-0 z-10">
            <Img alt="Image cover" objectFit="cover" className="object-cover h-full hidden md:block" fluid={data.bgImage.childImageSharp.fluid} />
            <Img alt="Image cover" objectFit="cover" className=" h-full md:hidden" fluid={data.bgImageSm.childImageSharp.fluid} />
          </div>
          <div className="container mx-auto relative z-10">
            <div className="flex flex-col justify-center items-center -mx-4">
              <div className="text-white w-auto max-w-3xl text-center px-4">
                <h1 className='text-white font-normal text-7xl mb-8 lg:mb-12'>Meet the DataCebo Team</h1>
                <p className="text-3xl">Headquartered in Boston, we are a team of MIT alums and AI researchers with years of experience in deployable machine learning systems.</p>
              </div>
            </div>
          </div>

          <div className="mx-auto container relative mt-16 z-10 -mb-32 lg:-mb-40 px-4">
          <div className="flex flex-wrap items-center justify-center -mx-4">
            <div className="w-full max-w-6xl bg-white px-8 py-6 lg:px-14 lg:pt-20 lg:pb-40 pb-20 rounded-20 mx-6 md:mx-0">
              <div className="flex flex-wrap justify-center items- -mx-4 lg:-mx-10">
                {team.map((item, idx) => {
                  

                  return (
                    <div className="my-6 w-64 px-4 lg:px-6 mb-4">
                      <div className="text-center">
                        <div
                          to={item.userguide}
                          target="_blank"
                          className="h-full block transition-shadow team-item"
                        >
                          <div className='w-40  mx-auto relative mb-4'>
                            <div className='z-0 w-40 h-40 rounded-full absolute right-2 bg-sdv-primary'></div>
                            <img src={`${config.sitePath == '/web-dev/' ? '/web-dev' : ''}${item.image}`} alt={item.name} 
                              className="w-full h-auto block mx-auto rounded-full relative z-10" />
                            <div className='z-0 w-40 h-40 rounded-full top-0 absolute z-10 text-white flex flex-col justify-center team-item-overlay'
                              style={{
                                background: 'rgba(0, 0, 54, 0.5)'
                              }}
                            >
                              {item.linkedin && (<div>
                                <a href={item.linkedin} className="block w-full my-2 hover:opacity-70">
                                <FontAwesomeIcon size={"2x"} icon={faLinkedin} width={20} height={20} className='w-7 h-7' />
                                  </a>
                              </div>)}
                              {item.twitter && (
                                <div className=''>
                                  <div className="border-t border-white w-20 opacity-70 mx-auto"></div>
                                  <a href={item.twitter} className="block w-full my-2 hover:opacity-70">
                                  <FontAwesomeIcon size={"2x"} icon={faTwitter} width={20} height={20} className='w-7 h-7' />
                                    </a>
                                </div>
                              )}
                            </div>
                          </div>
                          <p className="font-semibold text-lead lg:text-lg text-nav">
                            {item.name}
                          </p>
                          <p className="text-base leading-tight my-1">{item.title}</p>
                          {item.text && <p className="text-xs leading-tight my-1">{item.text}</p>}
                          {item.mit && <p className="text-xs leading-tight my-1">{item.mit}</p>}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            
            </div>
          </div>
        </div>
        </div>


        
        

        <section className="-my-8 sm:-my-16 lg:-my-24 bg-sdv-sedondary relative z-10">
          <div>
            <TopWave />
            <div
              className="-my-2 lg:-my-10 relative z-10 grad-bg"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #03B0F2 1.57%, #01E0C9 100%);",
              }}
            >
              <div className="container mx-auto pt-2 pb-2">
                <div className="flex flex-wrap items-center justify-center text-center -mx-4">
                  <div className="w-full max-w-3xl md:px-4 px-10 py-4">
                    <p className="text-xl font-bold text-white mb-8">
                      Looking to integrate synthetic data into your business workflow?
                    </p>
                    <p>
                      <a
                        href="https://datacebo.com/contact"
                        className="inline-block rounded-full text-white px-10 py-3 font-bold hover:opacity-80  border-2 border-white bg-transparent"
                       
                      >
                        Contact Us
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <BottomWave />
          </div>
        </section>

        <div className="w-full relative bg-sdv-dark">
        <div className="absolute inset-0 z-0">
          <Img alt="background" objectFit="cover" className="object-cover h-full" fluid={data.midBg.childImageSharp.fluid} />
        </div>


        <Footer />
      </div>
      </div>
    </Article>
  );
}
