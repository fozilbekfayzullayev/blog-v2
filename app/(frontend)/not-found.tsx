import Container from "@/components/shared/Container";
import GoBackButton from "@/components/shared/GoBackButton";

export default function NotFound() {
  return (
    <Container>
      <div className="py-40 flex flex-col items-center text-center gap-5">
        <h1 className="text-8xl font-bold">404</h1>
        <p className="text-xl text-gray-700">Bunday sahifa topilmadi</p>
        <GoBackButton link="/" text="Bosh sahifaga" />
      </div>
    </Container>
  );
}
