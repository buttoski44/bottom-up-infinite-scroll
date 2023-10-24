import { useInfiniteQuery } from "react-query";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import { Message, resData } from "./message";
import { Loader } from "lucide-react";

export const infiSlide = async ({ pageParam = 0 }) => {
  const response = await axios.get(
    "https://qa.corider.in/assignment/chat?page=" + pageParam
  );
  console.log("infiSlide :" + pageParam);
  return { res: response.data.chats, prevOffset: pageParam };
};

export const ChatContainer = () => {
  console.log("render");
  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
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
  return (
    <InfiniteScroll
      dataLength={messages ? messages.length : 0}
      next={() => fetchNextPage()}
      className="relative"
      inverse={true}
      hasMore={hasNextPage ? hasNextPage : false}
      loader={
        <div className="absolute top-2 left-[47%] text-center">
          <Loader className="text-pwaGray-secondary" />
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

// <div className="flex justify-center gap-4 items-center py-4 px-6">
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
