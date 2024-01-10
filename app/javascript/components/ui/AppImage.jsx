import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function AppImage({
  imageProps: { src, alt, title, sizes, className, onClick },
  wrapperStyle,
}) {

  return (
    <div style={wrapperStyle}>
      <div className="relative block w-full h-full overflow-hidden rounded">
        <LazyLoadImage
          src={src}
          alt={alt}
          title={title}
          sizes={sizes}
          className={className}
          onClick={onClick}
          role="button"
        />
      </div>
    </div>
  );
}
