import Main from "@/components/Main/main";
import Sidebar from "@/components/Sidebar/sidebar";

export default function Home() {
  return (
    <main className="flex">
      <Sidebar />
      <Main />
    </main>
  );
}
