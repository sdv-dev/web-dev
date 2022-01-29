import React from "react";

import config from "../utils/siteConfig";

export default function AuthorCard({ post }) {
  const { authors } = post;

  if (typeof authors[1] === "object") {
    return (
      <section className="flex flew-row mb-6">
        <a className="relative mr-3 inline-block hover:opacity-90" 
          href={`${config.sitePath}/authors/${authors[0].slug}`}
          style={{
              width: "49px",
              height: "49px",
            }}>
          <div
            className="rounded-full bg-sdv-highlight top-0 left-0 h-full w-full"
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
              {authors[0].profile_image ? (
                <img
                  width={46}
                  height={46}
                  className="block rounded-full relative z-10 object-cover h-full"
                  src={authors[0].profile_image}
                  alt={authors[0].name}
                />
              ) : (
                <img
                  width={46}
                  height={46}
                  className="block rounded-full relative z-10 object-cover h-full"
                  src="/blog/images/icons/avatar.svg"
                  alt={authors[0].name}
                />
              )}
            </div>
          </div>
        </a>

        <a className="relative inline-block hover:opacity-80" 
          href={`${config.sitePath}/authors/${authors[1].slug}`}
        style={{
              width: "49px",
              height: "49px",
            }}>
          <div
            className="rounded-full bg-sdv-highlight top-0 left-0 h-full w-full"
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
              {authors[1].profile_image ? (
                <img
                  width={46}
                  height={46}
                  className="block rounded-full relative z-10 object-cover h-full"
                  src={authors[1].profile_image}
                  alt={authors[1].name}
                />
              ) : (
                <img
                  width={46}
                  height={46}
                  className="block rounded-full relative z-10 object-cover h-full"
                  src="/blog/images/icons/avatar.svg"
                  alt={authors[1].name}
                />
              )}
            </div>
          </div>
        </a>

        <div className="pl-4 flex flex-col justify-center">
          <p className="text-sm">
            <strong className="font-bold">
              <a className="hover:text-sdv-secondary" href={`${config.sitePath}/authors/${authors[0].slug}`}>{authors[0].name}</a>
            </strong> 
            {" "}
            and 
            {" "}
            <strong className="font-bold">
              <a className="hover:text-sdv-secondary" href={`${config.sitePath}/authors/${authors[1].slug}`}>{authors[1].name}</a>
            </strong>
          </p>
          <p className="font-light text-xs">{post.published_at_pretty}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="flex flew-row mb-6">
      <a 
        href={`${config.sitePath}/authors/${post.primary_author.slug}`}
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
            {post.primary_author.profile_image ? (
              <img
                width={46}
                height={46}
                className="block rounded-full relative z-10 object-cover h-full"
                src={post.primary_author.profile_image}
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
      </a>
      <div className="pl-4 flex flex-col justify-center">
        <p className="font-bold text-sm">
          <a className="hover:text-sdv-secondary" href={`${config.sitePath}/authors/${post.primary_author.slug}`}>{post.primary_author.name}</a>
        </p>
        <p className="font-light text-xs">{post.published_at_pretty}</p>
      </div>
    </section>
  );
}
