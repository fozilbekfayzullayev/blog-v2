import Container from "@/components/shared/Container";
import GoBackButton from "@/components/shared/GoBackButton";
import LastPosts from "@/components/shared/LastPosts";
import { Separator } from "@/components/ui/separator";
import { customTimeFormat } from "@/lib/customTimeFormat";
import { getPost } from "@/lib/getPost";
import { FALLBACK_IMAGE } from "@/lib/postCard";
import { calculateReadTime } from "@/lib/readTime";
import { RichText } from "@payloadcms/richtext-lexical/react";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) return { title: "Post topilmadi" };

  const imageUrl =
    typeof post.coverImage === "object" && post.coverImage?.url
      ? post.coverImage.url
      : FALLBACK_IMAGE;

  return {
    title: post.title,
    description: post.excerpt ?? undefined,
    openGraph: {
      title: post.title,
      description: post.excerpt ?? undefined,
      type: "article",
      publishedTime: post.publishedDate ?? undefined,
      siteName: "Fozilbek",
      locale: "uz_UZ",
      images: [{ url: imageUrl, alt: post.title }],
    },
  };
}

export default async function BlogBySlug({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) notFound();
  const imageUrl =
    typeof post.coverImage === "object" && post.coverImage?.url
      ? post.coverImage.url
      : FALLBACK_IMAGE;

  return (
    <Container>
      <div className="mt-5 mb-15 max-w-187.5 w-full mx-auto">
        <div className="mb-5">
          <GoBackButton link="/blogs" text="Back" />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-5">{post.title}</h1>
          <div className="w-full aspect-video relative flex-2/3 mb-5">
            <Image
              src={imageUrl}
              alt="Blog postidagi rasm"
              fill
              className="object-cover"
            />
          </div>

          <div className="text-sm flex gap-5">
            <p>
              <span className="font-bold">Read: </span>
              <span>{calculateReadTime(post.content)} min</span>
            </p>
            <p>
              <span className="font-bold">Time: </span>
              <span>{customTimeFormat(post.publishedDate)}</span>
            </p>
          </div>
        </div>
        <Separator className="bg-black my-5" />
        <RichText data={post.content} className="text-lg" />
      </div>
      <Separator className="bg-black my-10" />
      <LastPosts initialSlug={post.slug} />
    </Container>
  );
}
