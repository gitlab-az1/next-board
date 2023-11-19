import React, { useState, type ImgHTMLAttributes, useEffect } from 'react';


export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt?: string;
  blob?: boolean;
}

const Image = ({
  src,
  alt,
  blob,
  ...props
}: ImageProps) => {
  const [source, setSource] = useState<string>(src);

  useEffect(() => {
    if(blob === false) return setSource(src);

    fetch(src).then(res => {
      const ok = 2 === (res.status / 100 | 0);
      if(!ok) return setSource(src);

      res.arrayBuffer().then(buffer => {
        setSource(URL.createObjectURL(new Blob([buffer])));
      }).catch(() => setSource(src));
    }).catch();
  }, [src]);

  return (
    <img
      {...props}
      src={source}
      alt={alt}
    />
  );
};

export default Image;