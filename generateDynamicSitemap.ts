import { writeFileSync, readdirSync } from "fs";
import { join } from "path";
import { SitemapStream, streamToPromise } from "sitemap";

// const { writeFileSync, readdirSync } = require('fs');
// const { join } = require('path');
// const { SitemapStream, streamToPromise } = require('sitemap');

const hostname = "https://drchetanspinesurgeon.com";

// Function to get image URLs from public/images folder
function getImageUrls() {
  const imagesDir = join(process.cwd(), "public", "images");
  const images = readdirSync(imagesDir);
  return images.map((image) => `${hostname}/images/${image}`);
}

// Your existing functions for getting static and dynamic routes
function getStaticRoutes() {
  return [
    "/",
    "/about",
    "/contact",
    "/treatments",
    "/treatments/endoscopic-spine-surgery",
    "/treatments/microdiscectomy",
    "/treatments/kyphoplasty-vertebroplasty",
    "/treatments/oblique-lateral-interbody-fusion",
    "/treatments/spinal-fusion-surgery",
    "/treatments/cervical-disc-replacement",
    "/treatments/complex-spine-deformity-correction",
    "/treatments/spine-trauma-surgery",
    "/treatments/spinal-tumor-surgery",
    "/conditions",
    "/blogs",
    "/blog/",
  ];
}

async function generateSitemap() {
  try {
    const staticRoutes = getStaticRoutes();
    const imageUrls = getImageUrls();

    const stream = new SitemapStream({ hostname });

    // Add static and dynamic routes
    [...staticRoutes].forEach((route) => {
      stream.write({ url: route });
    });

    // Add a special entry for your images page (if you have one)
    stream.write({
      url: "/images",
      img: imageUrls.map((url) => ({
        url,
        caption: "Image from our gallery",
        title: url.split("/").pop(), // use filename as title
      })),
    });

    // Optionally, you can also add image references to other relevant pages
    // For example, if you have a gallery page:
    stream.write({
      url: "/gallery",
      img: imageUrls.map((url) => ({ url })),
    });

    stream.end();

    const data = await streamToPromise(stream);
    writeFileSync("./public/sitemap.xml", data.toString());

    console.log("Sitemap with images generated successfully");
  } catch (error) {
    console.error("Error generating sitemap:", error);
  }
}

generateSitemap();
