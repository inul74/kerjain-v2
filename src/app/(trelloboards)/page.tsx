import Header from "@/components/Header";
import Productivity from "@/components/Productivity";

export default function Home() {
  return (
    <main className="">
      <Header />
      <div className="py-16 bg-[#e6fafc]">
        <Productivity />
      </div>
    </main>
  );
}
