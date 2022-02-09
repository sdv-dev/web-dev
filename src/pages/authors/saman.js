import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from "react-helmet";
import { AuthorPostCard, Pagination, AuthorLayout } from '../../components/common'
import { MetaData } from '../../components/common/meta'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

import config from "../../utils/siteConfig";
import team from '../../utils/team';
import guests from '../../utils/guests';

const SectionTitle = ({ children }) => {
    return (
        <div className='-mx-4 flex flex-wrap mb-10'>
            <div className='w-full md:w-1/2 px-4'>
                <h2>{children}</h2>
                <div className='bg-grad-1 h-0.75 mt-4' />
            </div>
        </div>
    )
}

const SamanPage = ({ data, location, pageContext }) => {
  

    const author = team.filter( i => i.slug == 'saman')[0];

    const contributorsnames = team.map( i => i.name );
    const isContributor = contributorsnames.indexOf(author.name) >= 0 ? true : false;

    return (
        <>
            <Helmet>
                <title>{author.name} on The Synthetic Data Vault Blog</title>
                <meta name="description" content={`Meet ${author.name}} on The Synthetic Data Vault Blog`} />
            </Helmet>
            <AuthorLayout>
                <div className="container pt-20">
                    <header className="author-header pt-24">
                        <div className="flex flex-wrap -mx-4">
                            <div className="w-56 px-4">
                                {author.image && <img src={`${config.sitePath}${author.image}`} alt={author.name} />}
                            </div>
                            <div className="w-full lg:w-auto px-4">
                                <h1 className="">{author.name}</h1>
                                <p className="text-lg mb-3">{author.location}</p>
                                
                                <p>
                                    { isContributor ? (
                                        <a href={`${config.sitePath}/authors/#core-contributors`} className='hover:opacity-80 bg-grad-1 px-3 py-1 text-white inline-block rounded font-semibold'>
                                        Core Contributor
                                        </a>) : (
                                            <a href={`${config.sitePath}/authors/#guest-authors`} className='hover:opacity-80 bg-grad-1 px-3 py-1 text-white inline-block rounded font-semibold'>
                                                Guest Author
                                            </a>
                                        ) 
                                    }
                                </p>

                                <div className="flex flex-row -mx-1 mt-4">
                                   {author.website && (author.website.indexOf('linkedin') >= 0) && ( 
                                        <div className="px-1">
                                            <a 
                                                href={author.website} target="_blank" rel="noopener noreferrer"
                                                to={author.website} 
                                                className="w-8 h-8 flex justify-center items-center bg-sdv-dark inline-block rounded-full hover:bg-sdv-secondary text-sdv-offwhite">
                                                <FontAwesomeIcon width="16" icon={faLinkedin} />
                                            </a>
                                        </div>
                                    )}
                                    { author.twitterUrl && (
                                        <div className="px-1">
                                            <a
                                                href={author.twitterUrl} target="_blank" rel="noopener noreferrer"
                                                className="w-8 h-8 flex justify-center items-center bg-sdv-dark inline-block rounded-full hover:bg-sdv-secondary text-sdv-offwhite">
                                                <FontAwesomeIcon width="16" icon={faTwitter} />
                                            </a>
                                        </div>
                                    )}
                                    { author.facebookUrl &&(<div className="px-1">
                                        <a href={author.facebookUrl} target="_blank" rel="noopener noreferrer"
                                            className="w-8 h-8 flex justify-center items-center bg-sdv-dark inline-block rounded-full hover:bg-sdv-secondary text-sdv-offwhite">
                                            <FontAwesomeIcon width="16" icon={faFacebook} />
                                        </a>
                                    </div>
                                    )}
                                    { author.website && (author.website.indexOf('linkedin') < 0) && (<div className="px-1">
                                        <a href={author.website} target="_blank" rel="noopener noreferrer"
                                            className="w-8 h-8 flex justify-center items-center bg-sdv-dark inline-block rounded-full hover:bg-sdv-secondary text-sdv-offwhite">
                                            <FontAwesomeIcon width="16" icon={faGlobe} />
                                        </a>
                                    </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        
                        {author.bio && (
                            <div className='mt-14'>
                                <SectionTitle>
                                    Biography
                                </SectionTitle>
                                <p className='text-lg'>{author.bio}</p>
                            </div>
                        )}
                        
                    </header>
                    <section className="post-feed mt-24">
                        {/* {JSON.stringify(author)} */}

                        <SectionTitle>
                            Recent Posts
                        </SectionTitle>

                        <div>
                            {author.name} 
                            {" "}
                            has not published any articles yet.
                        </div>

                    </section>

                    <section className='mt-24'>
                        <SectionTitle>
                            Blog Authors
                        </SectionTitle>
                        <p className='text-lg my-6'>
                        The SDV Blog is a collaborative effort by core contributors and SDV users.
                        </p>
                        <p className=''>
                            <a 
                                href={`${config.sitePath}/authors/`}
                                className='hover:opacity-80 bg-grad-1 px-3 py-1.5 text-white inline-block rounded font-semibold'>
                                Meet the authors
                            </a>
                        </p>
                        <p className='mt-20 text-lg max-w-4xl'>
                            Are you using the SDV to solve your business needs? Become a guest author for our blog! Contact us at <a className='text-sdv-highlight hover:underline' href="mailto:info@sdv.dev">info@sdv.dev</a> for more information.
                        </p>
                    </section>

                    
                </div>
                <section className='bg-grad-1 h-1 mt-24'></section>
            </AuthorLayout>
        </>
    )
}

SamanPage.propTypes = {
    data: PropTypes.shape({
        ghostAuthor: PropTypes.shape({
            name: PropTypes.string.isRequired,
            cover_image: PropTypes.string,
            profile_image: PropTypes.string,
            website: PropTypes.string,
            bio: PropTypes.string,
            location: PropTypes.string,
            facebook: PropTypes.string,
            twitter: PropTypes.string,
        }),
        allGhostPost: PropTypes.object.isRequired,
    }).isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
    pageContext: PropTypes.object,
}

export default SamanPage

export const pageQuery = graphql`
    query {
      allGhostAuthor {
        edges {
          node {
            bio
            cover_image
            facebook
            ghostId
            meta_description
            meta_title
            name
            postCount
            slug
            twitter
            url
            website
            profile_image
            location
          }
        }
      }
    }
`
