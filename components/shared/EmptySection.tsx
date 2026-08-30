import { FaRegFolderOpen } from "react-icons/fa6";

export default function EmptySection() {
  return (
    <div className="flex flex-col items-center py-10 gap-3 text-muted-foreground">
      <FaRegFolderOpen size={45} />
      <span className="text-xl font-inter">No items yet</span>
    </div>
  );
}
