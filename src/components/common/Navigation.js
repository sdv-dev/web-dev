import React, { useRef, useEffect, useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import PropTypes from "prop-types";
import NavbarItem from "../NavbarItem";

import SdvNavbarItem from "../NavbarItem-SDV";
import CompanyNavbarItem from "../NavbarItem-Company";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faSlack, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faCopy } from '@fortawesome/free-solid-svg-icons'

const navbarItems = [
    {
      name: "SDV",
      text:
        "<p class='leading-tight'>We are the proud creators of the <b>Synthetic Data Vault</b>, the largest open source ecosystem for synthetic data generation & evaluation.</p>",
      subItems: [
        {
          title: "Synthetic Data Vault",
          icon: "SDV",
          url: "https://sdv.dev/",
          text:
            "Start here to discover the open source libraries in the SDV ecosystem.",
        },
        {
          title: "GitHub",
          icon: <FontAwesomeIcon size="lg" icon={faGithub} />,
          url: "https://github.com/sdv-dev/SDV",
          text: "Explore the user guides and API to model your data",
        },
        {
          title: "Docs",
          icon: <FontAwesomeIcon size="lg" icon={faCopy} />,
          url: "https://sdv.dev/SDV/",
          text:
            "Start here to discover the open source libraries in the SDV ecosystem.",
        },
        {
          title: "Slack",
          icon: <FontAwesomeIcon  size="lg" icon={faSlack} />,
          url: "https://sdv-space.slack.com/join/shared_invite/zt-gdsfcb5w-0QQpFMVoyB2Yd6SRiMplcw#/",
          text: "Chat with developers and become part of the community",
        },
        {
          title: "Blog",
          icon: "Blog",
          url: "https://sdv.dev/blog/",
          text:
            "<div><p>Read our blog for nuanced discussions about synthetic data</p><ul class='list-disc list-inside my-3'><li>Meet the Synthetic Data Vault</li> <li>Your Feedback in Action</li> <li>Your Feedback in Action</li></ul></div>",
        }
      ],
    },
    { 
        name: "Company",
        text: `<p class='leading-tight'>Headquartered in Boston, we are a team of MIT alums and AI researchers with years of experience in deployable machine learning systems.</p>`,
        subItems: [
            {
                title: "Linkedin",
                icon: <FontAwesomeIcon  size="lg" icon={faLinkedin} />,
                url: "https://www.linkedin.com/company/",
                text: `<p>Visit DataCebo on LinkedIn</p>`
            }
        ]
    },
    { name: "Contact Us", url: "/contact-us/" }
  ]



/**
 * Navigation component
 *
 * The Navigation component takes an array of your Ghost
 * navigation property that is fetched from the settings.
 * It differentiates between absolute (external) and relative link (internal).
 * You can pass it a custom class for your own styles, but it will always fallback
 * to a `site-nav-item` class.
 *
 */

const Navigation = ({ data, navClass, children }) => {
    const ref = useRef();

    const [isWhite, setNavbarColor] = useState(false);

    const changeNavBackground = () => {
        const scrolledThrough = window.scrollY >= 30;
        if (scrolledThrough && isWhite) {
            document.body.classList.add("nav-bg-white");
            setNavbarColor(false);
        } else if (!scrolledThrough) {
            document.body.classList.remove("nav-bg-white");
            setNavbarColor(true);
        }
    };  

    useEffect(() => {
        window.addEventListener("scroll", changeNavBackground);
        return () => {
            window.removeEventListener("scroll", changeNavBackground);
        };
    });
    
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const useOutsideClick = (ref, callback) => {
        const handleClick = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                callback();
            }
        };

        useEffect(() => {
            document.addEventListener("click", handleClick);

            return () => {
                document.removeEventListener("click", handleClick);
            };
        });
    };

    useOutsideClick(ref, () => {
        if (isActive) {
            setNavActive(!isActive);
        }
    });

    const [isActive, setNavActive] = useState(false);

    const handleNavCollapse = () => setNavActive(!isActive);

    return (
        <nav
            className={`lg:h-auto h-20 flex flex-col justify-center items-center z-50 fixed w-full`}
            id="navbar"
            ref={ref}
        >
            <div className="container mx-auto">
                <div className=" flex md:flex-row flex-col items-center justify-between -mx-5">
                    <div className="absolute inset-y-0 px-2 left-0 flex items-center lg:hidden ">
                        <Hamburger
                            color="#ffffff"
                            rounded
                            size={20}
                            toggled={isActive}
                            toggle={setNavActive}
                            onClick={handleNavCollapse}
                        />
                    </div>
                    <div className="flex md:flex-row flex-wrap flex-col items-center justify-between w-full px-5">
                        <div className="md:order-2 w-full lg:w-2/12 flex md:justify-center lg:justify-start justify-center">
                            {children}
                        </div>
                        <div className="md:order-1 w-auto lg:order-2">
                            <div
                                className={`${
                                    isActive ? "flex" : "hidden"
                                } lg:block absolute lg:static top-20 lg:top-auto inset-x-0 bg-nav lg:bg-transparent`}
                            >
                                <div className=" flex lg:flex-row flex-col justify-center items-center w-full">
                                    {navbarItems.map((item, idx) => {
                                        if ( item.name === 'SDV') {
                                            return <SdvNavbarItem data={item} key={idx} idx={idx} />;
                                        }
                                        if ( item.name === 'Company') {
                                            return <CompanyNavbarItem data={item} key={idx} idx={idx} />;
                                        }
                                        return <NavbarItem data={item} key={idx} idx={idx} />;
                                    })}

                                    {/* <div className="px-4 w-auto flex-grow">
                                        <Link
                                            className={`border border-white w-28 text-center rounded-md ${navClass}`}
                                            to="/contact-us/"
                                        
                                        >
                                            Contact Us
                                        </Link>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

Navigation.defaultProps = {
    navClass: `site-nav-item`,
};

Navigation.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
    navClass: PropTypes.string,
};

export default Navigation;
