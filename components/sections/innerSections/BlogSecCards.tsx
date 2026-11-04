import PostCardRow from "@/components/shared/PostCardRow";
import SideContent from "@/components/shared/SideContent";
import { getPayloadClient } from "@/lib/getPayload";
import { toPostCardData } from "@/lib/postCard";

export default async function BlogSecCards() {
  const payload = await getPayloadClient();

  const { docs: posts } = await payload.find({
    collection: "posts",
    where: {
      status: { equals: "published" },
    },
    sort: "-publishedDate",
    limit: 5,
  });

  return (
    <div className="flex items-start flex-col xl:gap-20  xl:flex-row">
      <div className="divide-y divide-black flex flex-col gap-10  flex-1">
        {posts.slice(1).map((post) => (
          <PostCardRow key={post.id} post={toPostCardData(post)} />
        ))}
      </div>
      <SideContent />
    </div>
  );
}
