"use client";

import { Header } from "./(component)/header";
import { Display } from "./(component)/display";
import { useQuery } from "react-query";
import { Skeleton } from "./(component)/skeleton";
import { retriveMessage } from "./(component)/header";

export default function Home() {
  const { data, error, isLoading } = useQuery("postsData", retriveMessage);

  if (isLoading) return <Skeleton />;
  return (
    <main className="h-full w-full flex flex-col">
      <Header />
      <Display />
    </main>
  );
}
