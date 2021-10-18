import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";

import Footer from "../../components/Footer";

import HeroLogo from "../../../assets/data-cebo-hero-logo.svg";
import HeroText from "../../../assets/data-cebo-hero-name.svg";

import BottomWave from "../home/wave-top-white";
import TopWave from "../home/wave-bottom-white";



export default function Hero({ downloads }) {
  const features = [
    {
      icon: "/single-table.svg",
      name: "Comprehensive",
      text:
        "We offer multiple machine learning models, benchmarking and evaluation frameworks.",
      github: "",
      docs: "",
      userguide: "",
    },
    {
      icon: "/multi-table.svg",
      name: "Open Source",
      text:
        `With over ${downloads},000 open source downloads, our libraries have been tested by users all over the world.`,
      github: "",
      docs: "",
      userguide: "",
    },
    {
      icon: "/time-series.svg",
      name: "Community",
      text:
        "We support an active community on GitHub & Slack. We are always improving our systems through user feedback.",
      github: "",
      docs: "",
      userguide: "",
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
    <div>
      <div className="w-full relative pt-40 lg:pt-48 lg:pb-28 pb-28 bg-nav">
        <div className="absolute inset-0 z-10">
          <Img alt="Image cover" objectFit="cover" className="object-cover h-full" fluid={data.bgImage.childImageSharp.fluid} />
        </div>
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col justify-center items-center -mx-4">
            <div className="max-w-xs w-24 lg:w-auto px-4">
              <HeroLogo />
            </div>
            <div className="max-w-sm lg:my-6 my-4 w-56 lg:w-auto px-4">
              <HeroText />
            </div>
            <p className="text-white text-center text-4xl px-4">
              Make synthetic data a reality
            </p>
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
            <div className="container mx-auto pt-10 pb-12 lg:pb-20">
              <div className="flex flex-wrap items-center justify-center text-center -mx-4">
                <div className="w-full max-w-3xl px-4">
                  <p className="text-xl text-white">
                    <strong className="font-bold ">
                      The Synthetic Data Vault
                    </strong>{" "}
                    is a system of open source libraries designed to help you
                    put synthetic data to work! Generate synthetic data for
                    single table, multi-table and time series data.
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

        <div className="mx-auto container relative z-10 -mt-10 lg:-mt-40 px-4">
          <div className="flex flex-wrap items-center justify-center -mx-4">
            <div className="w-full max-w-4xl bg-white px-8 py-6 lg:px-14 lg:py-12 rounded-20">
              <div className="flex flex-wrap -mx-4 lg:-mx-10">
                {features.map((item, idx) => {
                  if (idx === 1) {
                    return (
                      <div className="w-full my-4 lg:my-0 sm:w-4/12 px-4 lg:px-10 mb-4 lg:border-r lg:border-l border-dashed border-offwhite">
                        <div className="">
                          <Link
                            to={item.userguide}
                            target="_blank"
                            className="h-full block transition-shadow"
                          >
                            <img src={`${item.icon}`} alt={item.name} className="mb-3" />
                            <p className="font-bold text-lg lg:text-xl">
                              {item.name}
                            </p>
                            <p className="text-base">{item.text}</p>
                          </Link>
                        </div>
                      </div>
                    );
                  }

                  return (
                    <div className="w-full my-4 lg:my-0 sm:w-4/12 px-4 lg:px-10 mb-4">
                      <div className="">
                        <Link
                          to={item.userguide}
                          target="_blank"
                          className="h-full block transition-shadow"
                        >
                          <img src={`${item.icon}`} alt={item.name} className="mb-3" />
                          <p className="font-bold text-lg lg:text-xl">
                            {item.name}
                          </p>
                          <p className="text-base">{item.text}</p>
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-wrap -mx-4 lg:my-0 my-4">
                <div className="px-4 w-full lg:text-right text-center">
                  <a
                    href="https://sdv.dev/"
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-1 rounded-full inline-block border border-sdv-dark text-sm hover:bg-sdv-dark hover:text-white"
                  >
                    Open the Vault →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto container relative z-10 lg:my-28 my-20">
          <div className="flex flex-wrap justify-center -mx-4">
            <div className="px-4 w-full max-w-4xl  text-center ">
              <p className="text-xl text-white mb-8">
                Are you looking to incorporate synthetic data into your
                company's workflow?
              </p>
              <p>
                <a
                  href="https://datacebo.com/contact"
                  className="inline-block rounded-full text-white px-10 py-3 font-bold hover:opacity-80 grad-bg"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #03B0F2 1.57%, #01E0C9 100%);",
                  }}
                >
                  Contact Us
                </a>
              </p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
      
    </div>
  );
}
