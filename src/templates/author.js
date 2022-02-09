import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { AuthorPostCard, Pagination, AuthorLayout } from '../components/common'
import { MetaData } from '../components/common/meta'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

import team from '../utils/team';
import config from "../utils/siteConfig";

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

const Author = ({ data, location, pageContext }) => {
    const author = data.ghostAuthor
    const posts = data.allGhostPost.edges
    const twitterUrl = author.twitter ? `https://twitter.com/${author.twitter.replace(/^@/, ``)}` : null
    const facebookUrl = author.facebook ? `https://www.facebook.com/${author.facebook.replace(/^\//, ``)}` : null

    const contributorsnames = team.map( i => i.name );

    const isContributor = contributorsnames.indexOf(author.name) >= 0 ? true : false;
       

    return (
        <>
            <MetaData
                data={data}
                location={location}
                type="profile"
            />
            <AuthorLayout>
                <div className="container pt-20">
                    <header className="author-header pt-24">
                        <div className="flex flex-wrap -mx-4">
                            <div className="w-56 px-4">
                                {author.profile_image && <img src={author.profile_image} alt={author.name} />}
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
                                    { twitterUrl && (
                                        <div className="px-1">
                                            <a
                                                href={twitterUrl} target="_blank" rel="noopener noreferrer"
                                                className="w-8 h-8 flex justify-center items-center bg-sdv-dark inline-block rounded-full hover:bg-sdv-secondary text-sdv-offwhite">
                                                <FontAwesomeIcon width="16" icon={faTwitter} />
                                            </a>
                                        </div>
                                    )}
                                    { facebookUrl &&(<div className="px-1">
                                        <a href={facebookUrl} target="_blank" rel="noopener noreferrer"
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
                                <p className='text-lg max-w-4xl'>{author.bio}</p>
                            </div>
                        )}
                        
                    </header>
                    <section className="post-feed mt-24">
                        {/* {JSON.stringify(author)} */}

                        <SectionTitle>
                            Recent Posts
                        </SectionTitle>

                        { Array.from(posts).length > 0 ? (
                            <div className='flex flex-wrap -mx-3'>
                            {posts.map(({ node }) => (
                                // The tag below includes the markup for each post - components/common/PostCard.js
                                <AuthorPostCard key={node.id} post={node} />
                            ))}
                        </div>
                        ) : (
                            <div>
                                {author.name} 
                                {" "}
                                has not published any articles yet.
                            </div>
                        )}

                        

                        {/* <Pagination pageContext={pageContext} /> */}
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

Author.propTypes = {
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

export default Author

export const pageQuery = graphql`
    query GhostAuthorQuery($slug: String!, $limit: Int!, $skip: Int!) {
        ghostAuthor(slug: { eq: $slug }) {
            ...GhostAuthorFields
        }
        allGhostPost(
            sort: { order: DESC, fields: [published_at] },
            filter: {authors: {elemMatch: {slug: {eq: $slug}}}},
            limit: $limit,
            skip: $skip
        ) {
            edges {
                node {
                ...GhostPostFields
                }
            }
        }
    }
`
