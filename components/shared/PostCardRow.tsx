import Image from "next/image";
import { Post } from "@/payload-types";
import { calculateReadTime } from "@/lib/readTime";
import { customTimeFormat } from "@/lib/customTimeFormat";
import CustomButton from "./CustomButton";

type PostCardProps = {
  post: Post;
};

export default function PostCardRow({ post }: PostCardProps) {
  const imageUrl =
    typeof post.coverImage === "object" && post.coverImage?.url
      ? post.coverImage.url
      : "https://cdn.prod.website-files.com/6240546a63932414bcd71bf5/6240a3d49d0194e1ec5e9d68_post-dont-close-your-eyes.jpg";

  return (
    <div className="flex flex-col sm:flex-row gap-5 lg:gap-10 pb-10">
      <div className="w-full sm:w-40 sm:h-40 md:w-50 md:h-50 aspect-square relative">
        <Image
          src={imageUrl}
          alt="Blog postidagi rasm"
          fill
          className="object-cover"
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
              <span>{calculateReadTime(post.content)} min</span>
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
