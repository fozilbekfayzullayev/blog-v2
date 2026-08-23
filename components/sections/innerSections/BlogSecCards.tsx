import PostCardRow from "@/components/shared/PostCardRow";
import SideContent from "@/components/shared/SideContent";
import { getPayloadClient } from "@/lib/getPayload";

export default async function BlogSecCards() {
  const payload = await getPayloadClient();

  const { docs: posts } = await payload.find({
    collection: "posts",
    where: {
      status: { equals: "published" },
    },
    sort: "-publishedData",
    limit: 5,
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const removedPost = posts.shift();
  console.log(posts);

  return (
    <div className="flex items-start flex-col xl:gap-20  xl:flex-row">
      <div className="divide-y divide-black flex flex-col gap-10  flex-1">
        {posts.map((post) => (
          <PostCardRow key={post.id} post={post} />
        ))}
      </div>
      <SideContent />
    </div>
  );
}
