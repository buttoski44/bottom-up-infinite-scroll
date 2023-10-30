import { Input } from "@/components/ui/input";
import IconSend from "./(svg)/Iconsend";
import { Clip } from "./clip";
import { ChatContainer } from "./chatcontainer";

export const Display = () => {
  return (
    <section className="min-h-[77%] pb-2 px-4 bg-pwaWhite flex flex-col gap-1 justify-between items-center">
      <div
        id="scrollableDiv"
        className="h-[90%] overflow-y-scroll no-scroll-bar flex flex-col-reverse"
      >
        <ChatContainer />
      </div>
      <div className="h-[10%] w-full lg:w-1/2 flex items-center rounded-md shadow-lg overflow-clip border-[1px] border-pwaGray-secondary border-solid">
        <Input
          type="email"
          placeholder="Email"
          className="h-full border-none focus:outline-none text-pwaGray-primary font-bold placeholder:font-thin"
        />
        <Clip />
        <button className="h-full p-3 bg-white hover:bg-pwaGray-secondary">
          <IconSend />
        </button>
      </div>
    </section>
  );
};
