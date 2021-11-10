import React, { useEffect, useState } from "react";
import { Article } from "../components/common";
import config from "../utils/siteConfig";
import Seo from "../components/Seo";

import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";

import Footer from "../components/Footer";

export default function ContactPage() {


  const [formSubmitted, setFormSubmitted] = useState(false)
  const onHubSubmit = event => {
    if (
      event.data.type === "hsFormCallback" &&
      event.data.eventName === "onFormSubmitted"
    ) {
      setFormSubmitted(true)
    }
  }

  const createForm = () => {
    window.hbspt.forms.create({
      portalId: "8685431",
      formId: '3c47351e-a9e7-4589-883c-374b5725f234',
      target: "#hubspotForm",
      sfdcCampaignId: "7014P000001779tQAA",
    })
  }

  useEffect(() => {
    window.addEventListener("message", onHubSubmit)

    if (!window.hbspt) {
      const script = document.createElement("script")
      script.src = "https://js.hsforms.net/forms/v2.js"
      document.body.appendChild(script)
      script.addEventListener("load", () => {
        if (window.hbspt) {
          createForm()
        }
      })
    } else {
      createForm()
    }
    return () => {
      window.removeEventListener("message", onHubSubmit)
    }
  }, [])

  


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
    <Article>
      <Seo
        title={config.siteTitleMeta}
        description={config.siteDescriptionMeta}
        type="website"
        image={`/datacebo.jpg`}
        canonical={`https://sdv.dev/`}
      />

      <div className="mx-auto overflow-hidden" style={{ maxWidth: "1680px"}}>
        <div className="w-full relative pt-40 lg:pt-48 lg:pb-28 pb-28 bg-nav">
          <div className="absolute inset-0 z-10">
            <Img alt="Image cover" objectFit="cover" className="object-cover h-full" fluid={data.bgImage.childImageSharp.fluid} />
          </div>
          <div className="container mx-auto relative z-10">
            <div className="flex flex-wrap justify-around -mx-4">
              <div className="w-full md:w-5/12  px-4">
                <h1 className='text-white font-normal text-7xl mb-6'>Get in touch!</h1>
              </div>
              <div className="w-full md:w-5/12  px-4">
                
              </div>
            </div>
            <div className="flex flex-wrap justify-around -mx-4">
              <div className="text-white w-full md:w-5/12 text-center md:text-left px-4">
                <p className='mb-6'>Are you looking to incorporate synthetic data into your company's workflow? Contact us to discuss your needs.</p>
                <p className='mb-6'>Headquartered in Boston, we are a team of MIT alums and AI researchers with years of experience in deployable machine learning systems. Let's work together to put synthetic data to work!</p>
              </div>
              <div className="text-white w-full md:w-5/12 text-center px-4">
                <div
                  id="hubspotForm"
                  className={`${ formSubmitted ? `hidden` : `block`} px-8 text-white rounded-3xl flex flex-wrap -mt-4`}
                  style={{
                    minHeight: "320px",
                  }}
                ></div>

                {formSubmitted && (
                  <div className="font-bold relative text-left px-6 py-4 mt-20">
                      <p className="relative z-10">Thank you! We'll be in touch shortly.</p>
                    <div className="grad-bg z-0 absolute left-0 top-0 bottom-0 -right-72">
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

        
        </div>

        <div className="w-full relative bg-sdv-dark border-t-2 border-sdv-primary">
        <div className="absolute inset-0 z-0">
          <Img alt="background" objectFit="cover" className="object-cover h-full" fluid={data.midBg.childImageSharp.fluid} />
        </div>


        <Footer />
      </div>
      </div>
    </Article>
  );
}
