import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from "react-helmet";
import { AuthorPostCard, Pagination, AuthorLayout } from '../components/common'
import { MetaData } from '../components/common/meta'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

import team from '../utils/team';
import guests from '../utils/guests';
import config from '../utils/siteConfig';

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

const Authors = ({ data, location, pageContext }) => {
    const authors = data.allGhostAuthor.edges.map( i => i.node).reverse();

    const ghostAuthorsSlugs = authors.map(i => i.slug);


    const nonGhostContributors = team.filter( i => {
      if (ghostAuthorsSlugs.indexOf(i.slug) < 0) {
        return i
      }
    })

    
    const contributorsnames = team.map( i => i.name );
    // const isContributor = contributorsnames.indexOf(author.name) >= 0 ? true : false;
       

    return (
        <>
            {/* <MetaData
                data={data}
                location={location}
                type="profile"
            /> */}
            <Helmet>
                <title>The Synthetic Data Vault Blog Authors, Contributors and Guests</title>
                <meta name="description" content="Meet and Discover The Synthetic Data Vault Blog Authors, Contributors and Guests" />
            </Helmet>
            <AuthorLayout>
                <div className="container pt-20 text-center md:text-left">
                   
                  <section className="pt-24" id="core-contributors">
                    <SectionTitle>
                      Core Contributors
                    </SectionTitle>
                    <div className="flex flex-wrap md:justify-start justify-center -mx-4 lg:-mx-10">
                      {authors.map((author, idx) => {
                        return (
                          <a href={`${config.sitePath}/authors/${author.slug}`} 
                            className="my-6 w-64 px-4 lg:px-6 mb-4 hover:opacity-80 link-wrap"
                          >
                            <div className="text-center text-sdv-dark">
                              <div
                                className="h-full block transition-shadow"
                              >
                                <div className='w-40  mx-auto relative mb-4'>
                                  {author.profile_image && <img className="w-full h-auto block mx-auto rounded-full relative z-10 mb-6" src={author.profile_image} alt={author.name} />}
                                </div>
                                
                                  <p className='read-more font-bold text'>{author.name}</p>
                                  <p className='text-center'>{author.location}</p>
                              </div>
                            </div>
                          </a>
                        );
                      })}
                      
                      {nonGhostContributors.map((author, idx) => {
                        return (
                          <a href={`${config.sitePath}/authors/${author.slug}`} 
                            className="my-6 w-64 px-4 lg:px-6 mb-4 hover:opacity-80 link-wrap"
                          >
                            <div className="text-center text-sdv-dark">
                              <div
                                className="h-full block transition-shadow"
                              >
                                <div className='w-40  mx-auto relative mb-4'>
                                  {author.image && <img className="w-full h-auto block mx-auto rounded-full relative z-10 mb-6" src={`${config.sitePath}${author.image}`} alt={author.name} />}
                                </div>
                                
                                  <p className='read-more font-bold text'>{author.name}</p>
                                  <p className='text-center'>{author.location}</p>
                              </div>
                            </div>
                          </a>
                        );
                      })}

                    </div>

                  </section>

                  <section className='pt-24' id="guest-authors">
                      <SectionTitle>
                        Guest Authors
                      </SectionTitle>

                      <div className="flex flex-wrap md:justify-start justify-center -mx-4 lg:-mx-10">
                      
                      
                      {guests.map((author, idx) => {
                        return (
                          <a href={`${config.sitePath}/authors/${author.slug}`} 
                            className="my-6 w-64 px-4 lg:px-6 mb-4 hover:opacity-80 link-wrap"
                          >
                            <div className="text-center text-sdv-dark">
                              <div
                                className="h-full block transition-shadow"
                              >
                                <div className='w-40  mx-auto relative mb-4'>
                                  {author.image && <img className="w-full h-auto block mx-auto rounded-full relative z-10 mb-6" src={`${config.sitePath}${author.image}`} alt={author.name} />}
                                </div>
                                
                                  <p className='read-more font-bold text'>{author.name}</p>
                                  <p className='text-center'>{author.location}</p>
                              </div>
                            </div>
                          </a>
                        );
                      })}

                    </div>

                      
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

Authors.propTypes = {
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

export default Authors

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
