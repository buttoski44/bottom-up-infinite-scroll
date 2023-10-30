import { Header } from "./(component)/header";
import { Display } from "./(component)/display";
export default function Home() {
  return (
    <main className="flex flex-col w-full h-full">
      <Header />
      <Display />
    </main>
  );
}
