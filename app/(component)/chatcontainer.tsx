"use client";

import { useInfiniteQuery } from "react-query";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import { Message, resData } from "./message";
import { Loader } from "lucide-react";

export const infiSlide = async ({ pageParam = 0 }) => {
  const response = await axios.get(
    "https://qa.corider.in/assignment/chat?page=" + pageParam
  );
  return { res: response.data.chats, prevOffset: pageParam };
};

export const ChatContainer = () => {
  const { data, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["infini"],
    queryFn: infiSlide,
    getNextPageParam: (lastPage) => {
      if (lastPage.prevOffset > 10) return 0;
      return lastPage.prevOffset + 1;
    },
  });
  const messages = data?.pages.reduce((acc: resData[], page) => {
    return [...page?.res, ...acc];
  }, []);

  if (isLoading)
    return (
      <div className="h-full w-full flex items-center justify-center">
        <Loader className="h-10 w-10 text-pwaGray-secondary" />
      </div>
    );
  return (
    <InfiniteScroll
      dataLength={messages ? messages.length : 0}
      next={() => fetchNextPage()}
      className="relative sm:px-20 md:px-30 lg:px-60"
      inverse={true}
      hasMore={hasNextPage ? hasNextPage : false}
      loader={
        <div className="absolute top-2 left-[47%] text-center bg-white p-2 rounded-md">
          <Loader className="text-pwaGray-primary" />
        </div>
      }
      scrollableTarget="scrollableDiv"
    >
      {messages &&
        messages?.map((obj: resData) => (
          <Message key={obj.id.toString()} obj={obj} />
        ))}
    </InfiniteScroll>
  );
};

// let chatss = chats.slice(0, 10);
// const date = new Date(chats[0].time);

// <div className="flex items-center justify-center gap-4 px-6 py-4">
{
  /* <hr className="flex-1" />
<p className="p-2 text-pwaGray-secondary text-sm flex-0.5 text-center">
{date.getDate() + " , " + arr[date.getUTCMonth()]}
</p>
<hr className="flex-1" /> */
}
{
  /* // </div> */
}

// const arr = [
//   "JAN",
//   "FEB",
//   "MAR",
//   "APR",
//   "MAY",
//   "JUN",
//   "JUL",
//   "AUG",
//   "SEP",
//   "OCT",
//   "NOV",
//   "DEC",
// ];
