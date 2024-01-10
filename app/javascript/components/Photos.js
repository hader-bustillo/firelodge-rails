import React from "react";

import { useState } from "react";
import PhotoAlbum from "react-photo-album";

import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import AppImage from "./ui/AppImage";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

export default function Photos(props) {
  const { photos } = props;
  const slides = photos.map(({ src, width, height }) => ({
    src,
    width,
    height,
  }));
  const [index, setIndex] = useState(-1);

  return (
    <div className="relative w-screen h-screen bg-white">
      <div className="fixed z-20 w-screen h-16 bg-white">
        <a
          href="/"
          className="absolute top-0 left-0 z-10 flex justify-center p-2 m-4 align-middle rounded-full text-slate-900 hover:bg-slate-200"
        >
          <span aria-label="Back" className="sr-only" />
          <ChevronLeftIcon className="w-6 h-6" />
        </a>
        <div className="max-w-6xl pb-10 mx-auto">
          {/* <h2 className="py-4 text-3xl text-emerald-800">Hyak Chatel</h2> */}
        </div>
      </div>
      <div className="max-w-6xl px-4 pt-20 pb-10 mx-auto">
        <PhotoAlbum
          photos={photos}
          layout="columns"
          columns={2}
          renderPhoto={AppImage}
          onClick={(event, photo, index) => {
            setIndex(index)
          }}
        />
        <Lightbox
          slides={slides}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          animation={{
            fade: 400,
            slide: 0,
          }}
          carousel={{
            preload: 2,
            padding: 40,
            imageFit: "contain",
          }}
          render={{
            slide: (image, offset, rect) => {
              const width = Math.round(
                Math.min(rect.width, (rect.height / image.height) * image.width)
              );
              const height = Math.round(
                Math.min(rect.height, (rect.width / image.width) * image.height)
              );

              return (
                <div style={{ position: "relative", width, height }}>
                  <img
                    fill
                    src={image.src}
                    loading="eager"
                    placeholder="blur"
                    alt={"alt" in image ? image.alt : ""}
                    sizes={
                      typeof window !== "undefined"
                        ? `${Math.ceil((width / window.innerWidth) * 100)}vw`
                        : `${width}px`
                    }
                  />
                </div>
              );
            },
          }}
        />
      </div>
    </div>
  );
}
