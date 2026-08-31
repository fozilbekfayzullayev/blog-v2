import Image from "next/image";
import LinkButton from "../shared/LinkButton";
import { Separator } from "../ui/separator";
import { getPayloadClient } from "@/lib/getPayload";
import { customTimeFormat } from "@/lib/customTimeFormat";
import { calculateReadTime } from "@/lib/readTime";
import CustomButton from "../shared/CustomButton";
import BlogSecCards from "./innerSections/BlogSecCards";
import { notFound } from "next/navigation";

export default async function BlogSection() {
  const payload = await getPayloadClient();

  const { docs: posts } = await payload.find({
    collection: "posts",
    where: {
      status: { equals: "published" },
    },
    sort: "-publishedDate",
    limit: 1,
  });

  if (posts.length === 0) return;
  const firstPost = posts[posts.length - 1];

  if (!firstPost) notFound();
  const imageUrl =
    typeof firstPost.coverImage === "object" && firstPost.coverImage?.url
      ? firstPost.coverImage.url
      : "https://cdn.prod.website-files.com/6240546a63932414bcd71bf5/6240a3d49d0194e1ec5e9d68_post-dont-close-your-eyes.jpg";

  return (
    <section className="pt-8 md:pt-12">
      <div className="flex flex-col-reverse sm:flex-col gap-5 md:gap-10 mb-20">
        <div className="flex items-start gap-5 flex-col md:flex-row">
          <h2 className="flex-1 md:flex-2/5 lg:flex-1/2 text-4xl md:text-6xl font-bold uppercase">
            {firstPost.title}
          </h2>
          <div className="flex-1 md:flex-3/5 lg:flex-1/2">
            <p className="mb-5 text-gray-700">{firstPost.excerpt}</p>
            {/* DETAILS */}
            <div className="flex items-center lg:items-start justify-between gap-5">
              <div className="flex lg:items-center flex-col lg:flex-row gap-1 lg:gap-5">
                <p className="text-sm shrink-0">
                  <span className="font-bold">Date: </span>
                  <span>{customTimeFormat(firstPost.publishedDate)}</span>
                </p>
                <p className="text-sm shrink-0">
                  <span className="font-bold">Read: </span>
                  <span>{calculateReadTime(firstPost.content)} min</span>
                </p>
              </div>
              <div>
                <CustomButton
                  link={`/blogs/${firstPost.slug}`}
                  text="Read more"
                />
              </div>
            </div>
          </div>
        </div>

        <Image
          src={imageUrl}
          alt="Blog postidagi rasm"
          width={1920}
          height={1080}
          sizes="100vw"
          className="w-full h-auto object-cover border"
        />
      </div>

      <BlogSecCards />

      <div className="my-15">
        <LinkButton text={"All blogs"} link={"/blogs"} />
      </div>
      <Separator className="bg-black" />
    </section>
  );
}
