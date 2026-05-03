"use client";

import { useState } from "react";

type Props = React.ImgHTMLAttributes<HTMLImageElement>;

// Simple <img> wrapper that falls back to a brand-coloured placeholder when
// the descriptive image hasn't been uploaded yet. Replace the placeholder
// images later via GitHub.
export function Img({ src, alt = "", className, loading = "lazy", ...rest }: Props) {
  const [errored, setErrored] = useState(false);
  const finalSrc = errored ? "/images/placeholder.svg" : src;
  return (
    <img
      {...rest}
      src={finalSrc}
      alt={alt}
      loading={loading}
      decoding="async"
      onError={() => setErrored(true)}
      className={className}
    />
  );
}
