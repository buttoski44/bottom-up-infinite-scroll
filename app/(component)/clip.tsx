import { ReactNode } from "react";
import IconPaperClip from "./(svg)/Iconpaperclip";
import IconCamera from "./(svg)/Iconcamera";
import IconDocument from "./(svg)/Icondocument";
import IconVideo from "./(svg)/Iconvideo";
import IconCorner from "./(svg)/Iconcorner";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const logo = [
  {
    component: () => <IconCamera />,
  },
  {
    component: () => <IconDocument />,
  },
  {
    component: () => <IconVideo />,
  },
];

export const Clip = () => {
  return (
    <div className="">
      <Popover>
        <PopoverTrigger className="h-full p-3 bg-white hover:bg-pwaGray-hov">
          <IconPaperClip />
        </PopoverTrigger>
        <PopoverContent
          className="w-32 mr-2 
        mb-1 bg-pwaGreen-lite flex rounded-full overflow-hidden relative border-none py-1 px-2"
        >
          {logo.map(({ component }, i) => (
            <button key={i} className="p-2 flex-grow">
              {component()}
            </button>
          ))}
          <span className="fixed -bottom-1 right-16">
            <IconCorner />
          </span>
        </PopoverContent>
      </Popover>
    </div>
  );
};
