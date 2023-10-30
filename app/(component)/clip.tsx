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
    <div className="h-full">
      <Popover>
        <PopoverTrigger className="h-full p-3 bg-white hover:bg-pwaGray-hov">
          <IconPaperClip />
        </PopoverTrigger>
        <PopoverContent className="relative flex w-32 px-2 py-1 mb-1 mr-2 overflow-hidden border-none rounded-full bg-pwaGreen-lite">
          {logo.map(({ component }, i) => (
            <button key={i} className="flex-grow h-full p-2">
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
