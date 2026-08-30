import Container from "@/components/shared/Container";
import EmptySection from "@/components/shared/EmptySection";
import GalleryGrid from "@/components/shared/GalleryGrid";
import GoBackButton from "@/components/shared/GoBackButton";
import { Separator } from "@/components/ui/separator";
import { getPayloadClient } from "@/lib/getPayload";
import Image from "next/image";
import MyGalleryImg from "@/public/images/my-gallery.svg";
import GalleryBannerImg from "@/public/images/gallery-banner.jpg";

const POST_PER_PAGE = 8;

export default async function Gallery() {
  const payload = await getPayloadClient();

  const { docs: items, hasNextPage } = await payload.find({
    collection: "gallery",
    limit: POST_PER_PAGE,
    sort: "-createdAt",
  });

  const images = items
    .map((item) => {
      const img = typeof item.image === "object" ? item.image : null;
      return img?.url
        ? { url: img.url, alt: img.alt || item.title || "Gallery rasm" }
        : null;
    })
    .filter((img): img is { url: string; alt: string } => img !== null);

  return (
    <Container>
      <div className="mt-10 mb-20">
        <Image
          src={MyGalleryImg}
          alt="Bannerdagi MY GALLERY rasmi"
          width={884}
          height={183}
          className="w-full mb-5 object-cover mx-auto"
          priority
        />
        <Image
          src={GalleryBannerImg}
          alt="Bannerdagi fayzek rasmi"
          width={884}
          height={183}
          sizes="100vw"
          placeholder="blur"
          className="w-full mb-10 object-cover mx-auto"
        />

        <div className="mb-5">
          <GoBackButton link="/" text="Back" />
        </div>

        <Separator className="bg-black" />
        <div>
          {images.length === 0 ? (
            <EmptySection />
          ) : (
            <GalleryGrid
              initialImages={images}
              initialHasNextPage={hasNextPage}
            />
          )}
        </div>
      </div>
    </Container>
  );
}
