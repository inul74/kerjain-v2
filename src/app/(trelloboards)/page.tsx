import Header from "@/components/Header";
import { Workflow } from "@/components/Workflow";
import Productivity from "@/components/Productivity";

export default function Home() {
  return (
    <main className="">
      <Header />
      <div className="py-16 bg-[#e6fafc]">
        <Productivity />
        <Workflow />
      </div>
    </main>
  );
}
