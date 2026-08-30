import Image from "next/image";
import { useState } from "react";

export default function GalleryImage({
  img,
  onClick,
}: {
  img: { url: string; alt: string };
  onClick: () => void;
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <button
      onClick={onClick}
      className="relative aspect-3/4 overflow-hidden bg-gray-200"
    >
      {!isLoaded && (
        <div className="absolute inset-0 animate-pulse bg-gray-200" />
      )}
      <Image
        src={img.url}
        alt={img.alt}
        fill
        sizes="(max-width: 768px) 50vw, 33vw"
        className={`object-cover grayscale-75 hover:grayscale-0 cursor-pointer hover:scale-105 transition duration-100 ease-in ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setIsLoaded(true)}
      />
    </button>
  );
}
