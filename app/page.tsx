"use client";

import { Header } from "./(component)/header";
import { Display } from "./(component)/display";
import axios from "axios";
import { useQuery } from "react-query";
import { Skeleton } from "./(component)/skeleton";
export const retriveMessage = async () => {
  const response = await axios.get(
    "https://qa.corider.in/assignment/chat?page=0"
  );
  return response.data;
};

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
