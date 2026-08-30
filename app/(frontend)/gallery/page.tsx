/* eslint-disable react/no-unescaped-entities */
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
      return item.url
        ? { url: item.url, alt: item.title || item.filename || "Gallery rasm" }
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
          className="w-full object-cover mx-auto"
        />

        <div className="w-full bg-black text-white flex items-center py-3 md:py-6 overflow-hidden mb-10 lg:mb-12">
          <p className="font-bold px-3 whitespace-nowrap shrink-0 text-sm md:text-lg">
            QUOTE+++
          </p>
          <div className="flex overflow-hidden whitespace-nowrap w-full">
            <div className="flex animate-marquee shrink-0">
              <p className="text-sm md:text-lg flex shrink-0">
                <span className="px-5">
                  Har bir bola — ijodkor (rassom). Asosiy muammo — ulg'aygach
                  ham ijodkor bo'lib qolishda. -- Pablo Pikasso
                </span>
                <span className="px-5">++++</span>
                <span className="px-5">
                  Har bir bola — ijodkor (rassom). Asosiy muammo — ulg'aygach
                  ham ijodkor bo'lib qolishda. -- Pablo Pikasso
                </span>
                <span className="px-5">++++</span>
              </p>
              <p
                className="text-sm md:text-lg flex shrink-0"
                aria-hidden="true"
              >
                <span className="px-5">
                  Har bir bola — ijodkor (rassom). Asosiy muammo — ulg'aygach
                  ham ijodkor bo'lib qolishda. -- Pablo Pikasso
                </span>
                <span className="px-5">++++</span>
                <span className="px-5">
                  Har bir bola — ijodkor (rassom). Asosiy muammo — ulg'aygach
                  ham ijodkor bo'lib qolishda. -- Pablo Pikasso
                </span>
                <span className="px-5">++++</span>
              </p>
            </div>
          </div>
        </div>

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
