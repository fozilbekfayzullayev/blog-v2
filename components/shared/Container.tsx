export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-370 w-full mx-auto px-6 lg:px-8">{children}</div>
  );
}
