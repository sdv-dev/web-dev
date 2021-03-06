import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import AuthorCardSm from "../AuthorCardSm"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const AuthorPostCard = ({ post }) => {
    const url = `/${post.slug}/`

    return (
        <Link to={url} className="w-full sm:w-1/2 md:w-4/12 lg:w-3/12 px-3 mb-6 link-wrap py-3" key={`blog-article-${post.id}`}>
            <header
                style={{
                boxShadow: "0px 15px 35px rgba(0, 0, 0, 0.05)",
                }}
                className="w-full mb-6 rounded-tl-10 rounded-bl-10 rounded-tr-10 rounded-br-50 overflow-hidden border border-stroke flex justify-center"
            >
                <div className="w-full feature-image relative h-0 pb-cimg-xs">
                    <img src={post.feature_image} alt={post.title} className="absolute inset-0 md:w-full h-full object-cover object-center" />
                </div>
            </header>
            <AuthorCardSm post={post} />

            <div>
                <p className="read-more text-sdv-heading font-semibold mb-4 text-lg leading-none">
                {post.title}
                </p>
                {/* <p className="text-sdv-subheading font-light mb-3">
                {post.excerpt}
                </p>
                <p>
                    <div className="read-more font-bold">Read more <FontAwesomeIcon width="16" icon={faArrowRight} /></div>
                </p> */}
            </div>
        </Link>
    )
}

AuthorPostCard.propTypes = {
    post: PropTypes.shape({
        slug: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        feature_image: PropTypes.string,
        featured: PropTypes.bool,
        tags: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
            })
        ),
        excerpt: PropTypes.string.isRequired,
        primary_author: PropTypes.shape({
            name: PropTypes.string.isRequired,
            profile_image: PropTypes.string,
        }).isRequired,
    }).isRequired,
}

export default AuthorPostCard
