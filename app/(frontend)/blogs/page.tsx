import Container from "@/components/shared/Container";
import GoBackButton from "@/components/shared/GoBackButton";
import { getPayloadClient } from "@/lib/getPayload";
import Image from "next/image";
import PostCard from "@/components/shared/PostCard";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const POSTS_PER_PAGE = 8;

export default async function Blogs({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page } = await searchParams;
  const currentPage = Number(page) || 1;
  const payload = await getPayloadClient();

  const {
    docs: posts,
    totalPages,
    hasNextPage,
    hasPrevPage,
  } = await payload.find({
    collection: "posts",
    where: { status: { equals: "published" } },
    sort: "-publishedDate",
    limit: POSTS_PER_PAGE,
    page: currentPage,
  });

  return (
    <Container>
      <div className="mt-10 mb-20">
        <Image
          src={"/images/blogs.svg"}
          alt="Bannerdagi MY BLOGS rasmi"
          width={884}
          height={183}
          className="w-full mb-10 object-cover mx-auto"
          priority
        />

        <div className="w-full bg-black text-white flex items-center py-3 md:py-6 overflow-hidden mb-10 lg:mb-15">
          <p className="font-bold px-3 whitespace-nowrap shrink-0 text-sm md:text-lg">
            QUOTE TICKER+++
          </p>
          <div className="flex overflow-hidden whitespace-nowrap w-full">
            <div className="flex animate-marquee shrink-0">
              <p className="text-sm md:text-lg flex shrink-0">
                <span className="px-5">
                  This blog is the property of the Half Blood Prince
                </span>
                <span className="px-5">++++</span>
                <span className="px-5">
                  This blog is the property of the Half Blood Prince
                </span>
                <span className="px-5">++++</span>
              </p>
              <p
                className="text-sm md:text-lg flex shrink-0"
                aria-hidden="true"
              >
                <span className="px-5">
                  This blog is the property of the Half Blood Prince
                </span>
                <span className="px-5">++++</span>
                <span className="px-5">
                  This blog is the property of the Half Blood Prince
                </span>
                <span className="px-5">++++</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mb-5">
          <GoBackButton link="/" text="Back" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        <Pagination className="mt-10">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href={hasPrevPage ? `/blogs?page=${currentPage - 1}` : "#"}
                aria-disabled={!hasPrevPage}
                className={!hasPrevPage ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <PaginationItem key={p}>
                <PaginationLink
                  href={`/blogs?page=${p}`}
                  isActive={p === currentPage}
                >
                  {p}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext
                href={hasNextPage ? `/blogs?page=${currentPage + 1}` : "#"}
                aria-disabled={!hasNextPage}
                className={!hasNextPage ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </Container>
  );
}
