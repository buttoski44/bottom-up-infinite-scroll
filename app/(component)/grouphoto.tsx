import Image from "next/image";
import { useQuery } from "react-query";
import { resData } from "./message";
import { retriveMessage } from "./header";
export const GroupPhoto = () => {
  const { data, error, isLoading } = useQuery("postsData", retriveMessage);
  const { chats } = data;
  const set = new Set<string>();
  chats.forEach((chat: resData) => {
    set.add(chat.sender.image.toString());
  });
  const myArr = Array.from(set);

  return (
    <span className="h-full w-12 rounded-full flex flex-wrap items-center justify-center bg-white shadow-lg overflow-hidden">
      {myArr.slice(0, 5).map((url, i) => (
        <Image key={i} src={url} width={24} height={24} alt="groupImage" />
      ))}
    </span>
  );
};
