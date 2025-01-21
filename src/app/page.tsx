import MainCarousel from "@/components/MainCarousel";
import OpenClassCard from "@/components/OpenClassCard";
import UpButton from "@/components/UpButton";

export default function Home() {
  return (
    <div className="pt-16 pb-32">
      <MainCarousel />
      <main className="flex flex-col items-center">
        <div className="w-full max-w-[21rem]">
          <h2 className="text-xl mt-7 text-left">현재 모집중 체험</h2>
        </div>
        <OpenClassCard />
      </main>
      <UpButton />
    </div>
  );
}
