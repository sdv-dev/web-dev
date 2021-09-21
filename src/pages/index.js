import React, { useEffect, useState } from "react";
import { Article } from "../components/common";
import Hero from "../components/home/hero";
import config from "../utils/siteConfig";
import Seo from "../components/Seo";

export default function HomePage() {
  const [downloads, setDownloads] = useState("");

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  //Get the total number of downloads for a single release, using its tag name.

  function getDownloadsCount() {
    var project = "ctgan";

    var xhr = new XMLHttpRequest();

    xhr.addEventListener("load", function () {
      var data = JSON.parse(this.responseText);
      var number = numberWithCommas(data.total_downloads);
      var numberK = number.split(",")[0];
      setDownloads(numberK);
      return numberK;
    });
    xhr.open("GET", "https://api.pepy.tech/api/projects/" + project);
    xhr.send();
  }

  useEffect(() => {
    getDownloadsCount();
    return () => {};
  }, []);

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
        <Hero downloads={downloads} />
      </div>
    </Article>
  );
}
