"use client";

import Image from "next/image";
import Link from "next/link";
import CustomButton from "@/components/shared/CustomButton";
import { customTimeFormat } from "@/lib/customTimeFormat";
import { calculateReadTime } from "@/lib/readTime";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useIsTruncated } from "@/app/hooks/useIsTruncated";
import { Post } from "@/payload-types";
import { useState } from "react";

type PostCardProps = {
  post: Post; // loyihangizdagi Post type bilan almashtiring
};

export default function PostCard({ post }: PostCardProps) {
  const { ref, isTruncated } = useIsTruncated<HTMLHeadingElement>();
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const imageUrl =
    typeof post.coverImage === "object" && post.coverImage?.url
      ? post.coverImage.url
      : "https://cdn.prod.website-files.com/6240546a63932414bcd71bf5/6240a3d49d0194e1ec5e9d68_post-dont-close-your-eyes.jpg";

  const heading = (
    <h2 ref={ref} className="text-xl font-semibold mb-2 line-clamp-2 w-fit">
      {post.title}
    </h2>
  );

  return (
    <div className="border border-black flex flex-col p-4 pb-8">
      <p className="text-sm mb-2">{customTimeFormat(post.publishedDate)}</p>

      <Link
        href={`/blogs/${post.slug}`}
        className="block relative w-full aspect-video mb-3"
      >
        {!isImageLoaded && (
          <div className="absolute inset-0 animate-pulse bg-gray-200" />
        )}
        <Image
          src={imageUrl}
          alt="Blog postidagi rasm"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className={`object-cover transition-opacity duration-300 ${
            isImageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setIsImageLoaded(true)}
        />
      </Link>

      {isTruncated ? (
        <Tooltip>
          <TooltipTrigger
            render={
              <Link href={`/blogs/${post.slug}`} className="text-left block">
                {heading}
              </Link>
            }
          />
          <TooltipContent>
            <p>{post.title}</p>
          </TooltipContent>
        </Tooltip>
      ) : (
        <Link href={`/blogs/${post.slug}`} className="text-left block">
          {heading}
        </Link>
      )}

      <p className="mb-10 line-clamp-3 text-gray-700">{post.excerpt}</p>

      <div className="mt-auto flex justify-between items-center">
        <div>
          <CustomButton link={`/blogs/${post.slug}`} text="Read more" />
        </div>
        <p className="text-sm">
          <span className="font-bold">Read:</span>{" "}
          {calculateReadTime(post.content)} min
        </p>
      </div>
    </div>
  );
}
