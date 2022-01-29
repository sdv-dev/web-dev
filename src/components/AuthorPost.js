import React from 'react'

import config from '../utils/siteConfig'

export default function AuthorPost({post}) {

    const {authors} = post

    if (typeof authors[1] === "object") {
        return (
            <div className="flex flex-start">
                {post.authors.map((author, idx) => {
                    return (
                        <section className="flex flew-row mb-6 mr-4">
                            <a 
                                href={`${config.sitePath}/authors/${author.slug}`}
                                className="relative inline-block hover:opacity-80"
                            >
                                <div
                                    className="rounded-full bg-sdv-highlight top-0 left-0"
                                    style={{
                                        width: "49px",
                                        height: "49px",
                                    }}
                                >
                                    <div
                                        className="overflow-hidden rounded-full absolute bottom-0 right-0"
                                        style={{
                                            width: "46px",
                                            height: "46px",
                                        }}
                                    >
                                        {author.profile_image ? (
                                            <img
                                                width={46}
                                                height={46}
                                                className="block rounded-full relative z-10 object-cover h-full"
                                                src={
                                                    author.profile_image
                                                }
                                                alt={author.name}
                                            />
                                        ) : (
                                            <img
                                                width={46}
                                                height={46}
                                                className="block rounded-full relative z-10 object-cover h-full"
                                                src="/blog/images/icons/avatar.svg"
                                                alt={author.name}
                                            />
                                        )}
                                    </div>
                                </div>
                            </a>
                            <div className="text-xs px-4 flex flex-col justify-center">
                                <p className="text-sm font-bold">
                                    <a className="hover:text-sdv-secondary" href={`${config.sitePath}/authors/${author.slug}`}>{author.name}</a>
                                </p>
                            </div>
                        </section>
                    )
                })}
            </div>
        )
    }

  return (
    <a 
        href={`${config.sitePath}/authors/${post.primary_author.slug}`}
        className="flex flew-row mb-6 hover:text-sdv-secondary">
      <div className="relative hover:opacity-80">
          <div
              className="rounded-full bg-sdv-highlight top-0 left-0"
              style={{
                  width: "48px",
                  height: "48px",
              }}
          >
              <div
                  className="overflow-hidden rounded-full absolute bottom-0 right-0"
                  style={{
                      width: "46px",
                      height: "46px",
                  }}
              >
                  {post.primary_author.profile_image ? (
                      <img
                          width={46}
                          height={46}
                          className="block rounded-full relative z-10 object-cover h-full"
                          src={
                              post.primary_author
                                  .profile_image
                          }
                          alt={post.primary_author.name}
                      />
                  ) : (
                      <img
                          width={46}
                          height={46}
                          className="block rounded-full relative z-10 object-cover h-full"
                          src="/blog/images/icons/avatar.svg"
                          alt={post.primary_author.name}
                      />
                  )}
              </div>
          </div>
      </div>
      <div className="text-xs px-4 flex flex-col justify-center">
          <p className="text-sm font-bold">
            {post.primary_author.name}
          </p>
      </div>
  </a>
  )
}