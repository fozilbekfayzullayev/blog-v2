"use client";

import Image from "next/image";
import { PostCardData } from "@/lib/postCard";
import { customTimeFormat } from "@/lib/customTimeFormat";
import CustomButton from "./CustomButton";
import { useState } from "react";

type PostCardProps = {
  post: PostCardData;
};

export default function PostCardRow({ post }: PostCardProps) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const imageUrl = post.imageUrl;
  const readTime = post.readTime;

  return (
    <div className="flex flex-col sm:flex-row gap-5 lg:gap-10 pb-10">
      <div className="w-full sm:w-40 sm:h-40 md:w-50 md:h-50 aspect-square relative bg-gray-200">
        {!isImageLoaded && (
          <div className="absolute inset-0 animate-pulse bg-gray-200" />
        )}
        <Image
          src={imageUrl}
          alt="Blog postidagi rasm"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 160px, 200px"
          className={`object-cover transition-opacity duration-300 ${
            isImageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setIsImageLoaded(true)}
        />
      </div>
      <div>
        <div className="mb-5">
          <h2 className="font-bold text-2xl mb-3">{post.title}</h2>
          <p className="text-gray-700">{post.excerpt}</p>
        </div>
        {/* DETAILS */}
        <div className="flex justify-between flex-col xl:flex-row gap-5">
          <div>
            <p className="text-sm shrink-0">
              <span className="font-bold">Date: </span>
              <span>{customTimeFormat(post.publishedDate)}</span>
            </p>
            <p className="text-sm shrink-0">
              <span className="font-bold">Read: </span>
              <span>{readTime} min</span>
            </p>
          </div>
          <div>
            <CustomButton link={`/blogs/${post.slug}`} text="Read more" />
          </div>
        </div>
      </div>
    </div>
  );
}
