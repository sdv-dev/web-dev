import React from "react";
import { Article } from "../components/common";
import Hero from "../components/home/hero";
import config from "../utils/siteConfig";
import Seo from "../components/Seo";

export default function HomePage() {

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
        <Hero />
      </div>
    </Article>
  );
}
