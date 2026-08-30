import { getPayloadClient } from "@/lib/getPayload";
import PostCard from "./PostCard";

export default async function LastPosts({
  initialSlug,
}: {
  initialSlug: string;
}) {
  const payload = await getPayloadClient();

  const { docs: posts } = await payload.find({
    collection: "posts",
    where: {
      and: [
        { status: { equals: "published" } },
        { slug: { not_equals: initialSlug } },
      ],
    },
    sort: "-publishedDate",
    limit: 4,
  });

  return (
    <div className="mb-20">
      <h2 className="text-5xl font-bold mb-5">Last Posts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
