export default function BlogSectionSkeleton() {
  return (
    <section className="pt-8 md:pt-12 animate-pulse">
      <div className="flex flex-col-reverse sm:flex-col gap-5 md:gap-10 mb-20">
        <div className="flex items-start gap-5 flex-col md:flex-row">
          {/* h2 title o'rniga kulrang to'rtburchak */}
          <div className="flex-1 md:flex-2/5 lg:flex-1/2 h-16 bg-gray-200 rounded" />
          {/* excerpt matni o'rniga ikki qator */}
          <div className="flex-1 md:flex-3/5 lg:flex-1/2 space-y-3">
            <div className="h-4 bg-gray-200 rounded w-full" />
            <div className="h-4 bg-gray-200 rounded w-2/3" />
          </div>
        </div>
        {/* rasm o'rniga aspect-video to'rtburchak */}
        <div className="w-full aspect-video bg-gray-200 rounded" />
      </div>
    </section>
  );
}
