import { Input } from "@/components/ui/input";
import IconSend from "./(svg)/Iconsend";
import { Clip } from "./clip";
import { ChatContainer } from "./chatcontainer";

export const Display = () => {
  return (
    <section className="h-[84%] pb-5 px-4 bg-pwaWhite flex flex-col gap-1 justify-between">
      <div
        id="scrollableDiv"
        className="h-[90%] overflow-y-scroll no-scroll-bar flex flex-col-reverse"
      >
        <ChatContainer />
      </div>
      <div className="h-[10%] w-full flex items-center">
        <span className="w-full flex items-center rounded-md overflow-clip">
          <Input
            type="email"
            placeholder="Email"
            className="border-none focus-visible:outline-none"
          />
          <Clip />
          <button className="p-3 bg-white hover:bg-pwaGray-hov">
            <IconSend />
          </button>
        </span>
      </div>
    </section>
  );
};
