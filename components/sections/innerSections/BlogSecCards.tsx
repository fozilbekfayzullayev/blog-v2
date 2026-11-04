import PostCardRow from "@/components/shared/PostCardRow";
import SideContent from "@/components/shared/SideContent";
import { toPostCardData } from "@/lib/postCard";
import { Post } from "@/payload-types";

export default function BlogSecCards({ posts }: { posts: Post[] }) {
  return (
    <div className="flex items-start flex-col xl:gap-20  xl:flex-row">
      <div className="divide-y divide-black flex flex-col gap-10  flex-1">
        {posts.map((post) => (
          <PostCardRow key={post.id} post={toPostCardData(post)} />
        ))}
      </div>
      <SideContent />
    </div>
  );
}
