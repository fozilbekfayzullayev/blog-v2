import Image from "next/image";
import PostCardRow from "../shared/PostCardRow";
import SideContent from "../shared/SideContent";
import LinkButton from "../shared/LinkButton";
import { Separator } from "../ui/separator";
import { getPayloadClient } from "@/lib/getPayload";
import { customTimeFormat } from "@/lib/customTimeFormat";
import { calculateReadTime } from "@/lib/readTime";
import CustomButton from "../shared/CustomButton";

export default async function BlogSection() {
  const payload = await getPayloadClient();

  const { docs: posts } = await payload.find({
    collection: "posts",
    where: {
      status: { equals: "published" },
    },
    sort: "-publishedDate",
  });

  const firstPost = posts[posts.length - 1];

  return (
    <section className="pt-8 md:pt-12">
      <div className="flex flex-col-reverse sm:flex-col gap-5 md:gap-10 mb-20">
        <div className="flex items-start gap-5 flex-col md:flex-row">
          <h2 className="flex-1 md:flex-2/5 lg:flex-1/2 text-6xl font-bold uppercase">
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
          src={
            "https://cdn.prod.website-files.com/6240546a63932414bcd71bf5/6240a3d49d0194e1ec5e9d68_post-dont-close-your-eyes.jpg"
          }
          alt="Blog postidagi rasm"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
        />
      </div>
      <div className="flex items-start flex-col xl:gap-20  xl:flex-row">
        <div className="divide-y divide-black flex flex-col gap-10  flex-1">
          {posts.slice(0, 4).map((post) => (
            <PostCardRow key={post.id} post={post} />
          ))}
        </div>
        <SideContent />
      </div>

      <div className="my-15">
        <LinkButton text={"All blogs"} link={"/blogs"} />
      </div>
      <Separator className="bg-black" />
    </section>
  );
}
