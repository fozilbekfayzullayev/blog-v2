"use client";
import { loadMoreImages } from "@/lib/actions";
import Image from "next/image";
import { useState, useTransition } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Button } from "../ui/button";

type GalleryGridProps = {
  initialImages: { url: string; alt: string }[];
  initialHasNextPage: boolean;
};

export default function GalleryGrid({
  initialImages,
  initialHasNextPage,
}: GalleryGridProps) {
  const [images, setImages] = useState(initialImages);
  const [index, setIndex] = useState(-1);
  const [hasNextPage, setHasNextPage] = useState(initialHasNextPage);
  const [page, setPage] = useState(1);
  const [isPending, startTransition] = useTransition();

  function handleLoadMore() {
    startTransition(async () => {
      const nextPage = page + 1;
      const { images: newImages, hasNextPage: newHasNextPage } =
        await loadMoreImages(nextPage);

      setImages((prev) => [...prev, ...newImages]);
      setHasNextPage(newHasNextPage);
      setPage(nextPage);
    });
  }

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-10 lg:my-20">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className="relative aspect-3/4 overflow-hidden"
          >
            <Image
              src={img.url}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover grayscale-75 hover:grayscale-0 cursor-pointer hover:scale-105 transition duration-100 ease-in"
            />
          </button>
        ))}
      </div>

      {hasNextPage && (
        <div className="flex justify-center mb-20">
          <Button
            onClick={handleLoadMore}
            disabled={isPending}
            className="font-inter cursor-pointer"
          >
            {isPending ? "Yuklanmoqda..." : "Ko'proq ko'rish"}
          </Button>
        </div>
      )}

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={images.map((img) => ({ src: img.url, alt: img.alt }))}
      />
    </>
  );
}
